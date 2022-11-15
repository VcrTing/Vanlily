<template>
    <div>
        <ui-header :header="'訂單'">
            <template v-slot:cont>
                <button @click="go('/admin/order/add_order')" class="btn btn-pri py_n px_x3">新增訂單</button>
            </template>
        </ui-header>
        <div class="py"></div>
        <ui-search></ui-search>
        <div>
            <order-exi-tab></order-exi-tab>
            <div>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import UiSearch from '../../../funcks/ui_element/search/UiSearch.vue'
import OrderExiTab from '../expanel_tab/OrderExiTab.vue'
export default {
  components: { UiHeader, UiSearch, OrderExiTab },
    methods: {
        openMod() {
            // this.$refs.modREF.change()
        }
    },
    computed: {
        jwt() { return this.token() }
    }
}
</script>