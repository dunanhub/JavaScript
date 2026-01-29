export async function safeFetchJson(url, options = {}) {
    try {
        const response = await fetch(url, options);

        // Проверка HTTP - статуса
        if (!response.ok) {
            const text = await response.text().catch(() => '');
            throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
        }

        // Безопасный разбор или парсинг JSON
        const data = await response.json().catch(() => null);
        if (data === null) {
            throw new Error('Failed to parse JSON response');
        }

        return data;
    } catch (error) {
        // Централизованная обработка ошибок
        throw new Error(`Fetch error: ${error.message}`);
    }
}

// Пример использования функции
// (async () => {
//    const user = await safeFetchJson(
//     'https://jsonplaceholder.typicode.com/users/1'
//    );
//   console.log(user);
// })();