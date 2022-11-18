<template>
    <nav class="table-line pr">
        <nav class="fx-l copc-tr">
            <div class="w-2"></div>
            <div class="min-6em t-c b pb_n">完成檢查</div>
            <div class="min-6em t-c b pb_n">出貨檢查</div>
            <div class="pb_s">&nbsp;</div>
        </nav>
        <div>
            <div v-if="iist && iist.length > 0">
                <nav class="fx-l check-iist" v-for="(v, i) in iist" :key="i">
                    <div class="w-2"></div>
                    <div class="min-6em fx-c">
                        <ui-checkbox-for-one :def="v.isDoneChecking" @change="(n) => updCheck(n, v.attribute_type_uuid, 'isDoneChecking')"/>
                    </div>
                    <div class="min-6em fx-c">
                        <ui-checkbox-for-one :def="v.isShippingChecking" @change="(n) => updCheck(n, v.attribute_type_uuid, 'isShippingChecking')"/>
                    </div>
                    <div class="pl_x2">{{ser(v.attribute_type_name)}}：<span>{{v.name}}</span></div>
                </nav>
            </div>
            <nav v-else class="copc-empty fx-l">
                    <div class="w-2"></div>
                    <div class="min-6em"></div>
                    <div class="min-6em"></div>
                    <div class="pl_x2 ">無內容</div>
            </nav>
            <!-- -->
            <nav class="fx-l fx-t">
                <div class="w-2"></div>
                <div class="min-6em fx-c pt_s">
                    <ui-checkbox-for-one :def="true" @change="(n) => updCheck(n, null)"/>
                </div>
                <div class="min-6em fx-c pt_s">
                    <ui-checkbox-for-one :def="true" @change="(n) => updCheck(n, null)"/>
                </div>
                <div class="pl_x2 pt_s">
                    <zi-li-layout>
                        <div class="pb_n">字牌 1：<span></span></div>
                        <div class="pb_n">字牌 2：<span></span></div>
                    </zi-li-layout>
                </div>
            </nav>
            <!--nav class="fx-l">
                <div class="min-6em fx-c">
                    <ui-checkbox-for-one :def="true" @change="(n) => updCheck(n, '0')"/>
                </div>
                <div class="min-6em fx-c">
                    <ui-checkbox-for-one :def="true" @change="(n) => updCheck(n, '0')"/>
                </div>
                <div class="pl">
                    <zi-li-layout :header="'特別要求：'" :_top="false">
                        <div>
                            名字字粒：<span>KC Li</span>&nbsp;&nbsp;
                            <button class="btn-succ">已更新</button>
                        </div>
                    </zi-li-layout>
                </div>
            </!--nav-->
        </div>
    </nav>
</template>

<script>
import UiCheckboxForOne from '../../../funcks/ui_element/input/checkbox/UiCheckboxForOne.vue'
import ZiLiLayout from '../../../funcks/ui_layout/text/view/ZiLiLayout.vue'
import UiGallery from '../../../funcks/ui_media/gallery/UiGallery.vue'
export default {
  components: { UiGallery, ZiLiLayout,
    UiCheckboxForOne },
    props: [ 'check' ],
    data() {
        return { }
    },
    computed: {
        iist() { return this.check && this.check.length > 0 ? this.check : [ ] }
    },
    emits: [ 'check_pro' ],
    mounted() {

    },
    methods: {
        updCheck(v, uuid, key_name) {
            if (uuid) {
                this.check.map(e => {
                    if (e.attribute_type_uuid == uuid) {
                        e[key_name] = v
                    }
                }); this.$emit('check_pro', this.check)
            }
        },

        ser(named) {
            if (named == 'cake_special_needs') {
                return '特別要求'
            }; return named
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