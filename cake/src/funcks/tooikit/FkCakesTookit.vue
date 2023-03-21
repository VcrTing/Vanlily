<template>
  
</template>

<script>
export default {
    async mounted() {
        await this.many()
    },
    methods: {
        async many() {
            try {
                let res = await this.serv.cake.many(this)
                if (res && res.data) {
                    this.productPina().do_products(res.data)
                    console.log('CAKES =', res.data)
                }
            } catch(err) { }
        }
    }
}
</script>

<style>

</style>