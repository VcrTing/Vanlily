<template>
  <collapse>
    <collapse-td-item v-for="(m, i) in items" :key="i">
      <template #tit>
        <ovs-td @openPan="expan" :one="m" :i="i" @check="() => checkIist(m)"/>
        <span v-if="false">{{iog('TAB =', i + '/' + td)}}</span>
      </template>
        
      <template #cont>
        <div v-if="td == i">
          <ovs-base-pan v-if="pan == 1"/>
          <ovs-cake-pan v-else-if="pan == 2"/>
          <ovs-send-pan v-else-if="pan == 3"
            @edit="expan('EDIT', i, m.uuid)"
            @review="expan('CHECK_AII', i, m.uuid)"
          />
          <ovs-check-pan v-else-if="pan == 4"/>

          <nav class="px-row bg-FFF" v-else-if="pan == 100">
            <order-exp-inner-review 
              @edit="expan('EDIT', i, m.uuid)"
            />
          </nav>
          <nav class="px-row bg-FFF" v-else-if="pan == 101">
            <order-edit
              @review="expan('CHECK_AII', i, m.uuid)"
            />
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
  emits: [ 'refresh' ],
  methods: {
    checkIist(order) { },

    expan(k, index, uuid) {
      return new Promise(async rej => {
        this.$emit('refresh', uuid)

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
        rej(0)
      })
    },
  }
}
</script>