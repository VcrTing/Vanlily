<template>
    <div class="panel-inner pt pb_s">
        <div class="pb_x px_x2 cold">送貨類別</div>
        <div class="px_x4">
            <p class="fx-s">
                <vf-send-type-choise 
                    v-if="deiiv.delivery_method" 
                    :def="deiiv.delivery_method" 
                    @resuit="(n) => { form.delivery_method = n.v; }"
                    :_txt_mode="_txt_mode"/>
                <span v-else>{{ deiiv.delivery_method }}</span>
            </p>
            <div class="py">
                <div v-if="typed" class="sus pl_x2">({{ typed }})</div>
                <vf-send-company-choise 
                    v-else 
                    class="fx-l" 
                    :def="deiiv.delivery_company" 
                    @resuit="(n) => { form.delivery_company = n.v; }"
                    :_txt_mode="_txt_mode"/>
            </div>
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
        deiiv: Object,
        _txt_mode: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            form: { delivery_method: '', delivery_company: '' }
        }
    },
    computed: {
        typed() {
            const src = this.deiiv.delivery_method + ''
            if ((src.endsWith('自取') || src.startsWith('自取'))) { return '自取' }
            if ((src.endsWith('屯門') || src.startsWith('屯門'))) { return '屯門站' }
            return null
        }
    },
    methods: {
        coii() {
            return this.form
        }
    }
}
</script>