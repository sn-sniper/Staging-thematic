import logoLight from "@assets/logos/Logo-white.svg";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useApiQuery } from "@hooks";
import bellIcon from "@assets/icons/bell.svg";
import userFallbackIcon from "@assets/icons/user.svg";
import "@styles/Navbar.css";
import SearchInput from "./ui/SearchInput/SearchInput";
import { getAuthToken } from "../middleware/requestContext";

const pointsFormatter = new Intl.NumberFormat("en-US");

function coerceNumber(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : null;
}

function sumPotentialPoints(collection) {
  if (!Array.isArray(collection) || collection.length === 0) {
    return null;
  }

  let total = 0;
  let hasValue = false;

  for (const entry of collection) {
    if (entry === null || entry === undefined) continue;
    if (typeof entry === "number") {
      if (!Number.isFinite(entry)) continue;
      hasValue = true;
      total += entry;
      continue;
    }

    if (typeof entry === "object") {
      const candidate =
        coerceNumber(entry.balance) ??
        coerceNumber(entry.points) ??
        coerceNumber(entry.available_points) ??
        coerceNumber(entry.availablePoints) ??
        coerceNumber(entry.total_points) ??
        coerceNumber(entry.totalPoints);

      if (candidate !== null) {
        hasValue = true;
        total += candidate;
        continue;
      }
    }

    const primitiveCandidate = coerceNumber(entry);
    if (primitiveCandidate !== null) {
      hasValue = true;
      total += primitiveCandidate;
    }
  }

  return hasValue ? total : null;
}

function extractObjectCandidate(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return null;
  }

  const directKeys = ["account", "data", "result", "profile", "user"];
  for (const key of directKeys) {
    const candidate = payload[key];
    if (
      candidate &&
      typeof candidate === "object" &&
      !Array.isArray(candidate)
    ) {
      return candidate;
    }
  }

  return payload;
}

function deriveProfileImage(accountPayload) {
  if (!accountPayload) return null;
  const account = extractObjectCandidate(accountPayload) ?? accountPayload;

  const candidates = [
    account?.profile_image_url,
    account?.profileImageUrl,
    account?.profile_image?.url,
    account?.profileImage?.url,
    account?.avatar_url,
    account?.avatarUrl,
    account?.avatar?.url,
    account?.images?.profile,
    account?.user?.profile_image_url,
  ];

  for (const candidate of candidates) {
    if (candidate) {
      return candidate;
    }
  }

  if (Array.isArray(account?.images)) {
    for (const image of account.images) {
      if (image?.type === "profile" && image?.url) {
        return image.url;
      }
    }
  }

  return null;
}

function derivePoints(accountPayload, activityPayload) {
  const account = extractObjectCandidate(accountPayload);
  const activity = extractObjectCandidate(activityPayload);

  const accountCandidates = account
    ? [
        coerceNumber(account.points_balance),
        coerceNumber(account.pointsBalance),
        coerceNumber(account.points),
        coerceNumber(account.available_points),
        coerceNumber(account.availablePoints),
        coerceNumber(account.activity_points),
        sumPotentialPoints(account.points),
      ]
    : [];

  for (const candidate of accountCandidates) {
    if (candidate !== null && candidate > 0) {
      return candidate;
    }
  }

  const activityCandidates = activity
    ? [
        coerceNumber(activity.points),
        coerceNumber(activity.balance),
        coerceNumber(activity.total_points),
        coerceNumber(activity.totalPoints),
        coerceNumber(activity.available_points),
        coerceNumber(activity.availablePoints),
        sumPotentialPoints(activity.items),
        sumPotentialPoints(activity.data),
        sumPotentialPoints(activity.activity_points),
        sumPotentialPoints(activity.activityPoints),
        sumPotentialPoints(
          Array.isArray(activityPayload) ? activityPayload : null
        ),
      ]
    : [
        sumPotentialPoints(
          Array.isArray(activityPayload) ? activityPayload : null
        ),
      ];

  for (const candidate of activityCandidates) {
    if (candidate !== null && candidate > 0) {
      return candidate;
    }
  }

  return null;
}

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const authToken = getAuthToken();
  const isAuthenticated = Boolean(authToken);

  const { data: accountData } = useApiQuery({
    resource: "accounts",
    method: "details",
    enabled: isAuthenticated,
  });

  const { data: activityPointsData } = useApiQuery({
    resource: "activity_points",
    method: "index",
    enabled: isAuthenticated,
  });

  const profileImage = useMemo(
    () => deriveProfileImage(accountData) ?? userFallbackIcon,
    [accountData]
  );

  const pointsValue = useMemo(
    () => derivePoints(accountData, activityPointsData),
    [accountData, activityPointsData]
  );

  const formattedPoints = useMemo(() => {
    if (!Number.isFinite(pointsValue) || pointsValue <= 0) {
      return null;
    }
    return pointsFormatter.format(Math.round(pointsValue));
  }, [pointsValue]);

  return (
    <div className="Navbar-container">
      <div className="left">
        <div className="logo">
          <img src={logoLight} alt="Logo" />
        </div>
        <button className={`upgrade${searchActive ? " hidden" : ""}`}>
          upgrade plan
        </button>
        <SearchInput onActiveChange={setSearchActive} />
      </div>
      <div className="right">
        <Link to="/">For you</Link>
        <Link to="/songs">Songs</Link>
        <Link to="/playlists">Playlists</Link>
        {formattedPoints ? (
          <span className="points" aria-label="Your points">
            {formattedPoints} points
          </span>
        ) : null}
        <span className="bell" aria-label="Notifications">
          <img src={bellIcon} alt="" />
        </span>
        <div className="nav-profile-pic">
          <img src={profileImage} alt="User profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
