const kotanitest = artifacts.require("kotanitest");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("kotanitest", function (/* accounts */) {
  it("should assert true", async function () {
    await kotanitest.deployed();
    return assert.isTrue(true);
  });
});
