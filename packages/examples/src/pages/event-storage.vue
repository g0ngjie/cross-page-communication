<template>
  storage
  <button @click="handleClick">test</button>
</template>

<script setup>
import { injectOnstorage } from "@cross-page/core";

injectOnstorage().then(console.log)

function handleClick() {
  localStorage.setItem("storage1", Date.now());
}
</script>
