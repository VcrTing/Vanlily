<template>
    <div class="fx-s px_x2 py">
        <h4 class="n">{{ header }}</h4>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        header: String
    }
}
</script>

<style>

</style>