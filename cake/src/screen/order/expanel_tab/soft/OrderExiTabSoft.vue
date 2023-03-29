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
            <!--
            <button class="btn-pri_out px py_t fx-s" @click="pina().mod( 1 )">
                <i class="mdi mdi-plus h5"></i>&nbsp;
                新增來源
            </button>
            -->
            <fo-out-button :icon="'mdi-plus'" :tit="'新增來源'"/>
        </div>
    </div>
</template>
<script>
import FoOutButton from '../../../../front/button/FoOutButton.vue'
export default {
    components: { FoOutButton },
    data() {
        return {         
            now: 0,
            tags: [
                { txt: '全部', id: 0, v: '' },
                { txt: 'Facebook', id: 1, v: '' },
                { txt: 'WhatsApp', id: 2, v: '' },
                { txt: 'Website', id: 3, v: '' },
                { txt: 'Email', id: 4, v: '' },
                { txt: 'Referral', id: 5, v: '' },
                { txt: 'IG', id: 6, v: '' }
            ]
        }
    },
    emits: [ 'funni' ],
    watch: {
        now(n, o) { this.$emit('funni', n) }
    },
    methods: {
        
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