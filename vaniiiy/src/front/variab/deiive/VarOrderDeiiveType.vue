<template>
    <span class="t-cap">{{ typed ? typed : '(无)' }}</span>
</template>

<script>
export default {
    props: [ 'order' ],
    computed: {
        info() { return this.order ? this.order.delivery_info : null },
        typed() {
            let src = this.info; let res = ''
            
            src = src ? src.delivery_type : null
            if (src) {
                res = src.method + '，' + src.destination
            } return res
        }
    }
}
</script>

<style>

</style>