<template>
    <div>

        <p>
            蛋糕單價:&nbsp;&nbsp; 
            <view-money :money="coec.unit_price"/>
        </p>

        <p>
            蛋糕原價:&nbsp;&nbsp; 
            <view-money :money="coec.original_price"/>
        </p>

        <p>
            折扣價:&nbsp;&nbsp; 
            <view-money :money="coec.discounted_price"/>
        </p>
    </div>
</template>

<script>
import ViewMoney from '../../../../component/view/money/ViewMoney.vue'
export default {
    props: [ 'cake' ],
    components: { ViewMoney },
    computed: {
        coecs() {
            let src = this.productPina()
            return src.coecs ? src.coecs : [ ]
        },
        coec() {
            if (this.coecs && this.cake) {
                let res = { }
                this.coecs.map(e => {
                    if (e.product_uuid == this.cake.uuid) { res = e }
                }); 
                return res
            } return { }
        },
    }
}
</script>