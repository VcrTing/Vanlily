<template>
    <nav class="fx-l input-inline input-inline-fill">
        <label :class="_class" v-if="header">
            <span v-html="header"></span>&nbsp;
        </label>
        <div class="fx-1" :class="{ 'input-err': is_err }">
            <nav :class="{'input-icon-r': _right, 'input-icon-l': !_right,  }">
                <i class="mdi h4 sus" :class="icon"></i>
                <div>
                    <slot></slot>
                </div>
            </nav>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        is_err: { type: Boolean, default: true },
        header: { type: String },
        _class: { type: String, default: "label-inline" },
        icon: {
            type: String,
            default: 'mdi-account-outline'
        },
        _right: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style lang="sass" scoped>
.input-inline
    margin-bottom: 0px
</style>