<template>
    <div>
        <div class="fx-l fx-t" :class="{ 'pro-gallery': mode == 'CROSS' }">
            <div class="w-85">
                <div class="pr">
                    <ui-img-lazyioad @click="pina().viewImg(now)" :img="now" :iazy_ioad="iazy_ioad"/>
                </div>
            </div>
            <div class="w-15 upper" v-if="is_view_son">
                <div class="w-100 pro-gry-ul" :class="{ 'vert-iist': mode != 'CROSS', 'fx-l pt_s row' : mode == 'CROSS' }">
                    <div class="" v-for="(v, i) in imgs" :key="i" @click="now = v">
                        <img class="img" :src="v">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UiImgLazyioad from '../../ui_element/img/UiImgLazyioad.vue'
export default {
  components: { UiImgLazyioad },
    props: {
        mode: {
            type: String,
            default: 'CROSS'
        },
        imgs: {
            type: Array,
            default: () => {
                return [
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210827%2F2395168e45a447c9a6c24ab6e7182f61.jpeg&refer=http%3A%2F%2Fp4.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651309142&t=772053b4fbcb85c49efef5302dac0858',
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210827%2F2395168e45a447c9a6c24ab6e7182f61.jpeg&refer=http%3A%2F%2Fp4.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651309142&t=772053b4fbcb85c49efef5302dac0858',
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210827%2F2395168e45a447c9a6c24ab6e7182f61.jpeg&refer=http%3A%2F%2Fp4.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651309142&t=772053b4fbcb85c49efef5302dac0858',
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210827%2F2395168e45a447c9a6c24ab6e7182f61.jpeg&refer=http%3A%2F%2Fp4.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651309142&t=772053b4fbcb85c49efef5302dac0858'
                ]
            }
        }
    },
    mounted() {
        return new Promise(rej => {
            this.iazy_ioad = true; setTimeout(e => this.iazy_ioad = false, 1200)
            this.now = this.imgs[ 0 ]
            setTimeout(e => {
                this.is_view_son = true
            }, 300)
        })
    },
    watch: {
        imgs(n, o) { this.now = this.imgs[ 0 ] }
    },
    data() {
        return { now: '', iazy_ioad: true, is_view_son: false }
    },
}
</script>

<style lang="sass" scoped>
.vert-iist
    height: calc(45px + 14.5vw)
    overflow: hidden
    overflow-y: scroll
    max-height: 34vh
    
.pro-gry-ul
    div
        cursor: pointer
        transition: all .362s ease-in
        &:hover 
            transform: scale(1.08)
        img
            border-radius: 0.25em

.pro-gallery
    flex-wrap: wrap
    & > div
        width: 100% !important
    .pro-gry-ul
        width: 100%
        flex-wrap: wrap
        div
            width: 16% 
            display: inline-block 
        img
            border-radius: 1px !important

</style>