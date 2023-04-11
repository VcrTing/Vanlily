<template>
    <div class="row fx-l">
        <nav 
            class="mb"
            :class="{ 'w-25': (ien <= 8), 'w-20': (ien > 8 && ien < 15), 'w-12': (ien > 15) }" 
            v-for="(v, i) in res" :key="i" 
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
    emits: [ 'change' ],
    computed: {
        res() {
            let res = [ ]
            this.imgs ? this.imgs.map((e, i) => {
                if (i < 32) {
                    res.push(e)
                }
            }) : undefined
            return res
        },
        ien() { return this.imgs ? this.res.length : 0 }
    }
}
</script>

<style lang="sass" scoped>
.img
    border-radius: 2px

.ratio_1x1:hover
    transition: all .06s ease-in
    transform: scale(1.05)
</style>