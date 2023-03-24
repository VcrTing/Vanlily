<template>
    <nav>
        <p class="py">
            備註一：
            <span>{{ order.remarks_1 }}</span>
        </p>
        <p>
            備註二：
            <span>{{ order.remarks_2 }}</span>
        </p>
    </nav>
</template>

<script>
export default {
    props: {
        order: Object
    },
}
</script>