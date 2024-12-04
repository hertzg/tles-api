import { describe, it } from "node:test";
import assert from "node:assert";
import { collectVariables } from "../src/api/parser.js";

const testFixture = ([name, script, expected]) => {
  assert.deepStrictEqual(collectVariables(script), expected, name);
};

import TL_SG105E_20220414 from "./fixtures/TL-SG105E_5.0__1.0.0_Build_20220414_Rel.50349.js";
import TL_SG105E_20220930 from "./fixtures/TL-SG105E_5.0__1.0.0_Build_20220930_Rel.36078.js";
import TL_SD105E_20230214 from "./fixtures/TL-SG105E_5.0__1.0.0_Build_20230214_Rel.63440.js";

describe("TL-SG105E 5.0", () => {
  it("1.0.0 Build 20220414 Rel.50349", () => {
    TL_SG105E_20220414.forEach(testFixture);
  });

  it("1.0.0 Build 20220930 Rel.36078", () => {
    TL_SG105E_20220930.forEach(testFixture);
  });

  it("1.0.0 Build 20230214 Rel.63440", () => {
    TL_SD105E_20230214.forEach(testFixture);
  });
});

import TLSG1016PE_30__100_Build_20230219_Rel70930 from "./fixtures/TL-SG1016PE_3.0__1.0.0_Build_20230219_Rel.70930.js";
describe("TL-SG1016PE 3.0", () => {
  it("1.0.0 Build 20230219 Rel.70930", () => {
    TLSG1016PE_30__100_Build_20230219_Rel70930.forEach(testFixture);
  });
});
