export function getBooks() {
    return fetch("http://localhost:8000/")
        .then(response => response.json());
}