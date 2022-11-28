<template>
    <span>{{ named ? named : def_name }}</span>
</template>

<script>
export default {
    props: [ 'order', 'def' ],
    computed: {
        products() {
            const src = this.order; 
            return src ? src.ordered_product : [ ]
        },
        def_name() {
            let res = [ ]
            if (this.def) { return this.def }
            this.products.map(e => { res.push('蛋糕 ID: ' + e.product_uuid) })
            return res.join('，')
        },
        named() {
            let res = [ ]; 
            /*
            if (this.order.uuid == '26197') {
                this.products.map(e => {
                    e = e.product; 
                    e = e ? e.data: undefined; 
                    e = e ? e.attributes.translation : undefined; 
                    e = e ? e['zh-hant'] : undefined
                    res.push(e ? e.name : '')
                })
            } else {*/
                this.products.map(e => {
                    e = e.product; 
                    e = e ? e.data: undefined; 
                    e = e ? e.attributes.translation : undefined; 
                    e = e ? e['zh-hant'] : undefined
                    res.push(e ? e.name : '')
                })
            // }
            return res ? res.join('，') : null
        }
    }
}
</script>

<style>

</style>