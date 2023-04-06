<template>
    <div class="fx-l cus-def" v-if="item">
        <span class="pr_t">{{ item.txt }}</span>
        <i :class="item.icon" class="h5 pri"></i>
    </div>
    <div v-else class="cold">
        (無)
    </div>
</template>
<script>
export default {
    props: [ '_typed' ],
    data() {
        return {
            items: [
                { txt: '送貨', char: '送', icon: 'mdi mdi-truck-cargo-container' },
                { txt: '自取', char: '取', icon: 'mdi mdi-briefcase-clock-outline' },
                { txt: 'MTR', char: 'MTR', icon: 'mdi mdi-subway' },
            ]
        }
    },
    computed: {
        item() {
            let res = { }; 
            if (!this._typed) { return null }
            this.items.map(e => {
                if (this._typed.indexOf(e.char) >= 0) { res = e }
            }); 
            return res
        }
    }
}
</script>
<style lang="sass">
.pr_t
    padding-right: 0.42em !important
</style>