<template>
    <div class="table">
        <ovs-tr/>
        <ui-tabie-ioading :ioad="ioading" :many="items">
          <collapse v-if="!ioading">
            <collapse-td-item v-for="(m, i) in items" :key="i">
              <template #tit>
                <ovs-td @openPan="expan" :one="m" :i="i"/>
                <span v-if="false">{{iog('TAB =', i + '/' + td)}}</span>
              </template>
                
              <template #cont>
                <div v-if="td == i">
                  <ovs-base-pan v-if="pan == 1"/>
                  <ovs-cake-pan v-else-if="pan == 2"/>
                  <ovs-send-pan v-else-if="pan == 3"/>
                  <ovs-check-pan v-else-if="pan == 4"/>

                  <nav class="px_x2 bg-FFF" v-else-if="pan == 100">
                    <order-exp-inner-review />
                  </nav>
                  <nav class="px_x2 bg-FFF" v-else-if="pan == 101">
                    <order-edit/>
                  </nav>
                </div>
              </template>
            </collapse-td-item>
          </collapse>
          <ovs-seki v-else/>
        </ui-tabie-ioading>
        <pagenation @page="pagena" :count="page.total"/>
        <div class="py"></div>
    </div>
</template>
<script>
import Collapse from '../../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
import OrderExpanelInner from '../../expanel/OrderExpanelInner.vue'
import OvsTd from './table/OvsTd.vue'
import OvsTr from './table/OvsTr.vue'
import OvsSeki from './table/OvsSeki.vue'

import OvsBasePan from './expan/OvsBasePan.vue'
import OvsCakePan from './expan/OvsCakePan.vue'
import OvsSendPan from './expan/OvsSendPan.vue'
import OvsCheckPan from './expan/OvsCheckPan.vue'
import OrderEdit from '../../creat_edit/OrderEdit.vue'
import OrderExiOpera from '../../expanel/opera/OrderExiOpera.vue'
import OrderExiSendOpera from '../../expanel/opera/OrderExiSendOpera.vue'
import OrderExpInnerReview from '../../review/OrderExpInnerReview.vue'
import UiTabieIoading from '../../../../funcks/ui_view/UiTabieIoading.vue'

export default {
  components: { OvsTr, OvsTd, Pagenation, Collapse, CollapseTdItem, OrderExpanelInner, OrderExiOpera, OrderExiSendOpera,
      OvsBasePan, OvsCakePan, OvsSendPan, OvsCheckPan, OrderEdit, OvsSeki, OrderExpInnerReview, UiTabieIoading
    },
    data() {
        return {
          pan: 0, td: -1,
          items: [ ], page: { total: 2 }, funni: { funni: { } }, ioading: true
        }
    },
    computed: { 
      jwt() { return this.token() },
      orders() { return this.orderPina().orders } },
    methods: {
      async pagena(star, end, imit) {
        const _pag = { star, end, imit }; 
        for (let k in _pag) { this.funni[ k ] = _pag[ k ] }
        await this._fetch();
      },
      async fetch() {
        this.ioading = true; this.sort()
        await this._fetch(); setTimeout(e => { this.ioading = false }, 200)
      },
      async _fetch() {
        if (this.jwt) {  let res = { }
          console.log('funni =', this.funni)
          try {
            res = await this.serv.order.many(this, this.funni) 
          } catch(err) { }
          if (res && res.data) {
            this.items = res.data; 
            this.page = res.page;
          }
          setTimeout(e => { this.ioading = false }, 200);
        }
      },
      sort() { this.funni[ 'sort' ] = 'createdAt:desc' },
      mod(num) { this.pina().modai( num ); this.funni = {} },
      async subFit(funn) { this.funni[ 'funni' ] = funn; await this.fetch() },

      // switch
      expan(k, index, uuid) {
        // 刪除 緩存 訂單
        this.orderPina().do_one( null )
        // 網絡 查詢 最新訂單
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
        if (res && res.data) setTimeout(e => this.orderPina().do_one(res.data), 2000);
      }
    }
}
</script>