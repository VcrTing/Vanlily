<template>
    <div class="pb_x2">
        <nav class="table table-line table-sdw">
            <nav class="tr py_ipt sun">
                <div class="w-30">店铺名</div>
                <div class="w-26">来货日期</div>
                <div class="w-28">过期日期</div>
                <div class="w-11">数量</div>
                <div class="w-5">&nbsp;</div>
            </nav>
            <nav class="td px_x2_ipt" v-for="(v, i) in items" :key="i">
                <div class="w-30">{{ v.named }}</div>
                <div class="w-26">{{ v.come }}</div>
                <div class="w-28">{{ v.out }}</div>
                <div class="w-11 py_s pri">{{ v.num }}</div>
                <div class="w-5">&nbsp;</div>
            </nav>
        </nav>
        <div class="py"></div>
        <pagenation :_big="false" :_long="3"/>
    </div>
</template>

<script>
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
import PanelInner from '../../../../funcks/ui/panel/PanelInner.vue'
import CompMirForm from './form/CompMirForm.vue'
export default {
  components: { PanelInner, CompMirForm, Pagenation },
    props: {
        
    },
    data() {
        return {
            items: [
                { named: 'As Shop', come: '2022-12-12', out: '2022-12-12', num: 9 },
                { named: 'Ek Store', come: '2022-12-12', out: '2022-12-12', num: 99 },
                { named: 'As Shop', come: '2022-12-12', out: '2022-12-12', num: 299 },
                { named: 'Lucys Company', come: '2022-12-12', out: '2022-12-12', num: 999 },
                { named: 'google site', come: '2022-12-12', out: '2022-12-12', num: 1199 },
            ]
        }
    }
}
</script>

<style>

</style>