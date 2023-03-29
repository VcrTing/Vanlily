<template>
    <div>

        <div class="version pl_x2">
            版本&nbsp;&nbsp;<span>{{ conf.VERSION }}</span>
        </div>

        <div class="logo">
            <logo></logo>
        </div>
        
        <menu-main-inner class="py_x2"></menu-main-inner>

    </div>
</template>
<script>
import Logo from '../../ui_static/logo/Logo.vue'
import MenuMainInner from './inner/MenuMainInner.vue'
export default {
  components: { Logo, MenuMainInner },
  data() {
      return {
        
      }
  }
}
</script>

<style lang="sass" scoped>
.version
    position: absolute
    bottom: 12px
    z-index: -1
    &, *
        color: #595f60

    animation: version .122s ease-in

@keyframes version
    0%
        opacity: 0
    100%
        opacity: 1
</style>