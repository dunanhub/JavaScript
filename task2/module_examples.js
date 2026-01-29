// Базовый Module Pattern (IIFE)
const basicModule = (function() {
    function sayHello() {
        return "Hello, World!";
    }

    // Публичный API
    return {
        sayHello,
    };
})();

console.log(basicModule.sayHello());

// Module Pattern с приватными переменными и методами
const counterModule = (function() {
    let count = 0; // Приватная переменная

    function increment() {
        count += 1;
        return count;
    }

    function getCount() {
        return count;
    }

    // Публичный API
    return {
        increment,
        getCount,
    };
})();

console.log(counterModule.increment());
console.log(counterModule.increment());
console.log(counterModule.getCount());

// ES6 Модуль с экспортом функции
function add(a, b) {
    return a + b;
}

console.log("ES6 add result", add(5, 3));