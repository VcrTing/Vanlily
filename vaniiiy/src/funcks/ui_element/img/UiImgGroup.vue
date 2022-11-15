<template>
    <div class="row fx-l">
        <nav :class="{ 'w-25': (imgs.length <= 8), 'w-16': (imgs.length > 8) }" v-for="(v, i) in imgs" :key="i" @click="$emit('change', i)">
            <img class="img" :src="v"/>
        </nav>
    </div>
</template>
<script>
export default {
    props: [
        'imgs'
    ],
    emits: [ 'change' ]
}
</script>
<style lang="sass" scoped>
.img
    border-radius: 2px
</style>