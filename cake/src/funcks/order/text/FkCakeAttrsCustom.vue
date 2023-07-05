<template>
    <div v-if="cake">
        <p>
            <span>款式:&nbsp;&nbsp;</span><span>{{ cake.cake_type }}</span>
        </p>
        <p>
            <span>味道:&nbsp;&nbsp;</span><span>{{ cake.cake_flavor }}</span>
        </p>
        <p>
            <span>尺吋:&nbsp;&nbsp;</span><span>{{ cake.cake_size }}</span>
        </p>
    </div>
    <div v-else class="sus pt">
        (未有蛋糕数据)
    </div>
</template>

<script>
export default {
    props: { cake: Object }
}
</script>
