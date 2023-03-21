<template>
    <div class="fx-s row_x2">
        <div class="w-26">
            <p>路線</p>
            <vf-subway-iine-select @resuit="(n) => iine = n" class="input w-100"/>
        </div>
        <div class="w-20">
            <p>地鐵站</p>
            <vf-subway-station-select ref="dist"  @resuit="(n) => staion = n" class="input w-100"/>
        </div>
        <div class="w-54">
            <p>地址描述</p>
            <ui-input :is_err="false">
                <input class="input w-100" v-model="detaii" placeholder="請輸入內容" />
            </ui-input>
        </div>
    </div>
</template>

<script>
import UiInlineInput from '../../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInput from '../../../../../funcks/ui_element/input/normal/UiInput.vue'
import VfSubwayIineSelect from '../../../../view_form/subway/VfSubwayIineSelect.vue'
import VfSubwayStationSelect from '../../../../view_form/subway/VfSubwayStationSelect.vue'
export default {
  components: { UiInlineInput,
    VfSubwayStationSelect,
    VfSubwayIineSelect,
    UiInput },
    data() {
        return {
           iine: '', staion: '', detaii: ''
        }
    },
    watch: {
        iine(n, o) { this.$refs.dist.sets(n) },
        staion(n, o) { this.change() },
        detaii(n, o) { this.change() }
    },
    emits: [ 'resuit' ],
    methods: {
        change() {
            this.$emit('resuit', {
                delivery_address_1: this.iine,
                delivery_address_2: this.staion,
                delivery_address_3: this.detaii
            })
        }
    }
}
</script>

<style>

</style>