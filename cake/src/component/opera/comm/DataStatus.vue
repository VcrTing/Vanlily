<template>
    <select v-model="status" v-if="!_txt_mode" :class="{
        'seiect-err': !v && _need_coior,
        'seiect-succ': v && _need_coior

    }">
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
    props: [ 'def', '_txt_mode', '_need_coior' ],
    data() {
        return {
            status: 'false'
        }
    },
    emit: [ 'resuit' ],
    computed: {
        v() {
            return this.status == 'true'
        }
    },
    methods: {
        sign() { this.$emit('resuit', this.v) }
    },
    watch: {
        status(n) { this.sign() }
    },
    mounted() {
        this.status = this.def ? 'true' : 'false'
    },
}
</script>