<template>
    <div class="panel-inner pt pb_s">
        <div class="pb_x px_x2">送貨地址</div>
            <div class="pl_x2">
                <div class="fx-s pl_x2">
                    <cp-oaa-block :header="'地區 / 地铁線路'" class="w-33">
                        {{ vai('delivery_address_1') }}&nbsp;
                    </cp-oaa-block>
                    <cp-oaa-block :header="'地域 / 地鐵站'" class="w-33">
                        {{ vai('delivery_address_2') }}&nbsp;
                    </cp-oaa-block>
                    <cp-oaa-block :header="'備註 / 詳細地址'" class="w-33">
                        {{ vai('delivery_address_3', '(無)') }}&nbsp;
                    </cp-oaa-block>
                </div>
            </div>
            <div class="py"></div>
            <div class="fx-s fx-t pt px_x2">
                <div class="w-32">
                    <p class="sub">運費信息</p><p class="pl_x2">&nbsp;</p>
                </div>
                <div class="w-28">
                    <p>客付運費價格</p>
                    <p class="py">
                        <span>$</span>
                        &nbsp;&nbsp;&nbsp;
                        <span class="h5">{{ deiive.delivery_fee ? deiive.delivery_fee : 0 }}</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>HKD</span>
                    </p>
                </div>
                <div class="w-45 pri_son">
                    <p>Vanlily Cake 付運費價格</p>
                    <p class="py">
                        <span>$</span>
                        &nbsp;&nbsp;&nbsp;
                        <span class="h5">{{ deiive.additional_fee ? deiive.additional_fee : 0 }}</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>HKD</span>
                    </p>
                </div>
            </div>
    </div>
</template>

<script>
import CpOaaBlock from './cp/CpOaaBlock.vue'
export default {
    components: { CpOaaBlock },
    props: {
        deiive: Object
    },
    computed: {
        d_type() {
            return (this.deiive) ? this.deiive.delivery_type : null
        }
    },
    methods: {
        vai_type(k) { return this.d_type ? this.d_type[k] : '' },

        vai(k, def = '') { return this.deiive ? this.deiive[k] : def },
    }
}
</script>