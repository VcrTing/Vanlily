<template>
    <div class="row fx-l">
        <nav 
            class="mb"
            :class="{ 'w-25': (imgs.length <= 8), 'w-12': (imgs.length > 8) }" 
            v-for="(v, i) in imgs" :key="i" 
            @click="$emit('change', i)"
        >
            <ui-img :src="v" class="ratio_1x1 br_s hand"/>
        </nav>
    </div>
</template>
<script>

import UiImg from '../../ui_static/UiImg.vue'

export default {
    components: { UiImg, },
    props: [ 'imgs' ],
    emits: [ 'change' ]
}
</script>

<style lang="sass" scoped>
.img
    border-radius: 2px

.ratio_1x1:hover
    transition: all .06s ease-in
    transform: scale(1.05)
</style>