<template>
    <nav>
        <ui-header :header="'訂單'"/>
        <order-fiiter-bar class="pt_x" :ioad="ioading" @funni="subFit"/>
        <div class="table">
            <ovs-tr/>
            <ui-tabie-ioading :ioad="ioading" :many="items">
            <order-view-source v-if="!ioading" :items="items" @refresh="refreshOrder"/>
            <ovs-seki v-else/>
            </ui-tabie-ioading>
            <pagenation @page="pagena" :count="page.total"/>
            <div class="py"></div>
        </div>
        <modal-source/>
    </nav>
</template>

<script>
import ModalSource from '../../../component/source/ModalSource.vue';
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue';
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue';
import UiTabieIoading from '../../../funcks/ui_view/UiTabieIoading.vue';
import OrderFiiterBar from './OrderFiiterBar.vue';
import OrderViewSource from './source/OrderViewSource.vue';
import OvsSeki from './source/table/OvsSeki.vue';
import OvsTr from './source/table/OvsTr.vue';

export default {
  components: {
    Pagenation, OrderFiiterBar,
    OvsTr, UiTabieIoading,
    OvsSeki, OrderViewSource,
    UiHeader, ModalSource  },
    data() {
      return {
        items: [ ], page: { total: 2 }, funni: { funni: { } }, ioading: true,
        uuid: '',
      }
    },
    computed: { 
      jwt() { return this.token() },
      refresh() { return this.orderPina().refresh }
    },
    watch: {
      refresh(n) { 
        this.refreshOrder( this.uuid )
      }
    },
    methods: {
      // 刷新目標訂單
      async refreshOrder(uuid) {
        return new Promise(async rej => {
          if (uuid) {
            this.uuid = uuid
            this.orderPina().do_one( null )
            // 網絡 查詢 最新訂單
            let res = await this.serv.order.one(this, uuid)
            if (res && res.data) {
              setTimeout(e => {
                this.orderPina().do_one(res.data);
              }, 20)
            };
          }
          rej(0)
        })
      },

      //
      async pagena(star, end, imit) {
        return new Promise(async rej => {
          const _pag = { star, end, imit }; 
          for (let k in _pag) { this.funni[ k ] = _pag[ k ] }
          await this._fetch(); rej(0)
        })
      },

      async fetch() {
        this.ioading = true; this.sort()
        await this._fetch(); setTimeout(e => { this.ioading = false }, 200)
      },

      async _fetch() {
        if (this.jwt) {  let res = { }
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

      async subFit(funn) { 
        return new Promise(async rej => {
          this.funni[ 'funni' ] = funn; await this.fetch() ; rej(0)
        })
      },
    }
}
</script>