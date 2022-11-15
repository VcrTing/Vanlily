<template>
    <select @change="$emit('change', txt[status])" class="select select-sts" :class="{ 'select-sts-succ': status == 3, 'select-sts-err': status == 1 }" v-model="status">
        <option :value="0">開放</option>
        <option :value="1">關閉</option>
        <option :value="3">已調配</option>
    </select>
</template>
<script>
export default {
    emits: [ 'change' ],
    props: [ '_item' ],
    data() {
        return {
            status: 0,
            txt: { 0: 'open', 1: 'close', 3: 'changed'},
            num: { 'open': 0, 'close': 1, 'changed': 3 }
        }
    },
    watch: {
        status(n, o) {
            
        }
    },
    mounted() {
        this.status = this.fetch()
    },
    methods: {
        fetch() {
            let res = this._item ? this.num[ this._item ] : 0
            return res
        }
    }
}
</script>