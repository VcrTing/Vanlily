<template>
    <nav class="fx-l input-inline input-inline-fill">
        <label :class="_class" v-if="header">
            <span v-html="header"></span>&nbsp;
        </label>
        <div class="fx-1" :class="{ 'input-err': is_err }">
            <slot></slot>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        is_err: { type: Boolean, default: true },
        header: { type: String },
        _class: { type: String, default: "label-inline" },
    },
}
</script>

<style lang="sass">

</style>