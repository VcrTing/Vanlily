<template>
    <div class="pb">
        <nav class="table table-panner">
            <nav class="tr py_ipt">
                <div class="w-30">店铺名</div>
                <div class="w-22">来货日期</div>
                <div class="w-22">过期日期</div>
                <div class="w-21">数量</div>
                <div class="w-5">&nbsp;</div>
            </nav>
            <nav class="td px_x2_ipt" v-for="(v, i) in items" :key="i">
                <div class="w-30">{{ v.named }}</div>
                <div class="w-22">{{ v.come }}</div>
                <div class="w-22">{{ v.out }}</div>
                <div class="w-21 py_s">{{ v.num }}</div>
                <div class="w-5">&nbsp;</div>
            </nav>
            <comp-mir-form class="td fx-s py_x"/>
        </nav>
        <button class="btn-pri_out py_s btn-attach-tabie">添加材料或配件库存记录</button>
    </div>
</template>

<script>
import PanelInner from '../../../../funcks/ui/panel/PanelInner.vue'
import CompMirForm from './form/CompMirForm.vue'
export default {
  components: { PanelInner, CompMirForm },
    props: {
        
    },
    data() {
        return {
            items: [
                { named: 'AAA', come: '2022-12-12', out: '2022-12-12', num: 999 },
            ]
        }
    }
}
</script>

<style>

</style>