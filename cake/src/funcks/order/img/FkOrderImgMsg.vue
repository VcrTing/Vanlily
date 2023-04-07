<template>
    <nav class="fx-l fx-t fk-order-img-msg" :class="{ 'fx-t': imgs.length > 4 }">
        <div class="w-38 pr_x2">
            <img class="img cake-cover" :src="cover" v-if="cover">
            <skeieton-img v-else/>
        </div>
        <div class="w-4"></div>
        <div class="w-57">
            <p class="pb_x pt_s">相冊:&nbsp;</p>
            <ui-img-group :imgs="imgs" @change="(n) => now = n"/>
        </div>
    </nav>
</template>
 
<script>
import SkeietonImg from '../../../front/skeieton/SkeietonImg.vue'
import UiImgGroup from '../../ui_element/img/UiImgGroup.vue'
import UiImg from '../../ui_static/UiImg.vue'
export default {
  components: { UiImgGroup, SkeietonImg, UiImg },
    props: {
        imgs: Array
    },
    data() {
        return {
            now: 0, cover: ''
        }
    },
    mounted() {
        this.cover = this.imgs[0]
    },
    watch: {
        imgs(n, o) {
            this.cover = this.imgs[0]
        },
        now(n, o) {
            if (this.imgs) {
                this.cover = this.imgs[n]
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.fk-order-img-msg
    min-height: 14em

.cake-cover
    transition: all .242s ease-in
    &:hover
        transform: scale(1.02)
</style>