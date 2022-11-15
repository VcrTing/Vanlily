<template>
    <select v-model="status">
        <option :value="1">開啟</option>
        <option :value="0">關閉</option>
    </select>
</template>
<script>
export default {
    props: [ '_item' ],
    data() {
        return {
            status: 1
        }
    },
    mounted() {
        this.status = this.fetch()
    },
    methods: {
        fetch() {
            let res = this._item.status
            return res
        }
    }
}
</script>