export const FOOTPRINT_LEVELS = {
  5: { label: "Lived here", points: 5, color: "#ff7e7e" },
  4: { label: "Stayed here", points: 4, color: "#ffb57e" },
  3: { label: "Visited here", points: 3, color: "#ffe57e" },
  2: { label: "Stopped here", points: 2, color: "#a8ffbe" },
  1: { label: "Passed here", points: 1, color: "#88aeff" },
  want: { label: "Want to go", points: 0, color: "#d6beff" },
  0: { label: "Never been here", points: 0, color: "var(--map-unvisited)" },
};

export const LEGEND_ORDER = [5, 4, 3, 2, 1, "want", 0];

export function createFootprint(levelsByCode, regions) {
  const knownCodes = new Set(regions.map(({ code }) => code));

  for (const [code, level] of Object.entries(levelsByCode)) {
    if (!knownCodes.has(code)) {
      throw new Error(`Unknown US footprint region: ${code}`);
    }
    if (level !== "want" && (!Number.isInteger(level) || level < 0 || level > 5)) {
      throw new Error(`Invalid US footprint level for ${code}: use 0–5 or "want"`);
    }
  }

  const configuredRegions = regions.map((region) => {
    const level = levelsByCode[region.code] ?? 0;
    const { label: levelLabel, points, color } = FOOTPRINT_LEVELS[level];
    return { ...region, level, levelLabel, points, color };
  });

  return {
    regions: configuredRegions,
    totalScore: configuredRegions.reduce((sum, region) => sum + region.points, 0),
  };
}
