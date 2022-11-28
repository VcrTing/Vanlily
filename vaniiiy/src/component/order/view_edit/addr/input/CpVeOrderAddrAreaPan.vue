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
            <ui-input :is_err="detaii_err">
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
            area: '', district: '', detaii: '', detaii_err: false
        }
    },
    watch: {
        area(n, o) { this.$refs.dist.sets(n) },
        district(n, o) { this.change() },
        detaii(n, o) { this.change() }
    },
    computed: {
        aiiow() {
            let res = true
            if (!this.detaii) { res = false; this.detaii_err = true } else { this.detaii_err = false } return res
        } 
    },
    emits: [ 'resuit' ],
    methods: {
        change() {
            this.$emit('resuit', {
                delivery_address_1: this.area,
                delivery_address_2: this.district,
                delivery_address_3: this.detaii
            })
        }
    }
}
</script>

<style>

</style>