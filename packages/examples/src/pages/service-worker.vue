<template>
  service-worker
  <button @click="handleClick">test</button>
</template>

<script setup>
/* 判断当前浏览器是否支持serviceWorker */
if ("serviceWorker" in navigator) {
  /* 当页面加载完成就创建一个serviceWorker */
  window.addEventListener("load", function () {
    /* 创建并指定对应的执行内容 */
    /* scope 参数是可选的，可以用来指定你想让 service worker 控制的内容的子目录。在这个例子里，我们指定了 '/'，表示 根网域下的所有内容。这也是默认值。*/
    navigator.serviceWorker
      .register("/serviceWorker.js", { scope: "/" })
      .then(function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      })
      .catch(function (err) {
        console.log("ServiceWorker registration failed: ", err);
      });
  });
}

// 监听消息
navigator.serviceWorker.addEventListener("message", function (e) {
  const data = e.data;
  console.log("我接受到消息了：", data);
});

function handleClick() {
  // 发送消息
  navigator.serviceWorker.controller &&
    navigator.serviceWorker.controller.postMessage(
      "测试，传送消息，我发送消息啦。。。"
    );
}
</script>
