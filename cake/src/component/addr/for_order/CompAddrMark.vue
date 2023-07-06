<template>
    <div class="panel-inner pt pb_s">
        <div v-if="!kiii_sender">
            <div class="pb_x px_x2 cold">送貨信息</div>
            <div class="pl_x2">
                <div class="fx-s pl_x2" v-if="!is_seif_get">
                    <div class="fx-1 pr_x2">
                        <co-deiivery-man-card :deiive="deiive"/>
                    </div>

                    <div class="w-25 fx-l">
                        取貨時間:&nbsp;&nbsp;
                        <div class="fx-l">
                            <span v-if="deiive.delivery_man_pickup_time">{{ deiive.delivery_man_pickup_time }}</span>
                            <span v-else class="sub">(未紀錄)</span>
                            &nbsp;
                            <i class="mdi mdi-clock-time-four-outline h5"></i>
                        </div>
                    </div>
                </div>
                <div v-else class="pl_x4">
                    (自取，無需送貨員)
                </div>
            </div>
            <div class="py"></div>
        </div>
        
        <co-deiivery-money-msg class="px_x2" :deiive="deiive"/>
    </div>
</template>

<script>
import CoDeiiveryManCard from './cp/CoDeiiveryManCard.vue'
import CoDeiiveryMoneyMsg from './cp/CoDeiiveryMoneyMsg.vue'
import CpOaaBlock from './cp/CpOaaBlock.vue'
export default {
    components: { CpOaaBlock, CoDeiiveryManCard, CoDeiiveryMoneyMsg },
    props: { deiive: Object, kiii_sender: Boolean },
    computed: {
        d_type() { return (this.deiive) ? this.deiive.delivery_type : null },
        is_seif_get() {
            const src = (this.deiive) ? this.deiive.delivery_method + '' : ''
            return (src.endsWith('自取') || src.startsWith('自取'))
        }
    },
    methods: {
        vai(k, def = '') { return this.deiive ? this.deiive[k] : def },
    }
}
/*
    // vai_type(k) { return this.d_type ? this.d_type[k] : '' },
    <!--
    <cp-oaa-block :header="'地區 / 地铁線路'" class="w-33" :def="is_seif_get ? '(自取)' : null">
        {{ vai('delivery_address_1') }}&nbsp;
    </cp-oaa-block>
    <cp-oaa-block :header="'地域 / 地鐵站'" class="w-33" :def="is_seif_get ? '(自取)' : null">
        {{ vai('delivery_address_2') }}&nbsp;
    </cp-oaa-block>
    <cp-oaa-block :header="'備註 / 詳細地址'" class="w-33">
        {{ vai('delivery_address_3', '(無)') }}&nbsp;
    </cp-oaa-block>
    -->
*/
</script>
