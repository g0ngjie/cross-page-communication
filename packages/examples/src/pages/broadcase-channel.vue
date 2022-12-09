<template>
  broadcase-channel
  <button @click="handleClick">test</button>
</template>

<script setup>
// 创建
const broadcastChannel = new BroadcastChannel("channelName");

// 监听消息
broadcastChannel.onmessage = function (e) {
  console.log("监听消息:", e.data);
};

function handleClick() {
  // 发送消息
  broadcastChannel.postMessage("发送广播");
}
</script>
