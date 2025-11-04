import { useEffect, useMemo, useState } from "react";
import { useApiQuery } from "../hooks";
import {
  clearAuthToken,
  getAuthToken,
  setAuthToken,
  setContextHeader,
  clearContextHeaders,
} from "../middleware";

const DEFAULT_SONG_LIMIT = 10;

function isHttpUrl(value) {
  return typeof value === "string" && /^https?:\/\//iu.test(value);
}

function getPathValue(source, path) {
  return path.reduce((acc, segment) => {
    if (!acc || typeof acc !== "object") return null;
    return acc[segment] ?? null;
  }, source);
}

function findProfileImage(data) {
  if (!data || typeof data !== "object") return null;

  const candidatePaths = [
    ["profile_image_url"],
    ["profile", "image_url"],
    ["profileImageUrl"],
    ["profile", "image", "url"],
    ["profile", "avatar_url"],
    ["profile_image", "url"],
    ["profile_image", "large"],
    ["profile_image", "default"],
    ["avatar_url"],
    ["avatar", "url"],
    ["user", "profile_image_url"],
    ["user", "avatar_url"],
  ];

  for (const path of candidatePaths) {
    const value = getPathValue(data, path);
    if (isHttpUrl(value)) {
      return value;
    }
  }

  const visited = new Set();

  function deepSearch(value) {
    if (!value || visited.has(value)) return null;

    if (typeof value === "string" && isHttpUrl(value)) {
      if (/profile|avatar|image/iu.test(value)) {
        return value;
      }
    }

    if (typeof value !== "object") {
      return null;
    }

    visited.add(value);

    if (Array.isArray(value)) {
      for (const item of value) {
        const found = deepSearch(item);
        if (found) return found;
      }
    } else {
      for (const [key, child] of Object.entries(value)) {
        if (!child) continue;
        if (
          typeof child === "string" &&
          isHttpUrl(child) &&
          /profile|avatar|image/iu.test(key)
        ) {
          return child;
        }

        const found = deepSearch(child);
        if (found) return found;
      }
    }

    return null;
  }

  return deepSearch(data);
}

function formatError(error) {
  if (!error) return null;

  if (error.type && error.message) {
    return error;
  }

  return { inferred: true, original: error };
}

function Section({ title, status, error, children, onRetry }) {
  const preparedError = formatError(error);

  return (
    <section style={{ marginBottom: "2rem" }}>
      <header style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <span style={{ fontSize: "0.9rem", color: "#555" }}>{status}</span>
        {onRetry ? (
          <button type="button" onClick={onRetry}>
            Refetch
          </button>
        ) : null}
      </header>
      {preparedError ? (
        <pre
          style={{ color: "crimson", background: "#fee", padding: "0.75rem" }}
        >
          {JSON.stringify(preparedError, null, 2)}
        </pre>
      ) : (
        children
      )}
    </section>
  );
}

