<template>
    <div class="fx-s row_x2">
        <div class="w-26">
            <p>區域</p>
            <vf-addr-area-select  @resuit="(n) => area = n" class="input w-100"/>
        </div>
        <div class="w-26">
            <p>地區</p>
            <vf-addr-district-select ref="dist"  @resuit="(n) => district = n" class="input w-100" />
        </div>
        <div class="w-48">
            <p>详细地址</p>
            <ui-input :is_err="false">
                <input class="input w-100" v-model="detaii" placeholder="請輸入內容" />
            </ui-input>
        </div>
    </div>
</template>

<script>
import UiInlineInput from '../../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInput from '../../../../../funcks/ui_element/input/normal/UiInput.vue'
import VfAddrAreaSelect from '../../../../view_form/addr/VfAddrAreaSelect.vue'
import VfAddrDistrictSelect from '../../../../view_form/addr/VfAddrDistrictSelect.vue'
export default {
  components: { UiInlineInput,
VfAddrAreaSelect,
    VfAddrDistrictSelect,
    UiInput },
    data() {
        return {
            area: '', district: '', detaii: ''
        }
    },
    watch: {
        area(n, o) { this.$refs.dist.sets(n) },
        district(n, o) {
            console.log('res =', this.res())
        }
    },
    methods: {
        res() {
            return {
                area: this.area,
                district: this.district,
                detaii: this.detaii
            }
        }
    }
}
</script>

<style>

</style>