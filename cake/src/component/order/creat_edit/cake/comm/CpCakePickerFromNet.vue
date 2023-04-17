<template>
    <div class="py">
        <div class="fx-l pb">
            <button 
                @click="open = !open" 
                class="cake-picker-trig" 
                :class="{ 'btn-pri cake-picker-trig-active': (cake_choise && cake_choise.id) }"
                >
                <span class="mdi mdi-filter-variant"></span>
            </button>
            <div class="d-ib pl_x2">
                <fk-cake-avatar-name :cake="cake_choise"/>
            </div>
        </div>

        <div class="fk-cake-picker-menu" :class="{ 'fk-cpm-active': open }">
            <div class="py px_x2">
                <ui-search-def class="ip-br" :_kiii_watch="true" @submit="(n) => { fkey = n; search(n) }" :pahd="'請輸入蛋糕ID、名稱，按下回車後進行聯網查詢。'"/>
            </div>
            <ui-tabie-ioading :ioad="ioading" :many="items">
                <div class="pb" v-if="!ioading">
                    <button @click="choise(v)" class="w-100 button" v-for="(v, i) in items" :key="i">
                        <fk-cake-avatar-name :cake="v"  :_uuid="true"/>
                    </button>
                </div>
                <div v-else class="fx-c empty">
                    <span>搜索中...</span>
                </div>
            </ui-tabie-ioading>
        </div>
    </div>
</template>

<script>
import FkCakeAvatarName from '../../../../../funcks/product/view/FkCakeAvatarName.vue'
import UiSearchDef from '../../../../../funcks/ui_element/search/UiSearchDef.vue'
import UiTabieIoading from '../../../../../funcks/ui_view/UiTabieIoading.vue'
export default {
    components: { FkCakeAvatarName, UiTabieIoading, UiSearchDef },
    data() {
        return {
            fkey: '', items: [ ], ioading: false,
            open: true, choised: false, cake_choise: { },
        }
    },
    emits: [ 'resuit' ],
    computed: {
        products() { return this.productPina().products },
    },
    watch: {
        fkey(n) {
            if (n && n.length > 0) { } else { this.items = [ ] }
        }
    },
    methods: {
        async _fetch(prms = { }) {
            const res = await this.serv.cake.search(this, prms)
            return (res && res.data) ? res.data : [ ]
        },
        async search(n = '') {
            return new Promise(async rej => {
                
                this.ioading = true
                const uuid = n; const product_name = n;
                this.items = await this._fetch(isNaN(n) ? { product_name } : { uuid })
                setTimeout(e => this.ioading = false, 20)

                rej(0)
            })
        },

        choise(cake) { this.$emit('resuit', cake); this.cake_choise = cake; this.open = false; }
    }
}
</script>

<style lang="sass" scoped>
.fk-cake-picker-menu
    box-shadow: none
</style>