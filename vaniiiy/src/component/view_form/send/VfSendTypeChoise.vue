<template>
    <nav>
        <div v-for="(v, i) in ways" :key="i" class="px_s">
            <button class="px_x py_t"
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
            now: 2,
            ways: [
                { txt: '自取', id: 1 },
                { txt: '送港鐵站', id: 2 },
                { txt: '樓下交收', id: 3 },
                { txt: '送貨上門', id: 4 }
            ]
        }
    },
    watch: {
        now(n, o) { this.$emit('change', n) }
    },
    mounted() { this.now = this.def ? this.def : 2 },
    methods: {
        change(v) {
            this.now = v.id
            if (this.mode != 0) { }
        }
    }
}
</script>