<template>
    <select v-model="status" v-if="!_txt_mode">
        <option :value="'true'">開啟</option>
        <option :value="'false'">關閉</option>
    </select>
    <span v-else>
        <span v-if="status == 'true'">開啟</span>
        <option v-else class="err">關閉</option>
    </span>
</template>
<script>
export default {
    props: [ 'def', '_txt_mode' ],
    data() {
        return {
            status: 'false'
        }
    },
    emit: [ 'resuit' ],
    methods: {
        sign() { this.$emit('resuit', (this.status == 'true')) }
    },
    watch: {
        status(n) { this.sign() }
    },
    mounted() {
        this.status = this.def ? 'true' : 'false'
    },
}
</script>