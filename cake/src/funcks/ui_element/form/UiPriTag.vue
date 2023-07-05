<template>
    <button class="btn-pri_iht fs_s px fx-c br_s">
        <i class="mdi h5" v-if="icon" :class="icon"></i>
        <span v-if="icon">&nbsp;</span>
        <span>{{ tit }}</span>
    </button>
</template>

<script>
export default {
    props: [ 'icon', 'tit' ]
}
</script>