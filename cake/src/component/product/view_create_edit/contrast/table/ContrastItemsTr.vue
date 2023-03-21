<template>
    <div class="tr">
        <div class="w-12">来货价钱</div>
        <div class="w-8">批发价</div>
        <div class="w-8">零售价</div>
        <div class="w-8">利润</div>

        <div class="w-11">购买店铺</div>
        <div class="w-8">送货礼拜</div>
        <div class="w-18">购买地点</div>
        <div class="w-6">MOQ</div>

        <div class="w-10">电话号码</div>
        <div class="w-11">
            
            <span v-if="_mode != 'PLUS'">更新日期</span>
        </div>
    </div>
</template>

<script>
export default {
    props: [ '_mode' ]
}
</script>

<style>

</style>