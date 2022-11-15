<template>
    <nav class="fx-l input-inline input-inline-fill">
        <label class="label-inline" :class="_class">
            <span v-html="header"></span>&nbsp;
        </label>
        <div class="fx-1" :class="{ 'input-err': is_err, 'pr_x2': _pr }">
            <slot></slot>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        is_err: { type: Boolean, default: true },
        header: { type: String },
        _class: { type: String },
        _pr: { type: Boolean, default: true }
    },
}
</script>
