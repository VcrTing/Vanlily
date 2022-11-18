<template>
    <div class="fx-l">
        <ui-search-def class="input-7 bxs_n" ref="search" @resuit="(n) => q = n" :pahd="'請輸入'"></ui-search-def>
        <span class="px_s"></span>
        <button class="btn-pri btn-input py_s px_x2" @click="search">查找</button>
    </div>
</template>

<script>
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
export default {
  components: { UiSearchDef },
  data() {
    return {
      q: ''
    }
  },
  watch: {
    q(n, o) {
      this.$emit('search', n)
    }
  },
  methods: {
    search() {
      this.q = this.$refs.search.q
    }
  }
}
</script>

<style>

</style>