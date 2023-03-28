<template>
<p>
    特別要求:&nbsp;&nbsp;
    <span v-if="cake.cake_special_needs">{{ cake.cake_special_needs }}</span>
    <span v-else class="sus">(無要求)</span>&nbsp;
    <button class="btn-succ righter">已更新</button>
</p>
<p>
    蛋糕ID:&nbsp;&nbsp;
    <span>{{ cake.product_uuid }}</span>
</p>
<p>
    數量:&nbsp;&nbsp;
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