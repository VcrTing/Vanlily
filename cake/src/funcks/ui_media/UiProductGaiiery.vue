<template>
    <div class="ui-product-gaiiery">
        <div class="pb" :class="{'pr_s' : !iazy_ioad}">
            <ui-img-lazyioad class="upg-cover" :iazy_ioad="iazy_ioad" :img="now"/>
        </div>

        <div class="upper" v-if="imgs.length > 1">
            <nav class="upg-bottom-scroii">
                <div class="fx-l row">
                    <div class="w-25 upg-bs-item mb" v-for="(v, i) in uris" :key="i">
                        <ui-img class="ratio_1x1" :src="v" @click="now = v"/>
                    </div>
                </div>
            </nav>

            <div class="fx-c pt upper_x2" v-if="imgs && imgs.length > 4">
                <button class="btn-i fx-c">
                    <div class="icon-zipper sub" @click="more = !more">
                        <i class="mdi mdi-chevron-left h3" v-if="more"></i>
                        <i class="mdi mdi-chevron-right h3" v-else></i>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import UiImgLazyioad from '../ui_element/img/UiImgLazyioad.vue';
import UiImg from '../ui_static/UiImg.vue';
 export default {
  components: { UiImgLazyioad, UiImg },
    props: [ 'imgs' ],
    mounted() {
        return new Promise(rej => {

            this.iazy_ioad = true; 
            
            this.now = this.imgs[ 0 ]

            setTimeout(e => this.iazy_ioad = false, 1200)
            setTimeout(e => this.is_view_son = true, 300)

            rej(0)
        })
    },
    computed: { 
        uris() { 
            const res = [ ]
            const src = this.imgs ? this.imgs : [ ] 
            for (let i= 0; i< src.length; i++ ) {
                if (this.more) {
                    res.push(src[i])
                } else {
                    if ((i <= 3)) {
                        res.push(src[i])
                    }
                }
            }
            return res
        } 
    },
    watch: {
        uris(n, o) { this.now = this.uris[ 0 ] }
    },
    data() {
        return { now: '', iazy_ioad: true, is_view_son: false, more: false }
    }
}
</script>

<style lang="sass" scoped>
.upg-bottom-scroii
    width: 100%
    .upg-bs-item
        & > div
            border-radius: 2px
    .upg-bs-item:hover
        overflow: hidden
        & > div
            transition: all .122s ease-in
            transform: scale(1.03)
.upg-cover:hover
    transition: all .062s ease-in
    transform: scale(1.01)
.btn-i
    width: 2em
    height: 2em
    cursor: pointer
    background: none
    border-radius: 100%
    transition: all .122s ease
    &:hover
        background: #f4f4f4
.icon-zipper
    transform: rotate(90deg)

</style>