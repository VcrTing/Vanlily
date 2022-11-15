<template>
<p>
    特別要求：
    <span>名字字粒&nbsp;&nbsp;{{ cake.cake_special_needs }}</span>&nbsp;
    <button class="btn-succ">已更新</button>
</p>
<p>
    蛋糕ID：
    <span>{{ cake.product_uuid }}</span>
</p>
<p>
    數量：
    <span>{{ cake.quantity }}</span>
</p>
</template>

<script>
export default {
    props: {
        cake: Object
    }
}
</script>

<style>

</style>