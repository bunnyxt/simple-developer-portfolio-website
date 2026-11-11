import React from "react";
import levelsByCode from "@constants/us-footprint.json";
import mapData from "@data/us-map.json";
import { createFootprint, FOOTPRINT_LEVELS, LEGEND_ORDER } from "../lib/us-footprint.mjs";
import styles from "./USFootprint.module.css";

const footprint = createFootprint(levelsByCode, mapData.regions);
export default function USFootprint() {
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
      <figure className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          US Level {footprint.totalScore}
        </h3>
        <svg
          viewBox="35 105 1065 800"
          role="group"
          aria-labelledby="us-footprint-map-title us-footprint-map-description"
          className="mt-6 block h-auto w-full"
        >
          <title id="us-footprint-map-title">My US travel map</title>
          <desc id="us-footprint-map-description">
            States and territories colored by travel experience. Total score: {footprint.totalScore}.
            Each region includes its name and travel level. The legend shows the points for each level.
          </desc>
          {footprint.regions.map(({ code, name, path, levelLabel, color, points }) => (
            <g
              key={code}
              role="img"
              aria-label={`${name}: ${levelLabel}, ${points} ${points === 1 ? "point" : "points"}`}
              data-region={code}
            >
              <title>{name}: {levelLabel} ({points} {points === 1 ? "point" : "points"})</title>
              <path d={path} fill={color} className={styles.shape} />
            </g>
          ))}
          <g className={styles.labels} aria-hidden="true">
            {footprint.regions.map(({ code, label: { x, y, fontSize } }) => {
              return (
                <text
                  key={code}
                  x={x}
                  y={y}
                  fontSize={fontSize}
                  fill="#111"
                >
                  {code}
                </text>
              );
            })}
          </g>
          <g
            role="list"
            aria-label="Travel level legend"
            transform="translate(611.1 658.3)"
            className={styles.labels}
          >
            {LEGEND_ORDER.map((level, index) => {
              const { label, color, points } = FOOTPRINT_LEVELS[level];
              return (
                <g key={level} role="listitem" aria-label={`${label}: ${points} ${points === 1 ? "point" : "points"}`}>
                  <rect y={index * 32} width={222.1} height={32} fill={color} />
                  <g aria-hidden="true" fill="#111" fontSize={18}>
                    <text x={7.5} y={index * 32 + 22.5}>{label}</text>
                    <text x={214.1} y={index * 32 + 22.5} textAnchor="end">
                      {points} {points === 1 ? "pt" : "pts"}
                    </text>
                  </g>
                </g>
              );
            })}
            <rect width={222.1} height={224} rx={3} fill="none" stroke="#000" strokeWidth={2} />
          </g>
        </svg>
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
