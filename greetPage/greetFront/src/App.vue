<template>
  <div id="app">
    <router-view name="headers"></router-view>
		<router-view name="welcome"></router-view>
		<router-view name="message"></router-view>
		<router-view name="sayhello"></router-view>
		<router-view name="economics"></router-view>
		<router-view name="articleDetil"></router-view>
		<router-view name="affairs"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
