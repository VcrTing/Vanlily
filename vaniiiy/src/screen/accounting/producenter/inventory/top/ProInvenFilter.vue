<template>
    <div>
        <div class="fx-l pb">
            <time-doub class="input-clear ip-br mh-42"></time-doub>
            <span class="px_s"></span>
            <vf-pro-comingdate-select class="input"></vf-pro-comingdate-select>
        </div>
        <div class="fx-s">
            <div class="fx-l">
                <ui-search-def class="input-long bxs_n" 
                    :pahd="'請輸入產品編號、名稱、類別或店鋪名'">

                </ui-search-def>
                <span class="px_s"></span>
                <button class="btn-pri btn-input px_x3">查找</button>
            </div>

        </div>
    </div>
</template>

<script>
import VfProComingdateSelect from '../../../../../component/view_form/pros/VfProComingdateSelect.vue'
import UiSearchDef from '../../../../../funcks/ui_element/search/UiSearchDef.vue'
import TimeDoub from '../../../../../funcks/ui_element/timed/doub/TimeDoub.vue'
export default {
  components: { TimeDoub, UiSearchDef,
    VfProComingdateSelect },
    methods: {
        mod(num) { this.$store.commit('changeFunck', [ 'modal_form', num ]) }
    }
}
</script>

<style>

</style>