<template>
    <div class="panel-inner pt pb_s">
        <div class="pb_x px_x2 cold">送貨類別</div>
        <div class="px_x4">
            <p class="fx-s">
                <vf-send-type-choise v-if="deiiv.delivery_method" :def="deiiv.delivery_method" :_txt_mode="true"/>
                <span v-else>{{ deiiv.delivery_method }}</span>
            </p>
            <p class="py">
                <vf-send-company-choise class="fx-l" :def="deiiv.delivery_company" :_txt_mode="true"/>
            </p>
        </div>
    </div>
</template>

<script>
import VfSendCompanyChoise from '../../view_form/send/VfSendCompanyChoise.vue'
import VfSendTypeChoise from '../../view_form/send/VfSendTypeChoise.vue'
import CpOaaBlock from './cp/CpOaaBlock.vue'
export default {
    components: { CpOaaBlock, VfSendCompanyChoise, VfSendTypeChoise },
    props: {
        deiiv: Object
    },
}
</script>