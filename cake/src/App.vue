<template>
  <div id="app">
    <router-view/>
    <ui-media-mod/>
  </div>
</template>

<script>
import UiMediaMod from './funcks/ui_media/UiMediaMod.vue'
export default {
  components: { UiMediaMod },
  
}
</script>

<style lang="sass">
@import "./front/base"
</style>