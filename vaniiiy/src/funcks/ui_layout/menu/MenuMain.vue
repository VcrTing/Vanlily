<template>
    <div>

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