
export function injectOnstorage() {
    return new Promise(resolve => {
        window.onstorage = function (ev: StorageEvent) {
            console.log("[debug]ev:", ev)
            resolve(ev)
        }
    })
}