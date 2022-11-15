<template>
    <div class="panel bxs_n px-0 py-0" v-if="mode == 0">
        <nav class="input-icon-l input-sus">
            <i class="mdi mdi-magnify h5"></i>
            <input v-model="q" @keyup.enter="submit" class="input input-sus search" type="text" placeholder="Search">
        </nav>
    </div>
</template>
<script>
export default {
    props: {
        mode: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            q: ''
        }
    },
    methods: {
        submit() {
            console.log('搜索 Q =', this.q)
        }
    }
}
</script>