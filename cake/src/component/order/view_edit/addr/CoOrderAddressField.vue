<template>
    <div v-if="form">
        <!-- 送货 -->
        <div class="fx-s row_x2" v-if="mode == 'addr' || mode == 'fioor'">

            <ui-inline-input class="w-25" :header="'區域:'" :_ciass="'pr_n'">
                <vf-addr-area-select ref="area" :form="form" :pk="'delivery_address_1'" class="input w-100"/>
            </ui-inline-input>
           
            <ui-inline-input class="w-25" :header="'地區:'" :_ciass="'pr_n'">
                <vf-addr-district-select ref="dist" :form="form" :pk="'delivery_address_2'" :pk_father="'delivery_address_1'" class="input w-100" />
            </ui-inline-input>

            <ui-inline-input class="fx-1" :header="'详细地址:'" :_ciass="'pr_n'" :is_err="detaii_err">
                <input class="input w-100" v-model="form.delivery_address_3" placeholder="地址是必填內容" />
            </ui-inline-input>
        </div>

        <!-- 送達地鐵站 -->
        <div class="fx-s row_x2" v-else-if="mode == 'subway_aii'">
            
            <ui-inline-input class="w-25" :header="'路線:'" :_ciass="'pr_n'">
                <vf-subway-iine-select ref="iine" :form="form" :pk="'delivery_address_1'" class="input w-100"/>
            </ui-inline-input>

            <ui-inline-input class="w-25" :header="'地鐵站:'" :_ciass="'pr_n'">
                <vf-subway-station-select ref="subway" :form="form" :pk="'delivery_address_2'" :pk_father="'delivery_address_1'" class="input w-100"/>
            </ui-inline-input>

            <ui-inline-input class="fx-1" :header="'地址描述:'" :_ciass="'pr_n'" :is_err="detaii_err">
                <input class="input w-100" v-model="form.delivery_address_3" placeholder="地址是必填內容" />
            </ui-inline-input>
        </div>

        <!-- 屯门站 -->
        <div class="fx-s row_x2" v-else-if="mode == 'subway_tunmen'">

            <ui-inline-input class="w-25" :header="'地鐵站:'" :_txt_mode="true">
                屯門
            </ui-inline-input>

            <ui-inline-input class="fx-1" :header="'詳細地址:'" :_ciass="'pr_n'" :is_err="detaii_err">
                <input class="input w-100" v-model="form.delivery_address_3" placeholder="地址是必填內容" />
            </ui-inline-input>
        </div>

        <!-- 606 自取 -->
        <ui-input v-else :header="''" :is_txt_mode="true" :is_err="false">
            (自取)
        </ui-input>
    </div>
</template>

<script>
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import VfAddrAreaSelect from '../../../view_form/addr/VfAddrAreaSelect.vue'
import VfAddrDistrictSelect from '../../../view_form/addr/VfAddrDistrictSelect.vue'
import VfSubwayIineSelect from '../../../view_form/subway/VfSubwayIineSelect.vue'
import VfSubwayStationSelect from '../../../view_form/subway/VfSubwayStationSelect.vue'

export default {
    components: { UiInput, VfAddrAreaSelect, VfAddrDistrictSelect, VfSubwayIineSelect, VfSubwayStationSelect, UiInlineInput },
    props: [ 'mode', 'form' ],
    watch: {
        'form.delivery_address_1'(n, o) { 
            // console.log('ADRR 1 =', n, this.form.delivery_address_2)
            
        },
    },
    data() {
        return { detaii_err: false }
    },
    methods: {
        _set(addr_1, addr_2 = null) {
            if (addr_1 && this.$refs.dist) { this.$refs.dist.sets(addr_1, addr_2) } 
            if (addr_1 && this.$refs.subway) { this.$refs.subway.sets(addr_1, addr_2) }
        },
        err(v) { this.detaii_err = v },
        reset() {
            /*
            const addr_1 = this.form.delivery_address_1
            const addr_2 = this.form.delivery_address_2
            if (addr_1 && this.$refs.dist) { this.$refs.dist.sets(addr_1, addr_2) } 
            if (addr_1 && this.$refs.subway) { this.$refs.subway.sets(addr_1, addr_2) }
            */
        }
    }
}
</script>