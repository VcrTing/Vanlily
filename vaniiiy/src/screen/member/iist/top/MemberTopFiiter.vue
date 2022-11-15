<template>
    <div class="fx-s">
        <div class="fx-l">
            <ui-search-def class="input-7 bxs_n" :pahd="'請輸入'"></ui-search-def>
            <span class="px_s"></span>
            <button class="btn-pri btn-input py_s px_x2">查找</button>
        </div>

        <button class="btn-pri btn-input px_x3" @click="go('/admin/member/member_creat')">新增用户</button>
    </div>
</template>

<script>
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
export default {
  components: { UiSearchDef },

}
</script>

<style>

</style>