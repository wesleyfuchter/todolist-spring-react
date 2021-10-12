export function findAllPending() {
    const headers = new Headers({
        "Content-Type": "application/json",
    });
    const request = {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default',
    };
    return fetch('http://localhost:8080/tasks/pending', request).then(response => response.json());
}
export function findAllDone() {
    const headers = new Headers({
        "Content-Type": "application/json",
    });
    const request = {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default',
    };
    return fetch('http://localhost:8080/tasks/done', request).then(response => response.json());
}
export function setAsPending(task) {
    const headers = new Headers({
        "Content-Type": "application/json",
    });
    const request = {
        method: 'PATCH',
        headers: headers,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(task)
    };
    return fetch(`http://localhost:8080/tasks/${task.id}/set-as-pending`, request).then(response => response.json());
}
export function setAsDone(task) {
    const headers = new Headers({
        "Content-Type": "application/json",
    });
    const request = {
        method: 'PATCH',
        headers: headers,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(task)
    };
    return fetch(`http://localhost:8080/tasks/${task.id}/set-as-done`, request).then(response => response.json());
}
export function save(task) {
    const headers = new Headers({
        "Content-Type": "application/json",
    });
    const request = {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(task)
    };
    return fetch(`http://localhost:8080/tasks`, request).then(response => response.json());
}