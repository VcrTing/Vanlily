<template>
    <div class="__div_img" :style="{
        'background': 'url(' + img + ')',
        'background-size': 'cover',
        'background-position': 'center'
    }">
    </div>
</template>

<script>
export default {
    props: {
        src: { type: String },
        is_api: { type: Boolean, default: false },
    },
    computed: {
        img() { return this.is_api ? ('' + this.src) : this.src }
    }
}
</script>

<style lang="sass" scoped>
.__div_img
    width: 100%
</style>