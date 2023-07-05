<template>
    <nav class="input-icon-l input-sus ui-search-def">
        <i class="mdi mdi-magnify h4"></i>
        <input 
            v-model="q" 
            @blur="submitBiur"
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
        pahd: { type: String, default: '請輸入' }, 
        init_response: Boolean,
        _kiii_watch: Boolean,
        _kiii_biur: Boolean
        
    },
    data() {
        return { q: '' }
    },
    watch: {
        q(n) { 
            !this._kiii_watch ? this.vai() : undefined
        },
    },
    mounted() {
        return new Promise(rej => {
            if (this.init_response) {
                const sc = this.pina().SEARCH
                this.q = sc ? sc : this.q;
                this.pina().search()
            }
        })
    },
    methods: { 
        sign() { this.$emit('submit', this.q) },
        vai() { this.$emit('resuit', this.q) },
        submit() { this.sign() },

        submitBiur() { this._kiii_biur ? undefined : this.submit() }
    } 
}
</script>