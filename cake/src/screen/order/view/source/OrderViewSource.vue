<template>
  <collapse>
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
            <order-exp-inner-review 
              @edit="expan('EDIT', i, m.uuid)"
            />
          </nav>
          <nav class="px_x2 bg-FFF" v-else-if="pan == 101">
            <order-edit/>
          </nav>
        </div>
      </template>
    </collapse-td-item>
  </collapse>
</template>
<script>
import Collapse from '../../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import OvsTd from './table/OvsTd.vue'

import OvsBasePan from './expan/OvsBasePan.vue'
import OvsCakePan from './expan/OvsCakePan.vue'
import OvsSendPan from './expan/OvsSendPan.vue'
import OvsCheckPan from './expan/OvsCheckPan.vue'
import OrderEdit from '../../creat_edit/OrderEdit.vue'
import OrderExpInnerReview from '../../review/OrderExpInnerReview.vue'

export default {
  components: { 
    OvsTd, Collapse, CollapseTdItem,
    OvsBasePan, OvsCakePan, OvsSendPan, OvsCheckPan, OrderEdit, OrderExpInnerReview,
  },
  props: [ 'items' ],
  data() {
      return {
        pan: 0, td: -1,
      }
  },
  methods: {
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