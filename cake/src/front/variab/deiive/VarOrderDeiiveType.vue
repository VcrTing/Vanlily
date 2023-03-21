<template>
    <div class="fx-l">
        <div class="fx-l cus-def" v-if="item">
            <span class="pr_t">{{ item.txt }}</span>
            <i :class="item.icon" class="h5 pri"></i>
        </div>
        <div v-if="company">
            ,&nbsp;&nbsp;&nbsp;{{ company ? company : '' }}
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'order' ],
    data() {
        return {
            ix_txt: '送货_送貨',
            
            items: [
                { txt: '送貨', char: '送', icon: 'mdi mdi-truck-cargo-container' },
                { txt: '自取', char: '取', icon: 'mdi mdi-briefcase-clock-outline' },
                { txt: 'MTR', char: 'MTR', icon: 'mdi mdi-subway' },
            ]
        }
    },
    computed: {
        deiive() {
            return this.order ? this.order.delivery_info : null
        },
        method() {
            return this.deiive ? this.deiive.delivery_method : ''
        },
        company() {
            return this.deiive ? this.deiive.company : ''
        },
        item() {
            let res = { }; if (!this.method) { return null }
            this.items.map(e => {
                if (this.method.indexOf(e.char) >= 0) { res = e }
            }); return res
        }
    }
}
</script>
<style lang="sass" scoped>
.pr_t
    padding-right: 0.42em !important
i
    transform: translateY(0.06em)
</style>