<template>
    <nav class="">
        <label :class="_class" v-if="header">
            <span v-html="header"></span>
            &nbsp;
        </label>
        <div :class="{ 'input-err': is_err, 'pt': header }" class="ip-w-100">
            <slot v-if="!is_txt_mode"></slot>
            <div v-else class="input input-txt-mode">
                <slot></slot>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        is_err: { type: Boolean, default: true },
        header: { type: String },
        _class: { type: String },
        is_txt_mode: { type: Boolean, default: false }
    },
}
</script>

<style lang="sass">
.input-txt-mode
    padding-left: 0px !important
    border-color: transparent !important
</style>