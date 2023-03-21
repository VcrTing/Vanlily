<template>
    <span>
        {{ dated ? dated : '(无)' }}
    </span>
</template>

<script>
export default {
    props: [ 'order', 'is_time' ],
    methods: {
        ser(v) {
            if (v) {
                return this.timed.view(v)
            }
        }
    },
    computed: {
        info() { return this.order ? this.order.delivery_info : null },
        dated() {
            let src = this.info
            if (src) {
                if (this.is_time) {
                return src.delivery_time
                }
                return this.ser(src.delivery_date)
            }
        }
    }
}
</script>

<style>

</style>