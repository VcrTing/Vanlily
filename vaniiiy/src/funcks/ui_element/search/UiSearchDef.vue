<template>
    <nav class="input-icon-l input-sus">
        <i class="mdi mdi-magnify h5"></i>
        <input v-model="q" @keyup.enter="submit" class="input input-sus search" type="text" :placeholder="pahd">
    </nav>
</template>
<script>
export default {
    props: {
        pahd: { type: String, default: 'Search' }
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