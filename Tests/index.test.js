const test = require("tape");
const Calcul = require("../index");

test("Return something", (t) => {
  const expr = "";
  const calcul = new Calcul();
  t.equal(calcul.rpn(expr), undefined);
  t.end();
});