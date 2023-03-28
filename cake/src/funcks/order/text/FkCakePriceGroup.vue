<template>
    <p>
        合共費用:&nbsp;&nbsp;
        <view-money :money="cake.discounted_price"/>
    </p>
    <p>
        蛋糕價錢:&nbsp;&nbsp;
        <view-money :money="cake.unit_price"/>
    </p>
    <p>
        蛋糕原價:&nbsp;&nbsp;
        <view-money :money="cake.original_price"/>
    </p>
</template>

<script>
import ViewMoney from '../../../component/view/money/ViewMoney.vue'
export default {
  components: { ViewMoney },
    props: {
        cake: Object
    }
}
</script>

<style>

</style>