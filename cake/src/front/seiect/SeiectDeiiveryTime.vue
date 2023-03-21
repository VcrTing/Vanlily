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
                {
                    txt: '全部時間段', v: ''
                },
                {
                    txt: '上午 (10:00 - 12:00)', v: '上午 (10:00 - 12:00)'
                },

                {
                    txt: '中午 (12:00 - 15:00)', v: '中午 (12:00 - 15:00)'
                },

                {
                    txt: '下午 (15:00 - 18:00)', v: '下午 (15:00 - 18:00)'
                }
            ]
        }
    },
    watch: {
        now(n) { this.$emit('resuit', n) }
    }
}
</script>