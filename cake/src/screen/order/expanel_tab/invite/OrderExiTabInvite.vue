<template>
    <div class="fx-s fx-t">
        <div class="w-100 pr_x2">
            <collapse>
                <collapse-td-item class="mb-0" ref="tbREF">
                    <template v-slot:tit>
                        <ul class="row fx-s">
                            <li class="px_s w-33" v-for="(v, i) in show" :key="i">
                                <card-invite :one="v"></card-invite>
                            </li>
                        </ul>
                    </template>
                    <template v-slot:cont>
                        <div>
                            <ul class="row fx-s fx-t">
                                <li class="px_s w-33" 
                                    v-for="(m, n) in expans" :key="n">
                                    <card-invite class="mt"
                                        v-for="(v, i) in m.children" :key="i"
                                        :one="v"></card-invite>
                                </li>
                            </ul>
                        </div>
                    </template>
                </collapse-td-item>
            </collapse>
        </div>
        <div class="row_inchar pt_s">
            <button @click="open" class="btn-pri px_n py_t fx-s">
                <i class="mdi mdi-plus h5"></i>&nbsp;&nbsp;
                新增地區
            </button>
            <p class="fx-c pt_s txt-pri_son" @click="zhankai">
                <span>展開</span>
                <i class="h5 mdi mdi-chevron-down" :class="{ 'rot-180': expan }"></i>
            </p>
        </div>
    </div>
</template>

<script>
import CardInvite from '../../../../component/card/invite/CardInvite.vue'
import Collapse from '../../../../funcks/ui/collapse/Collapse.vue'
import CollapseTabItem from '../../../../funcks/ui/collapse/tab/CollapseTabItem.vue'
import CollapseTdItem from '../../../../funcks/ui/collapse/table/CollapseTdItem.vue'
export default {
  components: { CardInvite, Collapse, CollapseTdItem, CollapseTabItem },
    data() {
        return {
            expan: false,
            items: [
                { id: 1, named: '九龍', cate: 1, typed: '滿1200元免送貨費', cost: 0, cost_gogo: 0 },
                { id: 2, named: '香港', cate: 2, typed: '滿1200元', cost: 50, cost_gogo: 0 },
                { id: 3, named: '新界', cate: 3, typed: '滿1200元免送貨費', cost: 0, cost_gogo: 0 },
            ]
        }
    },
    mounted() { this.expan = this.$refs.tbREF.open },
    computed: {
        show() {
            if (this.items) {
                return this.items.slice(0, 3)
            }
        },
        expans() {
            return [
                { txt: '九龍', children: [ 
                    { id: 11, named: '九龍', cate: 1, typed: 'B1 送港鐵站', cost: 120, cost_gogo: 120 },
                    { id: 12, named: '九龍', cate: 1, typed: 'B2 樓下交收', cost: 150, cost_gogo: 150 },
                    { id: 13, named: '九龍', cate: 1, typed: 'B3 送貨上門', cost: 230, cost_gogo: 230 },] 
                },
                { txt: '香港', children: [ 
                    { id: 21, named: '香港', cate: 2, typed: 'B1 送港鐵站', cost: 180, cost_gogo: 180 },
                    { id: 22, named: '香港', cate: 2, typed: 'B2 樓下交收', cost: 220, cost_gogo: 220 },
                    { id: 23, named: '香港', cate: 2, typed: 'B3 送貨上門', cost: 300, cost_gogo: 300 },] 
                },
                { txt: '新界', children: [ 
                    { id: 31, named: '新界', cate: 3, typed: 'B1 送港鐵站', cost: 80, cost_gogo: 80 },
                    { id: 32, named: '新界', cate: 3, typed: 'B2 樓下交收', cost: 100, cost_gogo: 100 },
                    { id: 33, named: '新界', cate: 3, typed: 'B3 送貨上門', cost: 180, cost_gogo: 180 },
                    { id: 34, named: '新界', cate: 3, typed: 'B3 送貨上門 遠處', cost: 220, cost_gogo: 210 }, ] 
                }
            ]
        }
    },
    methods: {
        zhankai() { this.$refs.tbREF.change(); this.expan = this.$refs.tbREF.open },
        open() { this.pina().modai( 2 ) }
    }
}
</script>

<style lang="sass">
.row_inchar
    min-width: 8em
</style>