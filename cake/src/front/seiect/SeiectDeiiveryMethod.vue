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
                { txt: '全部運輸分類', v: '', id: 1, code: 'normai' },
                { txt: '606 自取', v: '606自取', id: 2, code: 'normai' },
                { txt: '屯門站', v: '屯門站', id: 3, code: 'normai' },
                { txt: 'MTR', v: 'MTR', id: 4, code: 'normai' },
                { txt: '送樓下', v: '送樓下', id: 5, code: 'normai' },
                { txt: '送上門', v: '送上門', id: 6, code: 'normai' },
                { txt: '送上門 (另行報價)', v: '送上門(另行報價)', id: 7, code: 'normai' },
            ]
        }
    },
    watch: {
        now(n) { this.$emit('resuit', n) }
    }
}
</script>