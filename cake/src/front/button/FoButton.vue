<template>
    <button class="btn-pri_out px_x2 py_s">
        <span v-if="icon">
            <i class="mdi" :class="icon"></i>
        </span>
        {{ tit }}
    </button>
</template>

<script>
export default {
    props: [ 'icon', 'tit' ]
}
</script>