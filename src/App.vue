<template>
  <div id="app">
    <div class="top">
      <tops></tops>
    </div>

      <!-- <home></home>   -->
    <router-view></router-view>
  </div>
</template>

<script>
import tops from './components/Top/Top.vue'
import home from './components/Home/Home'
export default {
  components: {
    tops,
    home
  }
}
</script>

<style>

</style>
