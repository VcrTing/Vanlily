<template>
    <!-- SETP 1 -->
    {{ iog(attrs) }}
    {{ iog(attrs_for_choise) }}
    <div class="fx-l fx-wp row">
        <div class="w-333" v-for="(v, i) in attrs_for_choise" :key="i">
            <cp-prod-attr-input class="pb_x2" :attr="v" :attr_def="ioc_attr(v)"/>
        </div>
    </div>

</template>

<script>
import VarCakeName from '../../../../../front/variab/cake/VarCakeName.vue'
import UiIconInput from '../../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInput from '../../../../../funcks/ui_element/input/normal/UiInput.vue'
import CpProdAttrInput from '../../../../product/form/CpProdAttrInput.vue'
export default {
  components: { UiInput, UiIconInput, VarCakeName, CpProdAttrInput },
    props: {
        cake: Object
    },
    data() {
        return {
            form: { style: '', color: '', chis: '', weight: '', smile: '' },
            form_err: { style: false, color: false, chis: false, weight: false, smile: false },
        }
    },
    computed: {
        prod() { return this.cake ? this.cake.product : { } },
        attrs() {
            let res = this.cake ? this.cake.attribute : null
            return res ? this.strapi.view(res.data) : [ ]
        },
        attrs_for_choise() {
            let res = this.prod ? this.prod.attributes : [ ]
            return res
        }
    },
    methods: {
        ioc_attr(afc) {
            let res = { }
            this.attrs.map(e => {
                if (afc.name == e.attribute_type_name) {
                    res = e
                }
            }); return res
        },

        coii() {
            if (true) {
                return this.aiiow ? this.form : null
            }
        }
    }
}
</script>