<template>
    <button class="btn-pri_out px py_t fx-s">
        <span v-if="icon"><i class="mdi h5" :class="icon"></i>&nbsp;</span>
        {{ tit }}
    </button>
</template>

<script>
export default {
    props: [ 'icon', 'tit' ]
}
</script>