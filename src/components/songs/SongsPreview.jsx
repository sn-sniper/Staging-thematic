import { useMemo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useApiQuery } from "@hooks";
import searchIcon from "@assets/icons/search.svg";
import streamIcon from "@assets/icons/radio.svg";
import shareIcon from "@assets/icons/share.svg";
import addIcon from "@assets/icons/add.svg";
import downloadIcon from "@assets/icons/download.svg";

const SONG_LIMIT = 12;

const SORT_OPTIONS = [
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest" },
  { value: "duration", label: "Shortest Duration" },
  { value: "a-z", label: "A → Z" },
];

function pickFirst(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return arr[0];
}

function normalizeSongsPayload(payload) {
  if (!payload || typeof payload !== "object") {
    return { songs: [], total: 0 };
  }

  const items = Array.isArray(payload.items)
    ? payload.items
    : Array.isArray(payload.songs)
    ? payload.songs
    : Array.isArray(payload.data)
    ? payload.data
    : [];

  return {
    songs: items,
    total: Number.isFinite(payload.total) ? payload.total : items.length,
  };
}

function formatDuration(value) {
  if (!value) return "--:--";
  if (typeof value === "string" && value.includes(":")) return value;
  const numeric = Number(value);
  if (!Number.isFinite(numeric) || numeric <= 0) return "--:--";
  const minutes = Math.floor(numeric / 60);
  const seconds = Math.round(numeric % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function buildArtistString(song) {
  if (song?.artistName) return song.artistName;
  if (song?.artist) return song.artist;
  if (Array.isArray(song?.creators) && song.creators.length) {
    return song.creators
      .map((creator) => creator?.name || creator?.username)
      .filter(Boolean)
      .join(", ");
  }
  return "Unknown";
}

function buildCoverUrl(song) {
  return (
    song?.albumArtThumbnailUrl ||
    song?.albumArtUrl ||
    song?.coverArtUrl ||
    song?.coverUrl ||
    "https://via.placeholder.com/56x56.png?text=%E2%99%AA"
  );
}

function filterSongs(songs, term) {
  const trimmed = term.trim().toLowerCase();
  if (!trimmed) return songs;

  return songs.filter((song) => {
    const fields = [
      song?.name,
      song?.title,
      song?.artistName,
      song?.artist,
      song?.albumName,
      song?.description,
    ]
      .filter(Boolean)
      .map((value) => String(value).toLowerCase());

    if (Array.isArray(song?.creators)) {
      for (const creator of song.creators) {
        if (creator?.name) fields.push(String(creator.name).toLowerCase());
        if (creator?.username)
          fields.push(String(creator.username).toLowerCase());
      }
    }

    return fields.some((value) => value.includes(trimmed));
  });
}

function sortSongs(songs, sortValue) {
  const working = [...songs];

  switch (sortValue) {
    case "newest":
      working.sort((a, b) => {
        const aDate = new Date(a?.releasedAt ?? a?.createdAt ?? 0).valueOf();
        const bDate = new Date(b?.releasedAt ?? b?.createdAt ?? 0).valueOf();
        return bDate - aDate;
      });
      break;
    case "duration":
      working.sort((a, b) => {
        const aDuration = Number(a?.durationSeconds ?? a?.duration ?? 0);
        const bDuration = Number(b?.durationSeconds ?? b?.duration ?? 0);
        return aDuration - bDuration;
      });
      break;
    case "a-z":
      working.sort((a, b) =>
        String(a?.name ?? a?.title ?? "").localeCompare(
          String(b?.name ?? b?.title ?? "")
        )
      );
      break;
    case "popular":
    default:
      working.sort((a, b) => {
        const bDownloads = Number(b?.downloadCount ?? b?.downloads ?? 0);
        const aDownloads = Number(a?.downloadCount ?? a?.downloads ?? 0);
        return bDownloads - aDownloads;
      });
      break;
  }

  return working;
}

function SongsPreview({ onPlay }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortValue, setSortValue] = useState(SORT_OPTIONS[0].value);

  const { data, isLoading, isError, error, refetch } = useApiQuery({
    resource: "songs",
    method: "community_review",
    args: {
      query: {
        limit: SONG_LIMIT,
        with_creators: true,
      },
    },
    transform: normalizeSongsPayload,
  });

  const rawSongs = useMemo(() => data?.songs ?? [], [data]);

  const preparedSongs = useMemo(() => {
    const filtered = filterSongs(rawSongs, searchTerm);
    const sorted = sortSongs(filtered, sortValue);
    return sorted.slice(0, SONG_LIMIT).map((song) => ({
      id: song?.id ?? song?.guid ?? song?.uuid ?? song?.name,
      title: song?.name ?? song?.title ?? "Untitled",
      artist: buildArtistString(song),
      duration: formatDuration(
        song?.durationLabel ??
          song?.duration_formatted ??
          song?.duration ??
          song?.durationSeconds
      ),
      coverUrl: buildCoverUrl(song),
      streamUrl: pickFirst(song?.streamUrls) ?? song?.streamUrl ?? null,
      shareUrl: song?.shareUrl ?? song?.url ?? null,
      downloadUrl: song?.downloadUrl ?? song?.download_url ?? null,
      raw: song,
    }));
  }, [rawSongs, searchTerm, sortValue]);

  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const handleSortChange = useCallback((value) => {
    setSortValue(value);
  }, []);

  return (
    <section className="songs-preview">
      <header className="songs-preview__header">
        <div className="songs-preview__search">
          <label htmlFor="songs-preview-search">Search by keyword</label>
          <div className="songs-preview__search-field">
            <input
              id="songs-preview-search"
              type="search"
              value={searchTerm}
              placeholder="Search by keyword"
              onChange={(event) => handleSearchChange(event.target.value)}
            />
            <button>
              <img src={searchIcon} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="songs-preview__sort">
          <label htmlFor="songs-preview-sort">Sort by</label>
          <select
            id="songs-preview-sort"
            value={sortValue}
            onChange={(event) => handleSortChange(event.target.value)}
            aria-label="Sort songs"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="songs-preview__results">
        <div className="songs-preview__results-header">
          <h2 id="songs-preview-heading">Best result</h2>
          {isLoading ? (
            <span className="songs-preview__status">Loading…</span>
          ) : null}
          {isError ? (
            <button
              type="button"
              onClick={() => refetch()}
              className="songs-preview__status"
            >
              Retry loading songs
            </button>
          ) : null}
        </div>
        <ul className="songs-preview__list">
          {preparedSongs.map((song) => (
            <li key={song.id} className="songs-preview__item">
              <button
                type="button"
                className="songs-preview__play"
                onClick={() => onPlay?.(song)}
                aria-label={`Play ${song.title} by ${song.artist}`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="songs-preview__play-icon"
                >
                  <path d="M8 6v12l10-6-10-6z" fill="currentColor" />
                </svg>
              </button>
              <div className="songs-preview__cover">
                <img src={song.coverUrl} alt="" />
              </div>
              <div className="songs-preview__meta">
                <p className="songs-preview__title">{song.title}</p>
                <p className="songs-preview__artist">{song.artist}</p>
              </div>
              <div className="songs-preview__actions">
                <button
                  type="button"
                  aria-label="Stream"
                  disabled={!song.streamUrl}
                >
                  <img src={streamIcon} alt="" />
                </button>
                <button
                  type="button"
                  aria-label="Share"
                  disabled={!song.shareUrl}
                >
                  <img src={shareIcon} alt="" />
                </button>
                <button type="button" aria-label="Add to playlist">
                  <img src={addIcon} alt="" />
                </button>
                <button
                  type="button"
                  aria-label="Download"
                  disabled={!song.downloadUrl}
                >
                  <img src={downloadIcon} alt="" />
                </button>
              </div>
              <span className="songs-preview__duration">{song.duration}</span>
            </li>
          ))}
        </ul>
        {!isLoading && preparedSongs.length === 0 ? (
          <div className="songs-preview__empty">
            <p>No songs matched your search.</p>
            {isError && error?.message ? <p>{error.message}</p> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

SongsPreview.propTypes = {
  onPlay: PropTypes.func,
};

SongsPreview.defaultProps = {
  onPlay: undefined,
};

export default SongsPreview;
