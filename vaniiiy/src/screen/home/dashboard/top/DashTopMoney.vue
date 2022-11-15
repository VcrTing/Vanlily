<template>
    <div class="dash-top-card">
        <div>本月銷售金額</div>
        <nav class="fx-s">
            <div class="h0">
                <span>HKD&nbsp;</span>
                <money :v="200000"></money>
            </div>
            <button class="btn-pri_light btn-icon h3_son d-ib">
                <i class="mdi mdi-content-copy"></i>
            </button>
        </nav>
        <div>
            <span>比上周增加</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="pri_light_son">10%</span>
        </div>
    </div>
</template>

<script>
import Money from '../../../../funcks/ui/money/Money.vue'
export default {
  components: { Money },

}
</script>

<style>

</style>