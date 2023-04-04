<template>
  <layout-main>
    <template #menu>
      <menu-main />
    </template>
    <template #top>
      <top-main/>
    </template>
    <template #cont>
      <router-view/>
    </template>
  </layout-main>
</template>

<script>
import LayoutMain from '../../funcks/ui_layout/layout/LayoutMain.vue'
import MenuMain from '../../funcks/ui_layout/menu/MenuMain.vue'
import TopMain from '../../funcks/ui_layout/top/TopMain.vue'
export default {
  components: { MenuMain, LayoutMain, TopMain  },
}
</script>