<template>
    <nav class="fx-l input-inline input-inline-fill mb-0">
        <div class="fx-1" :class="{ 'input-err': is_err, 'pr_x2': is_pr, 'pr_s': !is_pr }">
            <slot></slot>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        is_err: { type: Boolean, default: true },
        header: { type: String },
        is_pr: { type: Boolean, default: true }
    },
}
</script>

<style lang="sass">

</style>