<template>
  opener
  <button @click="handleOpen">open new tab</button>
  <button @click="handleClick">test</button>
</template>

<script setup>
import { useRouter } from "vue-router";
const path = useRouter().resolve({
  path: "/opener",
});
// 收集 window 对象：多个打开页面，打开一个页面就需要将打开的 window 对象收集起来，以便于发布广播
const windowOpens = [];
function handleOpen() {
  // 收集 window 对象：单个打开页面
  const windowOpen = window.open(path.href, "_blank");
  windowOpens.push(windowOpen);
}
function handleClick() {
  // 发送消息：单个页面
  // windowOpen.postMessage(data);

  // 发送消息：多个页面
  windowOpens.forEach((current) => {
    current.postMessage("测试");
  });
}
// 接受消息，对于接受消息来说，可能只是接受消息，但是可能接受消息的页面也打开了页面，这种情况需要将消息继续传递下去
window.addEventListener("message", function (e) {
  const data = e.data;
  console.log(data);
  windowOpens.forEach((current) => current.postMessage(data));
});
</script>
