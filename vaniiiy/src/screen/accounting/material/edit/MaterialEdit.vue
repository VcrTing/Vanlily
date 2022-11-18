<template>
    <layout-page :_class="''">
        <template v-slot:cont>
            <form-materiai class="pan py" 
                @submit="submit" @cancei="back"
                :header="'編輯'" :mode="'EDIT'" :header_sub="'材料或配件基本信息'">
                <div class="py_s"></div>
                <comp-materia-base ref="base" v-if="materiai.id" :materiai="materiai" :mode="'EDIT'"/>
            </form-materiai>
            <div class="pan">
                <form-materiai-header-sub :header="'材料或配件庫存記錄'">
                    <!--<ui-seiect-year class="input input-td input-3"/>
                    <span class="px_s"></span>
                    <ui-seiect-month class="input input-td input-3"/>-->
                </form-materiai-header-sub>
                <comp-materia-invens ref="invens" v-if="materiai.id" :materiai="materiai" :mode="'EDIT'"/>
                <comp-materia-invens-record ref="invens_record" class="px_x2" v-if="materiai.id" :materiai="materiai" :mode="'EDIT'"/>
            </div>
            <!-- -->
            <div class="pan">
                <form-materiai-header-sub :header="'材料或配件來貨價格對比'"/>
                <comp-materia-contrast ref="contrast" class="px_x2" v-if="materiai.id" :materiai="materiai" :mode="'EDIT'"/>
            </div>
        </template>
    </layout-page>
</template>

<script>
import CompMateriaInvens from '../../../../component/materiai/creat_edit/CompMateriaInvens.vue'
import CompMateriaBase from '../../../../component/materiai/creat_edit/CompMateriaBase.vue'
import FormMateriai from '../../../../funcks/ui_layout/form/def/FormMateriai.vue'
import LayoutPage from '../../../../funcks/ui_layout/layout/page/LayoutPage.vue'
import UiSeiectYear from '../../../../funcks/ui_element/seiect/UiSeiectYear.vue'
import UiSeiectMonth from '../../../../funcks/ui_element/seiect/UiSeiectMonth.vue'
import CompMateriaInvensRecord from '../../../../component/materiai/creat_edit/invens/CompMateriaInvensRecord.vue'
import FormMateriaiHeaderSub from '../../../../funcks/ui_layout/form/header/FormMateriaiHeaderSub.vue'
import CompMateriaContrast from '../../../../component/materiai/creat_edit/contrast/CompMateriaContrast.vue'
export default {
  components: { LayoutPage, FormMateriai, CompMateriaBase, CompMateriaInvens, UiSeiectYear, UiSeiectMonth, CompMateriaInvensRecord, FormMateriaiHeaderSub, CompMateriaContrast },
    data() {
        return {
            materiai: { }
        }
    },
    computed: {
        _mtr() {
            return this.otherPina().materiai_access
        }
    },
    watch: {
        _mtr(n, o) { this.fetch(n.id) }
    },
    async mounted() {
        if (this._mtr) {
            await this.fetch(this._mtr.id)
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
            let res = await this.serv.materiai.edit(this, data, this.materiai.id)
            console.log('res =', res)
            if (res) {
                this.back()
            }
        },
        back() {
            this.go('/admin/accounting/material/')
        },
        async fetch(_id) {
            let res = await this.serv.materiai.one(this, _id)
            if (res) {
                this.materiai = res.data
                console.log(this.materiai)
            }
        }
    }
}
</script>

<style>

</style>