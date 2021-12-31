const SESSION_KEY = 'SESSION_CURRENT_NAME';

export function getNameInSession() {
    return window.sessionStorage.getItem(SESSION_KEY);
}
export function hasNameInSession() {
    return getNameInSession() !== null;
}
export function addNameInSession(name) {
    try {
        window.sessionStorage.setItem(SESSION_KEY, name);
    } catch {
        throw new Error('Failed to store name in session storage');
    }
}