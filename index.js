class Calcul {
    constructor() {}
  
    rpn(expr) {

        const e = expr.split(' ');

        if (!e.length) return undefined;
        if (e.length === 1 && e[0]) return parseInt(e[0]);

        if (e.length < 3) return undefined;

        const e1 = parseInt(e[0]);
        const e2 = parseInt(e[1]);
        const op = e[2];

        if (op === "+") return parseInt(e1 + e2);
        if (op === "-") return parseInt(e1 - e2);
        if (op === "*") return parseInt(e1 * e2);
        if (op === "/") return parseInt(e1 / e2);
    }
  }
  
  module.exports = Calcul;