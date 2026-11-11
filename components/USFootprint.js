import React, { useState } from "react";
import levelsByCode from "@constants/us-footprint.json";
import mapData from "@data/us-map.json";
import { createFootprint, FOOTPRINT_LEVELS, LEGEND_ORDER } from "../lib/us-footprint.mjs";
import styles from "./USFootprint.module.css";

const footprint = createFootprint(levelsByCode, mapData.regions);
const alphabeticalRegions = [...footprint.regions].sort((a, b) => a.name.localeCompare(b.name));

export default function USFootprint() {
  const [activeCode, setActiveCode] = useState("");
  const activeRegion = footprint.regions.find(({ code }) => code === activeCode);

  return (
    <section
      aria-labelledby="us-footprint-heading"
      className="max-w-6xl mx-auto pt-16 pb-20"
    >
      <h2
        id="us-footprint-heading"
        className="bg-blue-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50"
      >
        My US Footprint
      </h2>
      <p className="text-xl text-gray-700 mt-4 dark:text-gray-300">
        Places I've lived in, visited, or passed through across the US.
      </p>
      <figure className={`${styles.map} mt-8 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-700 dark:bg-gray-800`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              US Level {footprint.totalScore}
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Hover, tap, or focus a state to explore.
            </p>
          </div>
          <div>
            <label htmlFor="us-footprint-region" className="block text-sm text-gray-600 dark:text-gray-300">
              Explore a state or territory
            </label>
            <select
              id="us-footprint-region"
              value={activeCode}
              onChange={(event) => setActiveCode(event.target.value)}
              className="mt-1 max-w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus-visible:outline-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
            >
              <option value="">Choose a place</option>
              {alphabeticalRegions.map(({ code, name }) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </select>
          </div>
        </div>
        <svg
          viewBox="35 105 1065 700"
          role="group"
          aria-labelledby="us-footprint-map-title us-footprint-map-description"
          className="mt-6 block h-auto w-full"
        >
          <title id="us-footprint-map-title">My US travel map</title>
          <desc id="us-footprint-map-description">
            States and territories colored by travel experience. Total score: {footprint.totalScore}.
            Select a region to see its name and travel level.
          </desc>
          {footprint.regions.map(({ code, name, path, levelLabel, color, points }) => (
            <g
              key={code}
              role="button"
              tabIndex={0}
              aria-label={`${name}: ${levelLabel}, ${points} ${points === 1 ? "point" : "points"}`}
              aria-pressed={activeCode === code}
              className={styles.region}
              data-region={code}
              onPointerEnter={() => setActiveCode(code)}
              onFocus={() => setActiveCode(code)}
              onClick={() => setActiveCode(code)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveCode(code);
                }
              }}
            >
              <title>{name}: {levelLabel} ({points} {points === 1 ? "point" : "points"})</title>
              <path d={path} fill={color} className={styles.shape} />
            </g>
          ))}
          <g className={styles.labels} aria-hidden="true">
            {footprint.regions.map(({ code, level, label: { x, y, fontSize } }) => {
              return (
                <text
                  key={code}
                  x={x}
                  y={y}
                  fontSize={fontSize}
                  fill={level === 0 ? "var(--map-unvisited-text)" : "#111827"}
                >
                  {code}
                </text>
              );
            })}
          </g>
        </svg>
        <p
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="mt-4 min-h-12 rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-200"
        >
          {activeRegion ? (
            <><strong>{activeRegion.name}</strong> · {activeRegion.levelLabel} · {activeRegion.points} {activeRegion.points === 1 ? "point" : "points"}</>
          ) : "Choose a place on the map or from the list to see its travel level."}
        </p>
        <ul aria-label="Travel level legend" className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700 sm:grid-cols-4 dark:text-gray-200">
          {LEGEND_ORDER.map((level) => {
            const { label, color, points } = FOOTPRINT_LEVELS[level];
            return (
              <li key={level} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-4 w-4 shrink-0 rounded-sm border border-gray-400" style={{ backgroundColor: color }} />
                <span>{label} <span className="text-gray-500 dark:text-gray-400">({points})</span></span>
              </li>
            );
          })}
        </ul>
        <figcaption className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Map adapted from{" "}
          <a href="https://github.com/tenpages/us-level" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-blue-500">US Level by tenpages</a>
          {" · "}
          <a href="/licenses/us-level.txt" className="underline underline-offset-4 hover:text-blue-500">MIT license</a>
        </figcaption>
      </figure>
    </section>
  );
}
