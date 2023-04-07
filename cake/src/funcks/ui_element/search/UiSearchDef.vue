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
        pahd: { type: String, default: 'Search' }, 
        response: Boolean
    },
    data() {
        return { q: '' }
    },
    computed: {
        search() { return this.pina().SEARCH }
    },
    watch: {
        q(n) { this.sign() },
        search(n) {
            // console.log('來了 =', n, this.response)
            if (this.response) {
                this.q = n
            }
        }
    },
    methods: { 
        sign() { this.$emit('submit', this.q) },
        submit() { this.sign() } 
    } 
}
</script>