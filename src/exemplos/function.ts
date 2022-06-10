function printValoresNumericos(n1: number, n2: number): void {
    console.log(n1 + n2);
}

function somarValoresNumericosETratar(n1: number, n2: number, callback: (n: number) => number): number {
    let resultado = n1 + n2;
    return callback(resultado)
}

function aoQuadrado(n: number): number {
    return n * n;
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado))