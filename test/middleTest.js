// Import functions
const { assert } = require("chai");
const middle = require("../middle");

// Test code
describe("#middle", () => {
  it("returns [2,3] for [0, 1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([0, 1, 2, 3, 4, 5]), [2, 3]);
  });

  it("returns [3] for [0, 1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([0, 1, 2, 3, 4, 5, 6]), [3]);
  });

  it("returns [] for [0, 1]", () => {
    assert.deepEqual(middle([0, 1]), []);
  });
});
