<!--
 * @Author: NYY
 * @Date: 2022-08-27 10:35:30
 * @LastEditTime: 2022-08-29 09:02:31
 * @LastEditors: NYY
 * @Description: 
-->
<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body{
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>
