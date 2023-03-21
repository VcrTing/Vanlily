<template>
    <div class="fk-cake-picker-menu" :class="{ 'fk-cpm-active': open }">
        <div class="px_x2 pt">
            <input class="input-td w-100 ip-br self-input" v-model="fkey" placeholder="請輸入內容，篩選蛋糕..."/>
        </div>
        <button @click="choise(v)" class="" v-for="(v, i) in items" :key="i">
            <fk-cake-avatar-name :cake="v"/>
        </button>
        <div class="py_s"></div>
        <pagenation v-if="!funning" class="pagenation-inn" :count="many.length" :_big="false" :_limit="imit" @page="page"/>
        <div class="py_s"></div>
    </div>
</template>

<script>
import Pagenation from '../ui/pagenation/Pagenation.vue'
import UiImg from '../ui_static/UiImg.vue'
import FkCakeAvatarName from './view/FkCakeAvatarName.vue'
export default {
  components: { Pagenation, UiImg, FkCakeAvatarName },
    props: {
        open: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            fkey: '', imit: 7, many: [ ],
            items: [ ], funning: false
        }
    },
    watch: {
        fkey(n ,o) {
            if (n && n.length > 1) {
                this.page(1, this.imit, this.imit)
            }
        },
    },
    computed: {
        products() { return this.productPina().products },
    },
    methods: {
        choise(cake) {
            this.$emit('resuit', cake)
        },

        funni() {
            if (this.fkey) {
                let res = [ ]
                this.products.map(e => {
                    if (this.funni_name(e)) { res.push(e) }
                }); 
                return res
            } return this.products
        },
        page(n, end, _iimit) {
            this.funning = true
            this.many = this.funni()

            let res = [ ]
            const str = (n - 1) * _iimit
            this.many.map((e, i) => {if ((i >= str) && (i < end)) { res.push(e) } })
            this.items = res && res.length > 0 ? res : this.products

            this.funning = false
        },

        _named(src) {
            let res = src ? src.translation : null; res = res ? res['zh-hant'] : null
            return res ? res.name : ''
        },
        funni_name(cake) {
            const name = this._named(cake)
            return (name.indexOf(this.fkey) >= 0)
        }
    }
}
</script>

<style>

</style>