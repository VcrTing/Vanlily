<template>
    <div>
        <div class="pl_x2">
            <div class="fx-s pl_x2">
                <cp-oaa-block :header="'國家 / 地區'" class="w-33">
                    {{ vai('delivery_address_1') }}
                </cp-oaa-block>
                <cp-oaa-block :header="'地區'" class="w-33">
                    {{ vai('delivery_address_2') }}
                </cp-oaa-block>
                <cp-oaa-block :header="'市政 / 區域'" class="w-33">
                    {{ vai('delivery_address_3') }}
                </cp-oaa-block>
            </div>
        </div>
        <div class="py"></div>
        <div class="pl_x2 pt">
            <div class="fx-s fx-t pl_x2">
                <cp-oaa-block :header="'地址備註'" class="w-33">
                    
                </cp-oaa-block>
                <cp-oaa-block :header="'公寓、套房、單位等'" class="w-33">
                    {{ vai('delivery_address_4') }}
                </cp-oaa-block>
                <cp-oaa-block :header="'門牌號碼和街道名稱'" class="w-33">
                    {{ vai('delivery_address_5') }}
                </cp-oaa-block>
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
    methods: {
        vai(k) { return this.deiive ? this.deiive[k] : '' },
    }
}
</script>

<style>

</style>
