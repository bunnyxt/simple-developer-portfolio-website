import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { createFootprint } from "../lib/us-footprint.mjs";

const readJson = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));
const config = readJson("../constants/us-footprint.json");
const { regions } = readJson("../data/us-map.json");

test("the saved footprint renders all 56 regions and reproduces the image's 47 points", () => {
  const footprint = createFootprint(config, regions);
  assert.equal(footprint.totalScore, 47);
  assert.equal(footprint.regions.length, 56);
  assert.equal(new Set(footprint.regions.map(({ code }) => code)).size, 56);
  assert.equal(footprint.regions.find(({ code }) => code === "CA").levelLabel, "Lived here");
  assert.equal(footprint.regions.find(({ code }) => code === "IL").levelLabel, "Stopped here");
  for (const region of footprint.regions) {
    assert.ok(region.path.length > 0);
    assert.ok(Number.isFinite(region.label.x));
    assert.ok(Number.isFinite(region.label.y));
  }
});

test("editing a state's config updates its color, label, and the calculated score", () => {
  const before = createFootprint(config, regions);
  const after = createFootprint({ ...config, TX: 5 }, regions);
  const texas = after.regions.find(({ code }) => code === "TX");
  assert.equal(after.totalScore, 52);
  assert.equal(texas.levelLabel, "Lived here");
  assert.equal(texas.color, "#ff7e7e");
  assert.notEqual(texas.color, before.regions.find(({ code }) => code === "TX").color);
  assert.equal(config.TX, undefined);
});

test("want-to-go and unvisited places have distinct colors and both score zero", () => {
  const footprint = createFootprint({ TX: "want", CA: 0 }, regions);
  const texas = footprint.regions.find(({ code }) => code === "TX");
  const california = footprint.regions.find(({ code }) => code === "CA");
  const oregon = footprint.regions.find(({ code }) => code === "OR");
  assert.equal(footprint.totalScore, 0);
  assert.equal(texas.levelLabel, "Want to go");
  assert.notEqual(texas.color, california.color);
  assert.equal(oregon.levelLabel, "Never been here");
});

test("configuration typos fail clearly instead of publishing an incorrect map", () => {
  assert.throws(() => createFootprint({ XX: 3 }, regions), /Unknown US footprint region: XX/);
  for (const level of [6, -1, 2.5, "3", null]) {
    assert.throws(() => createFootprint({ CA: level }, regions), /Invalid US footprint level for CA/);
  }
});
