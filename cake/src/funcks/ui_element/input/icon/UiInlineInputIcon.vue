<template>
    <nav class="fx-l" :class="{ 'inline-input-txt-mode': _txt_mode }">
        <label class="label-inline" v-if="header" :class="_class">
            {{ header }}&nbsp;
        </label>
        <div class="fx-1" :class="{ 'input-err': is_err }">
            <nav :class="{'input-icon-r': _right, 'input-icon-l': !_right,  }">
                <i class="mdi h4 sus" :class="icon" v-if="icon"></i>
                <div class="ip-w-100">
                    <slot></slot>
                </div>
            </nav>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        header: { type: String },
        is_err: { type: Boolean, default: true },
        icon: String,
        _class: {
            type: String,
            default: ''
        },
        _right: Boolean,
        _txt_mode: Boolean
    },
}
</script>