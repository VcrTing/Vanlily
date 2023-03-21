<template>
    <div v-if="srcs && srcs.length > 0">
        <slot></slot>
    </div>
    <div v-else class="py_x2 fx-c">
        No Data
    </div>
</template>

<script>
export default {
    props: {
        srcs: { type: Array, }
    }
}
</script>

<style>

</style>