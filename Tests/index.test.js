const test = require("tape");
const Calcul = require("../index");

test("Return nothing", (t) => {
  const expr = "";
  const calcul = new Calcul();
  t.equal(calcul.rpn(expr), undefined);
  t.end();
});

test("Return int", (t) => {
  const expr = "3";
  const calcul = new Calcul();
  t.equal(calcul.rpn(expr), 3);
  t.end();
});

test("Return result addition", (t) => {
  const expr = "2 3 +";
  const calcul = new Calcul();
  t.equal(calcul.rpn(expr), 5);
  t.end();
});

test("Return result soustraction", (t) => {
  const expr = "2 3 -";
  const calcul = new Calcul();
  t.equal(calcul.rpn(expr), -1);
  t.end();
});

test("Return result multiplication", (t) => {
  const expr = "2 3 *";
  const calcul = new Calcul();
  t.equal(calcul.rpn(expr), 6);
  t.end();
});

test("Return result division", (t) => {
  const expr = "6 3 /";
  const calcul = new Calcul();
  t.equal(calcul.rpn(expr), 2);
  t.end();
});

test("Multiple operation", (t) => {
  const expr = "6 3 / 3 -";
  const calcul = new Calcul();
  t.equal(calcul.rpn(expr), -1);
  t.end();
});
