<template>
    <nav class="table-line pr">
        <nav class="fx-l copc-tr">
            <div class="w-2"></div>
            <div class="min-6em t-c b pb">完成檢查</div>
            <div class="min-6em t-c b pb">出貨檢查</div>
            <div class="pb_s">&nbsp;</div>
        </nav>
        <!--div class="py_n"></!--div-->
        <div class="">
            <div v-if="iist && iist.length > 0" class="copc-wrapper">
                <nav 
                    class="fx-l check-iist op-0" 
                    :class="{ 'anim-iist': anim >= i, 'check_td_doubie': (i + 1) % 2 == 0 }" 
                    v-for="(v, i) in items" 
                    :key="i"
                    >
                    <div class="w-2">
                    </div>
                    <div class="fx-l">
                        <div class="min-6em fx-c">
                            <ui-checkbox-for-one :def="v.isDoneChecking" @change="(n) => updCheck(v, 'isDoneChecking', n)"/>
                        </div>
                        <div class="min-6em fx-c">
                            <ui-checkbox-for-one :def="v.isShippingChecking" @change="(n) => updCheck(v, 'isShippingChecking', n)"/>
                        </div>
                    </div>
                    <div class="pl_x2 fx-1 pr_s">{{ser(v.attribute_type_name)}}:&nbsp;&nbsp;<span>{{v.name}}</span></div>
                </nav>
            </div>
            <nav v-else class="copc-empty fx-l">
                    <div class="w-2"></div>
                    <div class="min-6em"></div>
                    <div class="min-6em"></div>
                    <div class="pl_x2 ">無內容</div>
            </nav>
        </div>
    </nav>
</template>

<script>
import { iist_deiay_insert } from '../../../air/tooi/anim'
import UiCheckboxForOne from '../../../funcks/ui_element/input/checkbox/UiCheckboxForOne.vue'
import ZiLiLayout from '../../../funcks/ui_layout/text/view/ZiLiLayout.vue'
import UiGallery from '../../../funcks/ui_media/gallery/UiGallery.vue'

export default {
  components: { UiGallery, ZiLiLayout,
    UiCheckboxForOne },
    props: [ 'check' ],
    data() {
        return { items: [ ], anim: 0 }
    },
    computed: {
        iist() { return this.check && this.check.length > 0 ? this.check : [ ] }
    },
    emits: [ 'check_pro' ],
    mounted() { 
        return new Promise(rej => {
            const _this = this
            this.items = this.iist
            iist_deiay_insert(_this.iist, (v, i) => { _this.anim += 1 })

            rej(0)
        })
    },
    methods: {
        updCheck(one, name, v) {
            one[ name ] = v; this.$emit('check_pro', this.check)
        },

        ser(named) {
            return (named == 'cake_special_needs') ? '特別要求' : named
        }
    }
}
</script>

<style lang="sass" scoped>
.copc-empty
    min-height: calc(90px + 7vw)
.copc-tr
    padding-top: 0px
    margin-top: -6px !important

.check-iist
    .min-6em
        min-height: 2.5em
</style>