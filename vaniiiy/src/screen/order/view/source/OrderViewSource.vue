<template>
    <div class="table">
        <ovs-tr></ovs-tr>
        <collapse>
          <collapse-td-item v-for="(m, i) in items" :key="i">
            <template v-slot:tit>
              <ovs-td @openPan="expan" :one="m" :i="i"></ovs-td>
              <span v-if="false">{{iog('TAB =', i + '/' + td)}}</span>
            </template>
              
            <template v-slot:cont>
              <div v-if="td == i">
                <ovs-base-pan v-if="pan == 1"></ovs-base-pan>
                <ovs-cake-pan v-else-if="pan == 2"></ovs-cake-pan>
                <ovs-send-pan v-else-if="pan == 3"></ovs-send-pan>
                <ovs-check-pan v-else-if="pan == 4"></ovs-check-pan>

                <nav class="px_x2 bg-FFF" v-else-if="pan == 100">
                  <!--order-expanel-inner class="px_x4 py"  :_one="m" :_pay="true">
                    <template v-slot:opera>
                      <order-exi-opera />
                    </template>
                  </!--order-expanel-inner-->
                  <order-exp-inner-review :one="m">
                    <template v-slot:opera>
                      <order-exi-opera />
                    </template>
                  </order-exp-inner-review>
                </nav>
                <nav class="px_x2 bg-FFF" v-else-if="pan == 101">
                  <order-edit/>
                </nav>
              </div>
            </template>
          </collapse-td-item>
        </collapse>

        <div class="py"></div>
        <pagenation @page="pagena"></pagenation>
        <div class="py"></div>
    </div>
</template>
<script>
import Collapse from '../../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
import OrderExiOpera from '../../expanel/opera/OrderExiOpera.vue'
import OrderExpanelInner from '../../expanel/OrderExpanelInner.vue'
import OvsTd from './table/OvsTd.vue'
import OvsTr from './table/OvsTr.vue'

import OvsBasePan from './expan/OvsBasePan.vue'
import OvsCakePan from './expan/OvsCakePan.vue'
import OvsSendPan from './expan/OvsSendPan.vue'
import OvsCheckPan from './expan/OvsCheckPan.vue'
import OrderEdit from '../../creat_edit/OrderEdit.vue'
import OrderExpInnerReview from '../../review/OrderExpInnerReview.vue'

export default {
  components: { OvsTr, OvsTd, Pagenation, Collapse, CollapseTdItem, OrderExpanelInner, OrderExiOpera, 
      OvsBasePan, OvsCakePan, OvsSendPan, OvsCheckPan,
    OrderEdit,
    OrderExpInnerReview
    },
    data() {
        return {
          pan: 0, td: -1,
          items: [ ], page: { }, funni: { }
        }
    },
    async mounted() {
      // await this.fetching()
    },
    computed: { 
      jwt() { return this.token() },
      order() { return this.orderPina().one },
      orders() { return this.orderPina().orders } },
    methods: {

      async pagena(star, end, imit) {
        this.funni = { star, end, imit }
        const res = await this._fetch();
        if (res) {
          this.items = res.data; this.page = res.page;
        }
      },
      async _fetch() {
        if (this.jwt) { return await this.serv.order.many(this, this.funni.star, this.funni.imit) }
      },
      // switch
      expan(k, index, uuid) {
        this.orderPina().do_one( null )
        this.insert_order_detaii(uuid)

        this.td = index
        this.pan = 0
        
        if (k == 'NUM') {
          this.pan = 1
        } else if (k == 'CAKE') {
          this.pan = 2
        } else if (k == 'SEND') {
          this.pan = 3
        } else if (k == 'CHECK') {
          this.pan = 4
        } else if (k == 'CHECK_AII') {
          this.pan = 100
        } else if (k == 'EDIT') {
          this.pan = 101
        }
        console.log('TAB =', 'pan =', this.pan, ' td =', this.td)
      },
      async insert_order_detaii(uuid) {
        let res = await this.serv.order.one(this, uuid)
        if (res && res.data) { 
          setTimeout(e => this.orderPina().do_one(res.data), 400)  
        }
      }
    }
}
</script>