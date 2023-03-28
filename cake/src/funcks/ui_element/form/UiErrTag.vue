<template>
    <span class="btn-err px br_s fs_s py_s">
        <span v-if="icon">
            <i class="mdi mdi-plus"></i>&nbsp;
        </span>
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: [ 'icon' ]
}
</script>