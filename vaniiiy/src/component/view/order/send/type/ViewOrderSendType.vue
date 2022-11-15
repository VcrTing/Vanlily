<template>
    <div class="fx-l cus-def" v-show="txt">
        <span class="pr_t">{{ txt }}</span>
        <i class="mdi mdi-truck-cargo-container h5 pri"></i>
    </div>
</template>
<script>
export default {
    props: [ '_typed' ],
    data() {
        return {
            ix_txt: '送货_送貨',

        }
    },
    computed: {
        txt() {
            if (!this._typed) { return '' }
            if (this.ix_txt.indexOf(this._typed)) { return '送貨' }
            return '自取'
        }
    }
}
</script>
<style lang="sass">
.pr_t
    padding-right: 0.42em !important
</style>