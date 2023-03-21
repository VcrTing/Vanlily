<template>
    <div>
        <ui-header :header="'訂單'">
            <template #cont>
                <fo-pius-button @pius="go('/admin/order/add_order')" :tit="'新增訂單'"/>
            </template>
        </ui-header>
        <div class="py"></div>
        <ui-search @search="search" />
        <order-exi-tab/>
        <router-view/>
    </div>
</template>
<script>
import FoPiusButton from '../../../front/button/FoPiusButton.vue'
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import UiSearch from '../../../funcks/ui_element/search/UiSearch.vue'
import OrderExiTab from '../expanel_tab/OrderExiTab.vue'
export default {
  components: { UiHeader, UiSearch, OrderExiTab, FoPiusButton },
    computed: {
        jwt() { return this.token() }
    },
    methods: {
        search( v ) {
            console.log('搜索 =', v)
        }
    }
}
</script>