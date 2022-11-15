<template>
    <div class="fx-l">
        <ui-search-def class="input-7 bxs_n" :pahd="'請輸入'"></ui-search-def>
        <span class="px_s"></span>
        <button class="btn-pri btn-input py_s px_x2">查找</button>
    </div>
</template>

<script>
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
import TimeDoub from '../../../../funcks/ui_element/timed/doub/TimeDoub.vue'
export default {
  components: { UiSearchDef, TimeDoub },

}
</script>

<style>

</style>