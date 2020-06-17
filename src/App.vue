<template>
  <article id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </article>
</template>

<script>

export default {

};
</script>

<style lang="less">
@import "./style/global";
#app {
  .flex-wrap(initial,center,initial,column);
  .wh;
}
</style>
