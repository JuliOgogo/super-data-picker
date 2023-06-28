export function setToLocalStorage<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}

export function getFromLocalStorage(key: string) {
    let stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) stateAsString = JSON.parse(stateAsString)
    return stateAsString
}