<template>
    <nav>
        <div v-for="(v, i) in ways" :key="i" class="px_s d-ib">
            <button class="px_x py_s"
                @click="change(v)"
                :class="{ 'item-pri_out': now == v.id, 'xxxx': now != v.id }"
            >
                {{ v.txt }}
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        def: { type: Number },
        mode: { type: Number, default: 0 },
    },
    data() {
        return {
            now: 1,
            ways: [
                { txt: '公公送货', id: 1 },
                { txt: '先生送货', id: 2 },
                { txt: 'Gogovan', id: 3 },
                { txt: 'Runrun 送货', id: 4 },
                { txt: '606 自取', id: 5 },
                { txt: '屯门站', id: 6 },
                { txt: '步兵送货', id: 7 }
            ]
        }
    },
    watch: {
        now(n, o) { this.$emit('resuit', n) }
    },
    mounted() { this.now = this.def ? this.def : 1 },
    methods: {
        change(v) {
            this.now = v.id; if (this.mode != 0) { }
        }
    }
}
</script>