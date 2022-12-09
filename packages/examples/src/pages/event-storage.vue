<template>
  storage
  <button @click="handleClick">test</button>
</template>

<script setup>
import { useOnstorage } from "@cross-page/core";
// 1 该事件不在导致数据变化的当前页面触发（如果浏览器同时打开一个域名下面的多个页面，当其中的一个页面改变 数据时，其他所有页面的 storage 事件会被触发，而原始页面并不触发 storage 事件）。
// 2 sessionStorage（❎）不能触发 storage 事件 ， localStorage（✅）可以。
// 3 如果修改的值未发生改变，将不会触发 onstorage 事件。
// 4 优点：浏览器支持效果好、API直观、操作简单。缺点：部分浏览器隐身模式下，无法设置 localStorage。如safari，这样也就导致 onstrage 事件无法使用。
useOnstorage(console.log);

function handleClick() {
  localStorage.setItem("storage1", Date.now());
}
</script>
