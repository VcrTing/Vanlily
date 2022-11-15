<template>
    <div class="fx-l">
        <time-doub class="bg-FFF input-clear pr bxs_n mh-42"></time-doub>
        <span class="px_s"></span>
        <ui-search-def class="input-4 bxs_n" :pahd="'收據編號'"></ui-search-def>
        <span class="px_s"></span>
        <button @click="submit" class="btn-pri btn-input py_s px_x2">查找</button>
    </div>
</template>

<script>
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
import TimeDoub from '../../../../funcks/ui_element/timed/doub/TimeDoub.vue'
export default {
  components: { UiSearchDef, TimeDoub },
  methods: {
    submit() { this.$emit('submit', { start: '2022-02-13', end: '2022-03-14', number: '0001' } ) }
  }
}
</script>

<style>

</style>