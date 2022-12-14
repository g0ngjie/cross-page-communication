<template>
  <div class="container">
    <router-link to="storage">storage</router-link>
    <router-link to="channel">channel</router-link>
    <router-link to="worker">worker</router-link>
    <router-link to="opener">opener</router-link>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #666;
}
</style>