export default function TestingPage() {
  const [tokenInput, setTokenInput] = useState(() => getAuthToken());
  const [youtubeChannelId, setYoutubeChannelId] = useState("");
  const [teamId, setTeamId] = useState("");

  const tokenReady = Boolean(tokenInput);

  useEffect(() => {
    if (tokenInput) {
      setAuthToken(tokenInput, { persist: true });
    } else {
      clearAuthToken();
    }
  }, [tokenInput]);

  useEffect(() => {
    clearContextHeaders();
    if (youtubeChannelId) {
      setContextHeader("YoutubeChannelId", youtubeChannelId);
    }
    if (teamId) {
      setContextHeader("TeamId", teamId);
    }
  }, [youtubeChannelId, teamId]);

  const accountQuery = useApiQuery({
    resource: "accounts",
    method: "details",
    enabled: tokenReady,
  });

  const playlistsQuery = useApiQuery({
    resource: "artist_dashboard",
    method: "playlists",
    enabled: tokenReady,
  });

  const songsQuery = useApiQuery({
    resource: "songs",
    method: "search",
    enabled: tokenReady,
    args: {
      body: {
        limit: DEFAULT_SONG_LIMIT,
      },
    },
    dependencies: [DEFAULT_SONG_LIMIT],
  });

  const downloadsQuery = useApiQuery({
    resource: "song_downloads",
    method: "index",
    enabled: tokenReady,
    args: {
      query: {
        limit: DEFAULT_SONG_LIMIT,
      },
    },
    dependencies: [DEFAULT_SONG_LIMIT],
  });

  const playlists = playlistsQuery.data?.playlists ?? playlistsQuery.data ?? [];
  const songs = songsQuery.data?.songs ?? songsQuery.data ?? [];
  const downloads = downloadsQuery.data?.downloads ?? downloadsQuery.data ?? [];
  const profileImageUrl = useMemo(
    () => findProfileImage(accountQuery.data),
    [accountQuery.data]
  );

  const accountStatus = useMemo(() => {
    if (accountQuery.isLoading) return "Loading";
    if (accountQuery.isError) return "Error";
    if (accountQuery.isSuccess) return "Success";
    return "Idle";
  }, [accountQuery.isError, accountQuery.isLoading, accountQuery.isSuccess]);

  const playlistStatus = useMemo(() => {
    if (playlistsQuery.isLoading) return "Loading";
    if (playlistsQuery.isError) return "Error";
    if (playlistsQuery.isSuccess) return "Success";
    return "Idle";
  }, [
    playlistsQuery.isError,
    playlistsQuery.isLoading,
    playlistsQuery.isSuccess,
  ]);

  const songStatus = useMemo(() => {
    if (songsQuery.isLoading) return "Loading";
    if (songsQuery.isError) return "Error";
    if (songsQuery.isSuccess) return "Success";
    return "Idle";
  }, [songsQuery.isError, songsQuery.isLoading, songsQuery.isSuccess]);

  const downloadsStatus = useMemo(() => {
    if (downloadsQuery.isLoading) return "Loading";
    if (downloadsQuery.isError) return "Error";
    if (downloadsQuery.isSuccess) return "Success";
    return "Idle";
  }, [
    downloadsQuery.isError,
    downloadsQuery.isLoading,
    downloadsQuery.isSuccess,
  ]);

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>API Test</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Authorization</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            maxWidth: "40rem",
          }}
        >
          <label
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            <span>Bearer token</span>
            <input
              type="text"
              value={tokenInput}
              onChange={(event) => setTokenInput(event.target.value)}
              placeholder="Paste a bearer token"
              style={{ padding: "0.5rem" }}
            />
          </label>
          <label
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            <span>YoutubeChannelId header (optional)</span>
            <input
              type="text"
              value={youtubeChannelId}
              onChange={(event) =>
                setYoutubeChannelId(event.target.value.trim())
              }
              placeholder="e.g. UC123..."
              style={{ padding: "0.5rem" }}
            />
          </label>
          <label
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            <span>TeamId header (optional)</span>
            <input
              type="text"
              value={teamId}
              onChange={(event) => setTeamId(event.target.value.trim())}
              placeholder="Team ID"
              style={{ padding: "0.5rem" }}
            />
          </label>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button type="button" onClick={() => setTokenInput("")}>
              Clear token
            </button>
            <button
              type="button"
              onClick={() => {
                clearAuthToken();
                setTokenInput("");
              }}
            >
              Forget persisted token
            </button>
          </div>
        </div>
      </section>

      <Section
        title="Account Details"
        status={accountStatus}
        error={accountQuery.error}
        onRetry={tokenReady ? accountQuery.refetch : undefined}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          {profileImageUrl ? (
            <img
              src={profileImageUrl}
              alt="Profile"
              style={{
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #ddd",
              }}
            />
          ) : (
            <div
              style={{
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                border: "2px dashed #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                color: "#666",
              }}
            >
              No image
            </div>
          )}

          <div style={{ flex: 1 }}>
            <strong>Profile Image URL</strong>
            <div style={{ fontSize: "0.85rem", color: "#444" }}>
              {profileImageUrl || "Not provided in account payload"}
            </div>
          </div>
        </div>
        <pre
          style={{
            background: "#f4f4f4",
            padding: "0.75rem",
            borderRadius: "16px",
          }}
        >
          {accountQuery.data
            ? JSON.stringify(accountQuery.data, null, 2)
            : "Awaiting data"}
        </pre>
      </Section>

      <Section
        title="Artist Playlists"
        status={playlistStatus}
        error={playlistsQuery.error}
        onRetry={tokenReady ? playlistsQuery.refetch : undefined}
      >
        <pre style={{ background: "#f4f4f4", padding: "0.75rem" }}>
          {playlists.length
            ? JSON.stringify(playlists.slice(0, 10), null, 2)
            : "No playlists found"}
        </pre>
      </Section>

      <Section
        title={`Songs Search (limit ${DEFAULT_SONG_LIMIT})`}
        status={songStatus}
        error={songsQuery.error}
        onRetry={tokenReady ? songsQuery.refetch : undefined}
      >
        <pre style={{ background: "#f4f4f4", padding: "0.75rem" }}>
          {songs.length
            ? JSON.stringify(songs.slice(0, DEFAULT_SONG_LIMIT), null, 2)
            : "No songs returned"}
        </pre>
      </Section>

      <Section
        title="Recent Downloads"
        status={downloadsStatus}
        error={downloadsQuery.error}
        onRetry={tokenReady ? downloadsQuery.refetch : undefined}
      >
        <pre style={{ background: "#f4f4f4", padding: "0.75rem" }}>
          {downloads.length
            ? JSON.stringify(downloads.slice(0, DEFAULT_SONG_LIMIT), null, 2)
            : "No downloads returned"}
        </pre>
      </Section>
    </main>
  );
}
