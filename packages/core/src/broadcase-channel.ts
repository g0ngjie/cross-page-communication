
export function useChannel(fn: Function) {
    // 创建
    const broadcastChannel = new BroadcastChannel('channelName');

    // 监听消息
    broadcastChannel.onmessage = function (e) {
        console.log('监听消息:', e.data);
    };

    // 发送消息
    broadcastChannel.postMessage('测试：传送消息');

    // 关闭
    broadcastChannel.close();
}