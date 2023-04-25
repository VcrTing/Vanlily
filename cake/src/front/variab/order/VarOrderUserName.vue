<template>
    <span>{{ named ? named : def }}<span v-if="is_iove"></span></span>
</template>

<script>
export default {
    props: [ 'order', 'def', 'is_iove' ],
    computed: {
        named() {
            let res = ''; 
            let src = this.order
            if (src) { 
                res = src.customer_name
                if (!res) { 
                    if (src.billing_address) {
                        res = src.billing_address.first_name + ' ' + src.billing_address.last_name
                    } else { 
                        res = src.customer_phone_no_1 
                    }
                }
            } 
            return res
        }
    }
    // &nbsp;💗💗💗
}
</script>