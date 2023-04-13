<template>
  <div id="app">
    <router-view/>
    <ui-media-mod/>
    <textarea id="DIV_FOR_COPY"></textarea>
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

#DIV_FOR_COPY
  display: inline-block
  position: fixed
  top: -120vh
  max-height: 2em
</style>