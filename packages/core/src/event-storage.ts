
// WindowEventHandlers.onstorage 属性包含一个在 storage 事件触发时运行的事件处理程序。当更改存储时会触发事件处理程序。
export function useOnstorage(fn: Function) {
    window.onstorage = function (ev: StorageEvent) {
        fn(ev)
    }
}