<template>
    <collapse>
        <collapse-tab-item ref="tabREF">
            <template v-slot:tit>
                <div class="item_s py-0">
                    <div class="w-100 px_x2">
                        <ul class="ul-def ul-tab fx-l">
                            <li @click="change(v.tab)" :class="{ 'active b': now == v.tab }" v-for="(v, i) in tabs" :key="i">
                                <a>
                                    {{ v.txt }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
            <template v-slot:cont>
                <div class="">
                    <div class="item_s">
                        <order-exi-tab-soft v-if="now == 1"/>
                        <order-exi-tab-invite v-else-if="now == 2"/>
                        <order-exi-tab-addr v-else-if="now == 3"/>

                        <div v-else></div>
                    </div>
                </div>
            </template>
        </collapse-tab-item>
    </collapse>
</template>
<script>
import Collapse from '../../../funcks/ui/collapse/Collapse.vue'
import CollapseTabItem from '../../../funcks/ui/collapse/tab/CollapseTabItem.vue'
import OrderExiTabAddr from './addr/OrderExiTabAddr.vue'
import OrderExiTabInvite from './invite/OrderExiTabInvite.vue'
import OrderExiTabSoft from './soft/OrderExiTabSoft.vue'
export default {
  components: { Collapse, OrderExiTabInvite, OrderExiTabAddr, CollapseTabItem, OrderExiTabSoft },
    data() {
        return {
            now: 0,
            tabs: [
                { txt: '查詢訂單', tab: 0 },
                { txt: '來源', tab: 1 },
                { txt: '地區', tab: 2 },
                { txt: '自取地點', tab: 3 },
            ]
        }
    },
    methods: {
        change(tb) {
            this.now = tb
            this.$refs.tabREF.open = tb == 0 ? false : true
        }
    }
}
</script>