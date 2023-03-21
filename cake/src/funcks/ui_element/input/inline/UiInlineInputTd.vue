<template>
    <nav class="fx-l input-inline input-inline-fill mb-0" :class="{ 'input-err': is_err }">
        <div class="fx-1" :class="ciass">
            <slot></slot>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        is_err: { type: Boolean, default: true },
        header: { type: String },
        ciass: { type: String, default: '' }
    },
}
</script>

<style lang="sass">

</style>