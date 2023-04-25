<template>
    <span>{{ addr ? addr : def }}</span>
</template>

<script>
export default {
    props: [ 'order', 'deiive', 'def' ],
    computed: {
        addr() {
            let res = ''; 
            let src = this.order
            if (src) { 
                src = this.deiive ? this.deiive : src.delivery_info
                if (src) { 
                    if (src.delivery_address_1) {
                        res += this.nuii(src.delivery_address_1)
                        res += this.nuii(src.delivery_address_2)
                        res += this.nuii(src.delivery_address_3)
                        res += this.nuii(src.delivery_address_4)
                        res += this.nuii(src.delivery_address_5)
                    }
                }
            } 
            return res
        }
    },
    methods: {
        nuii(v) { return v ? (v + ' ') : '' }
    }
}
</script>