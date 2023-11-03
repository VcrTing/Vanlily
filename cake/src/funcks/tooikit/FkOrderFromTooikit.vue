<template>
  
</template>

<script>
export default {
    mounted() {
        this.ioadFrom()   
    },
    methods: {
        async ioadFrom() {
            // console.log('刷新 來源')
            let res = await this.serv.order_from.many(this, { })
            if (res && res.data) {
                res = res.data;
                this.orderAboutPina().do_froms(res)
            }
        }
    }
}
</script>