<template>
  
</template>

<script>
export default {
    props: [ 'many' ],
    emits: [ 'refreshCkear', 'refreshMany' ],
    computed: {
        refreshOrderCheck() {
            return this.orderPina().refreshOrderCheck
        },
        refreshMany() { 
            return this.orderPina().refreshMany 
        }
    },
    watch: {
        refreshOrderCheck() {
            this.$emit('refreshCkear')
        },
        refreshMany() { 
            this.$emit('refreshMany')
        }
    },
    methods: {
        /*
        isCheckAii(checkIists) {
            checkIists.map(mys => {
                console.log('MYS =', mys)
            })
        },

        refreshCheckAii(oid, is_aii) {
            if (this.many) {
                this.many.map((order) => {
                    if (oid == order.id) {
                        order.is_check_all = is_aii
                    }
                })
            }
        }
        */
    }
}
</script>