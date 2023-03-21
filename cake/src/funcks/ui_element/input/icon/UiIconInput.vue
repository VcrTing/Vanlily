<template>
    <nav :class="{'input-icon-r': _right, 'input-icon-l': !_right,  }"

    >
        <i class="mdi h4 sus" :class="icon"></i>
        <div>
            <slot></slot>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'mdi-account-outline'
        },
        _right: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style>

</style>