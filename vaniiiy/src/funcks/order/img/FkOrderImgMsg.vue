<template>
    <nav class="fx-l" :class="{ 'fx-t': imgs.length > 4 }">
        <div class="w-25">
            <img class="img" :src="cover">
        </div><div class="w-10"></div>
        <div class="w-65" :class="{ 'w-50': imgs.length <= 4 }">
            <p class="pb_x">配件圖：</p>
            <ui-img-group :imgs="imgs" @change="(n) => now = n"></ui-img-group>
        </div>
    </nav>
</template>

<script>
import UiImgGroup from '../../ui_element/img/UiImgGroup.vue'
export default {
  components: { UiImgGroup },
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
.w-50
    width: 50% !important
</style>