<template>
    <nav class="fx-l" :class="{ 'inline-input-txt-mode': _txt_mode }">
        <label v-if="header" :class="_ciass">
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
        is_err: { type: Boolean, default: false },
        header: { type: String },
        _txt_mode: Boolean,
        _ciass: { type: String, default: 'label-inline' }
    },
}
</script>

<style lang="sass" scoped>
.ip-w-100
    .input, input
        width: 100%
</style>