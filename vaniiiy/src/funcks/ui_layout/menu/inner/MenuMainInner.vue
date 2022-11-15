<template>
    <collapse>
        <div
            v-for="(v, i) in menu" :key="i">

            <!-- 多子菜單 -->
            <collapse-menu-item class="menu-many-wrapper" v-if="v.children">
                <template v-slot:tit>
                    <div>
                        <i class="h5  collapse-i" :class="v.icon"></i>
                        <span class="pl_n">{{ v.txt }}</span>
                    </div>
                </template>
                <template v-slot:cont>
                    <div class="collapse-item collapse-menu-item">
                        <menu-item v-for="(m, k) in v.children" :key="k"
                            class="pl_menu" @tap="open(m)"
                            :class="{ 'active': now_inner == m.index }"
                            :icon="m.icon" :txt="m.txt" :_need_icon="false"></menu-item>
                    </div>
                </template>
            </collapse-menu-item>

            <!-- 單 菜單 -->
            <nav class="collapse-item collapse-menu-item" v-else>
                <menu-item class="menu-one-wrapper" @tap="open(v)" :icon="v.icon" :txt="v.txt" :class="{ 'active': now == v.index }"></menu-item>
            </nav>
        </div>
    </collapse>
</template>
<script>
import Collapse from '../../../ui/collapse/Collapse.vue'
import CollapseMenuItem from '../../../ui/collapse/menu/CollapseMenuItem.vue'
import MenuItem from '../../../ui/collapse/menu/MenuItem.vue'
export default {
  components: { Collapse, CollapseMenuItem, MenuItem },
    data() {
        return {  
            now: -1,
            now_inner: -1,
            menu: [
                {
                    txt: 'Dashboard', icon: 'mdi mdi-view-dashboard-outline',
                    index: 0, link: '/admin/dashboard/'
                },
                {
                    txt: '訂單', icon: 'mdi mdi-clipboard-text-outline',
                    index: 1, link: '/admin/order/view/query/'
                },
                {
                    txt: '行事板', icon: 'mdi mdi-bulletin-board',
                    index: 2, link: '/admin/work/board'
                },
                {
                    txt: '會計', icon: 'mdi mdi-calculator-variant-outline',
                    index: 4, link: null, ciass: '',
                    children: [
                        {
                            txt: '公司支出', icon: 'mdi mdi-sticker-text-outline',
                            index: 20, link: '/admin/accounting/consume/', },
                        {
                            txt: '產品庫存', icon: 'mdi mdi-cube-scan',
                            index: 21, link: '/admin/accounting/producenter/inventory', },
                        {
                            txt: '產品對比', icon: 'mdi mdi-vector-combine',
                            index: 22, link: '/admin/accounting/contrast/', },
                        {
                            txt: '材料及配件', icon: 'mdi mdi-cube-outline',
                            index: 23, link: '/admin/accounting/material/', },
                        {
                            txt: '員工管理', icon: 'mdi mdi-account-cog-outline',
                            index: 24, link: '/admin/accounting/staffmanage/', },
                        {
                            txt: '工資發放', icon: 'mdi mdi-cash',
                            index: 25, link: '/admin/accounting/salarymanage/', }
                    ]
                },
                // 
                {
                    txt: '客戶', icon: 'mdi mdi-account-tie',
                    index: 3, link: '/admin/customer_iist',
                },

                {
                    txt: '用户权限', icon: 'mdi mdi-account-switch-outline',
                    index: 4, link: '/admin/member_iist',
                },

                /*

                {
                    txt: '分析', icon: 'mdi mdi-account-outline',
                    index: 5, link: null,
                    children: [
                        {
                            txt: '銷量分析', icon: 'mdi mdi-account-outline',
                            index: 51, link: '/admin/analysis', }
                    ]
                },
                {
                    txt: '在線', icon: 'mdi mdi-account-outline',
                    index: 6, link: null,
                    children: [
                        {
                            txt: '在線騎手', icon: 'mdi mdi-account-outline',
                            index: 61, link: '/admin/supervise', }
                    ]
                },
                */
            ]
        }
    },
    mounted() { this.localRoute(this.$route.fullPath) },
    methods: {
        _route(path, _link, index) { 
            path = path + ''
            _link = _link + ''
            if (_link == path || _link.indexOf(path) >= 0) { 
                this.now = index 
                this.now_inner = -1 } 
        },
        _route_in(path, _link, index) { 
            path = path + ''
            _link = _link + ''
            if (_link == path || path.indexOf(_link) >= 0) { 
                this.now_inner = index 
                this.now = -1 } 
        },
        localRoute(path) {
            this.menu.map(e => { 
                if (e.link) { this._route(path, e.link, e.index) }
                else {
                    e.children.map(c => { this._route_in(path, c.link, c.index) })
                }
            })
        },
        open(v) { 
            this.localRoute(v.link)
            this.$router.push(v.link) 
        },
    }
}
</script>
<style lang="sass" scoped>
</style>