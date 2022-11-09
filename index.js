class Calcul {
    constructor() {}
  
    rpn(expr) {

        const tokens = expr.split(' ').reverse();

        if (!tokens.length) return undefined;
        if (tokens.length === 1 && tokens[0]) return parseInt(tokens[0]);

        if (tokens.length < 3) return undefined;

        while (tokens.length > 1) {

            const e1 = parseInt(tokens.pop());
            const e2 = parseInt(tokens.pop());
            const op = tokens.pop();

            const res = this.calc(e1, e2, op);
            tokens.push(res);
        }
        
        return tokens[0];
    }

    calc(e1, e2, op) {

        console.log(e1, e2, op);
        if (op === "+") return e1 + e2;
        if (op === "-") return e1 - e2;
        if (op === "*") return e1 * e2;
        if (op === "/") return e1 / e2;

        return 0;
    }
  }
  
  module.exports = Calcul;