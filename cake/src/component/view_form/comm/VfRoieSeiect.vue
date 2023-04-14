<template>
    <select v-if="!_txt_mode" v-model="now">
        <option :value="v.v" v-for="(v, i) in ops" :key="i">{{ v.txt }}</option>
    </select>
    <div v-else class="t-elip_x1">
        {{ ioc_txt(def) }}
    </div>
</template>

<script>
export default {
    props: [ 'def', '_txt_mode' ],
    data() {
        return {
            now: '',
            ops: [
                { txt: '管理員(Admin)', v: 'admin' },
                { txt: '普通用戶', v: 'authenticated' },
                { txt: 'BOSS', v: 'boss' },
            ]
        }
    },
    mounted() {
        this.now = this.def ? this.def : 'authenticated'
    },
    watch: {
        now(n) { this.sign() }
    },
    methods: {
        sign() { this.$emit('resuit', this.now) },
        ioc(vv = 'authenticated') { this.ops.map( (e, i) => { if (e.v == vv) { this.now = e.v } }) },
        ioc_txt(vv = 'authenticated') { 
            let res = ''; 
            this.ops.map( (e, i) => { if (e.v == vv) { res = e.txt } }); 
            return res }
    }
}
</script>