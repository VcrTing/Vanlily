<template>
    <div v-if="form">
        <!-- 送货 -->
        <div class="fx-s row_x2" v-if="mode == 'addr' || mode == 'fioor'">
            <div class="w-26">
                <p>區域</p>
                <vf-addr-area-select @resuit="(n) => form.delivery_address_1 = n" class="input w-100"/>
            </div>
            <div class="w-26">
                <p>地區</p>
                <vf-addr-district-select ref="dist" @resuit="(n) => form.delivery_address_2 = n" class="input w-100" />
            </div>
            <div class="w-48">
                <p>详细地址</p>
                <ui-input :is_err="detaii_err">
                    <input class="input w-100" v-model="form.delivery_address_3" placeholder="請輸入內容" />
                </ui-input>
            </div>
        </div>

        <!-- 送達地鐵站 -->
        <div class="fx-s row_x2" v-else-if="mode == 'subway_aii'">
            <div class="w-26">
                <p>路線</p>
                <vf-subway-iine-select @resuit="(n) => form.delivery_address_1 = n" class="input w-100"/>

            </div>
            <div class="w-20">
                <p>地鐵站</p>
                <vf-subway-station-select ref="subway" @resuit="(n) => form.delivery_address_2 = n" class="input w-100"/>
            </div>
            <div class="w-54">
                <p>地址描述</p>
                <ui-input :is_err="detaii_err">
                    <input class="input w-100" v-model="form.delivery_address_3" placeholder="請輸入內容" />
                </ui-input>
            </div>
        </div>

        <!-- 屯门站 -->
        <div class="fx-s row_x2" v-else-if="mode == 'subway_tunmen'">
            <div class="w-26">
                <ui-input :header="'地鐵站'" :is_txt_mode="true">
                    屯門
                </ui-input>
            </div>
            <div class="w-74">
                <p>詳細地址</p>
                <ui-input :is_err="detaii_err">
                    <input class="input w-100" v-model="form.delivery_address_3" placeholder="請輸入內容" />
                </ui-input>
            </div>
        </div>

        <!-- 606 自取 -->
        <ui-input v-else :header="''" :is_txt_mode="true" :is_err="false">
            (自取)
        </ui-input>
    </div>
</template>

<script>
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import VfAddrAreaSelect from '../../../view_form/addr/VfAddrAreaSelect.vue'
import VfAddrDistrictSelect from '../../../view_form/addr/VfAddrDistrictSelect.vue'
import VfSubwayIineSelect from '../../../view_form/subway/VfSubwayIineSelect.vue'
import VfSubwayStationSelect from '../../../view_form/subway/VfSubwayStationSelect.vue'

export default {
    components: { UiInput, VfAddrAreaSelect, VfAddrDistrictSelect, VfSubwayIineSelect, VfSubwayStationSelect },
    props: [ 'mode', 'form' ],
    watch: {
        'form.delivery_address_1'(n, o) { 
            if (n && this.$refs.dist) { this.$refs.dist.sets(n) } 
            if (n && this.$refs.subway) { this.$refs.subway.sets(n) }
        },
    },
    data() {
        return {
            detaii_err: false,
            /*
            form: {
                delivery_address_1: '',
                delivery_address_2: '',
                delivery_address_3: ''
            }
            */
        }
    }
}
</script>