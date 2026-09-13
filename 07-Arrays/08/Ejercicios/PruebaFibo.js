function fibonacci(n) {
    let a = 0n, b = 1n;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
}

console.log(fibonacci(10).toString());    // 55
console.log(fibonacci(50).toString());    // 12586269025
console.log(fibonacci(100).toString());   // 354224848179261915075
console.log(fibonacci(1000).toString());  // Número enorme sin la "n"
function fibonacci(n) {
    let a = 0n, b = 1n;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
}

// Calculamos dos números consecutivos
const fib100 = fibonacci(100);
const fib99  = fibonacci(99);

// Dividimos — hay que convertirlos a Number porque BigInt no permite decimales
const proporcion = Number(fib100) / Number(fib99);

console.log("Fibonacci(100):", fib100.toString());
console.log("Fibonacci(99):", fib99.toString());
console.log("Proporción áurea:", proporcion);