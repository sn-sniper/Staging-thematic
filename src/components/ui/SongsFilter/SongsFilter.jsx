import { useState } from "react";
import "./SongsFilter.css";

const TYPE_OPTIONS = ["Songs", "Videos", "SFX", "Photos"];
const SONG_TYPE_OPTIONS = ["Instrumental", "Explicit Songs", "With Lyrics"];
const ACCESS_TYPE_OPTIONS = ["Free", "Premium", "Early Access"];

function toToggleState(options, initialValue = false) {
  return options.reduce((acc, option) => {
    acc[option] = initialValue;
    return acc;
  }, {});
}

const SongsFilter = () => {
  const [recentHistory, setRecentHistory] = useState(false);
  const [selectedType, setSelectedType] = useState(TYPE_OPTIONS[0]);
  const [songTypeState, setSongTypeState] = useState(() =>
    toToggleState(SONG_TYPE_OPTIONS)
  );
  const [accessState, setAccessState] = useState(() =>
    toToggleState(ACCESS_TYPE_OPTIONS)
  );

  return (
    <aside className="songs-filter" aria-label="Songs filters">
      <div className="songs-filter__section">
        <h2 className="songs-filter__title">Filters</h2>
      </div>

      <div className="songs-filter__section">
        <div className="songs-filter__row">
          <span className="songs-filter__label">Recent filter history</span>
          <label className="songs-filter__toggle">
            <input
              type="checkbox"
              className="songs-filter__switch"
              checked={recentHistory}
              onChange={(event) => setRecentHistory(event.target.checked)}
            />
            <span className="songs-filter__switch-slider" aria-hidden="true" />
          </label>
        </div>
      </div>

      <div className="songs-filter__section">
        <p className="songs-filter__subtitle">Content type</p>
        <div className="songs-filter__chips">
          {TYPE_OPTIONS.map((type) => (
            <button
              type="button"
              key={type}
              className={`songs-filter__chip${
                selectedType === type ? " songs-filter__chip--active" : ""
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="songs-filter__section">
        <p className="songs-filter__subtitle">Songs type</p>
        <ul className="songs-filter__options">
          {SONG_TYPE_OPTIONS.map((option) => (
            <li key={option} className="songs-filter__option">
              <span>{option}</span>
              <label className="songs-filter__toggle">
                <input
                  type="checkbox"
                  className="songs-filter__switch"
                  checked={Boolean(songTypeState[option])}
                  onChange={() =>
                    setSongTypeState((prev) => ({
                      ...prev,
                      [option]: !prev[option],
                    }))
                  }
                />
                <span
                  className="songs-filter__switch-slider"
                  aria-hidden="true"
                />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="songs-filter__section">
        <div className="songs-filter__section-header">
          <p className="songs-filter__subtitle">Access type</p>
          
        </div>
        <ul className="songs-filter__checkboxes">
          {ACCESS_TYPE_OPTIONS.map((option) => (
            <li key={option}>
              <label className="songs-filter__checkbox">
                <input
                  type="checkbox"
                  checked={Boolean(accessState[option])}
                  onChange={() =>
                    setAccessState((prev) => ({
                      ...prev,
                      [option]: !prev[option],
                    }))
                  }
                />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SongsFilter;
