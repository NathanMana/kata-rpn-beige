function calc(e1, e2, op) {
  // TODO.
  return "0";
}

function rpn(expr) {
  const tokens = expr.split(" ").reverse();

  while (tokens.length > 1) {
    const e1 = tokens.pop();
    const e2 = tokens.pop();
    const op = tokens.pop();
    const res = calc(e1, e2, op);
    tokens.push(res);
  }
  
  return Integer.parseInt(res);
}
