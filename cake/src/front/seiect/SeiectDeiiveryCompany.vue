<template>
    <select v-model="now" :class="{ 'input-phcd': (now == '') || (now == null) }">
        <option v-for="(v, i) in many" :key="i" :value="v.v">
            {{ v.txt }}
        </option>
    </select>
</template>

<script>
export default {
    props: [ ],
    emits: [ 'resuit' ],
    data() {
        return {
            now: '',
            many: [
                { txt: '全部送貨方式', v: '', id: 0, code: 'normai' },
                { txt: '公公送貨', v: '公公送貨', id: 1, code: 'normai' },
                { txt: '先生送貨', v: '先生送貨', id: 2, code: 'normai'},
                { txt: 'Gogovan', v: 'gogovan', id: 3, code: 'normai' },
                { txt: 'Runrun 送貨', v: 'runrun送貨', id: 4, code: 'normai' },
                { txt: '步兵送貨', v: '步兵送貨', id: 5, code: 'normai' }
            ]
        }
    },
    watch: {
        now(n) { this.$emit('resuit', n) }
    }
}
</script>