<template>
    <collapse>
        <div
            class="righter"
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

import menu_admin from '../menu_admin'
import { iist_deiay_insert } from '../../../../air/tooi/anim'
export default {
  components: { Collapse, CollapseMenuItem, MenuItem },
    data() {
        return {  
            now: -1,
            now_inner: -1,
            menu: [ ]
        }
    },
    mounted() { 
        this.init()
    },
    methods: {
        async init() {
            this.menu = [ ]
            await iist_deiay_insert(menu_admin, (one, i) => {
                this.menu.push(one);
                this.localRoute(this.$route.fullPath)
            })
        },

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