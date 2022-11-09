const test = require("tape");
const Calcul = require("../index");

// test("Return nothing", (t) => {
//   const expr = "";
//   const calcul = new Calcul();
//   t.equal(calcul.rpn(expr), undefined);
//   t.end();
// });


test("Return int", (t) => {
    const expr = "3";
    const calcul = new Calcul();
    t.equal(calcul.rpn(expr), 3);
    t.end();
  });