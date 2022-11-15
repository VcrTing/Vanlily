<template>
    <div class="pl_x4">
        <div class="fx-s">
            <div class="fx-l w-80">
                <span class="p_inchar">訂單來源：&nbsp;&nbsp;</span>
                <ul class="row fx-l tag-pri-group">
                    <li v-for="(v, i) in tags" :key="i" class="px_s">
                        <button @click="now = v.id" class="px_n btn_tag" :class="{ 'active': v.id == now }">{{ v.txt }}</button>
                    </li>
                </ul>
            </div>
            <button class="btn-pri_out px py_t fx-s" @click="open">
                <i class="mdi mdi-plus h5"></i>&nbsp;
                新增來源
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            now: 2,
            tags: [
                { txt: 'Facebook', id: 1 },
                { txt: 'WhatsApp', id: 2 },
                { txt: 'Website', id: 3 },
                { txt: 'Email', id: 4 },
                { txt: 'Referral', id: 5 },
                { txt: 'IG', id: 6 }
            ]
        }
    },
    watch: {
        now(n, o) { console.log('更改 Filter') }
    },
    methods: {
        open() { this.pina().modai( 1 ) }
    }
}
</script>
<style lang="sass">
.btn_tag
    padding-top: 0.1em
    padding-bottom: 0.1em

.p_inchar
    min-width: 6em
</style>