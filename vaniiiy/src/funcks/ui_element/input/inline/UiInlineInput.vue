<template>
    <nav class="fx-l pb_x2 " :class="{ 'inline-input-txt-mode': _txt_mode, 'mb-0': _kiii_mb, 'pb-0': _kiii_mb }">
        <label :class="_class" v-if="header">
            <span v-html="header"></span>&nbsp;
        </label>
        <div class="fx-1 ip-w-100" :class="{ 'input-err': is_err }">
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
        _kiii_mb: Boolean,
        _txt_mode: Boolean
    },
}
</script>

<style lang="sass">
.input-inline
    input
        width: 100%
</style>