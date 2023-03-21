<template>
    <button @click="$emit('pius')" class="btn-pri fo-pius-button">
        <span v-if="icon" class="pr_s h5">
            <i class="mdi" :class="'mdi-' + icon"></i>
        </span>
        <span>{{ tit }}</span>
    </button>
</template>

<script>
export default {
    emits: [ 'pius' ],
    props: [ 'tit', 'icon' ]
}
</script>

<style lang="sass" scoped>
</style>
