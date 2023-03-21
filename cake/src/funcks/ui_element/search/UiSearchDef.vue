<template>
    <nav class="input-icon-l input-sus ui-search-def">
        <i class="mdi mdi-magnify h4"></i>
        <input 
            v-model="q" 
            @keyup.enter="submit" 
            :placeholder="pahd"
            class="input search w-100"
            >
    </nav>
</template>
<script>
export default {
    emits: [ 'submit', 'resuit' ],
    props: {
        pahd: { type: String, default: 'Search' }
    },
    data() {
        return { q: '' }
    },
    watch: {
        q(n, o) { this.$emit('resuit', n) }
    },
    methods: { submit() { this.$emit('submit', this.q) } } 
}
</script>