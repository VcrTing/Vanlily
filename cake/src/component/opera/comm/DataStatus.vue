<template>
    <select v-model="status">
        <option :value="'true'">開啟</option>
        <option :value="'false'">關閉</option>
    </select>
</template>
<script>
export default {
    props: [ 'def' ],
    data() {
        return {
            status: 'false'
        }
    },
    mounted() {
        this.status = this.def ? 'true' : 'false'
    },
    methods: {
        
    }
}
</script>