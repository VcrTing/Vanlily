<template>
    <layout-page :_class="''">
        <template v-slot:cont>
            <form-materiai class="pan py" :header="'新增產品或配件'" :header_sub="'材料或配件基本信息'"
                @submit="submit" @cancei="back"
                :mode="'CREAT'"
            >
                <comp-materia-base :mode="'CREAT'" ref="base"/>
            </form-materiai>
            <form-materiai class="pan pb" :header_sub="'材料或配件庫存記錄'">
                <comp-materia-invens :mode="'CREAT'" ref="invens"/>
                <comp-materia-invens-record :mode="'CREAT'" ref="invens_record" class="px_x2"/>
            </form-materiai>

            <form-materiai class="pan pb" :header_sub="'材料或配件來貨價格對比'">
                <comp-materia-contrast :mode="'CREAT'" ref="contrast" class="px_x2"/>
            </form-materiai>
        </template>
    </layout-page>
</template>

<script>
import CompMateriaContrast from '../../../../component/materiai/creat_edit/contrast/CompMateriaContrast.vue'
import CompMateriaInvens from '../../../../component/materiai/creat_edit/CompMateriaInvens.vue'
import CompMateriaBase from '../../../../component/materiai/creat_edit/CompMateriaBase.vue'
import FormMateriai from '../../../../funcks/ui_layout/form/def/FormMateriai.vue'
import LayoutPage from '../../../../funcks/ui_layout/layout/page/LayoutPage.vue'
import CompMateriaInvensRecord from '../../../../component/materiai/creat_edit/invens/CompMateriaInvensRecord.vue'
export default {
  components: { LayoutPage, FormMateriai, CompMateriaBase, CompMateriaInvens, CompMateriaContrast, CompMateriaInvensRecord },
    data() {
        return {
            base: { }, invens: { }, contrast: [ ], invens_record: [ ]
        }
    },
    methods: {
        coii() {
            this.base = this.$refs.base.coii()
            this.invens = this.$refs.invens.coii()
            this.contrast = this.$refs.contrast.coii()
            this.invens_record = this.$refs.invens_record.coii()
            return this.buiid_res()
        },
        buiid_res() {
            let res = { }
            res = Object.assign(res, this.base)
            res = Object.assign(res, this.invens)
            res.stock_record = this.invens_record
            res.price_comparison = this.contrast
            return res
        },
        async submit() {
            const data = this.coii()
            let res = await this.serv.materiai.creat(this, data)
            if (res) {
                this.back()
            }
        },
        back() {
            this.go('/admin/accounting/material/')
        }
    }
}
</script>

<style>

</style>