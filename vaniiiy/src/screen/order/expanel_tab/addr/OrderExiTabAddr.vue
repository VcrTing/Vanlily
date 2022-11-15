<template>
        <div class="fx-s">
            <div class="w-80">
                <ul class="row fx-l tag-def-group">
                    <li v-for="(v, i) in tags" :key="i" class="px_s">
                        <button @click="() => now = v.id" class="px" :class="{ 'active': v.id == now }">{{ v.txt }}</button>
                    </li>
                </ul>
            </div>
            <button class="btn-pri_out px py_t fx-s" @click="open">
                <i class="mdi mdi-plus h5"></i>&nbsp;
                新增地點
            </button>
        </div>
</template>

<script>
export default {
    data() {
        return {
            now: 0,
            tags: [
                { txt: 'A1 VanlilyCake Workshop(免配送費)', id: 1 },
                { txt: '屯門站F出口', id: 2 },
            ]
        }
    },
    watch: {
        now(n, o) { if (n) { this.$emit('sign', n) } }
    },
    methods: {
        open() { this.pina().modai( 3 ) }
    }
}
</script>

<style>

</style>