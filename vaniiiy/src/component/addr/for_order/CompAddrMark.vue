<template>
    <div>
            <div class="pl_x2">
                <div class="fx-s pl_x2">
                    <cp-oaa-block :header="'地區線路'" class="w-33">
                        {{ vai_type('region') }}
                    </cp-oaa-block>
                    <cp-oaa-block :header="'地鐵站'" class="w-33">
                        {{ vai_type('district') }}
                    </cp-oaa-block>
                    <cp-oaa-block :header="'備註例如地鐵站出口(不出站計算)'" class="w-33">
                        {{ vai_type('address') }}
                    </cp-oaa-block>
                </div>
            </div>
            <div class="py"></div>
            <div class="fx-s fx-t pt">
                <div class="w-32">
                    <p class="sub">運費對比</p><p class="pl_x2">&nbsp;</p>
                </div>
                <div class="w-28">
                    <p>客付運費價格</p>
                    <p class="py">
                        <span>$</span>
                        &nbsp;&nbsp;&nbsp;
                        <span class="h5">120</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>HKD</span>
                    </p>
                </div>
                <div class="w-45 pri_son">
                    <p>Vanlily Cake 付運費價格</p>
                    <p class="py">
                        <span>$</span>
                        &nbsp;&nbsp;&nbsp;
                        <span class="h5">120</span>
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
        vai(k) { return this.deiive ? this.deiive[k] : '' },
    }
}
</script>

<style>

</style>