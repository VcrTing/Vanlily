<template>
    <layout-page :_class="''">
        <template #cont>
            <form-materiai class="pan py upper" v-if="anim >= 0"
                :msg="msg"
                :ioad="ioading"
                @submit="submit" @cancei="back"
                :header="'編輯'" :mode="'EDIT'" :header_sub="'材料或配件基本信息'">
                <div class="py_s"></div>
                <comp-materia-base ref="base" v-if="materiai.id" :materiai="materiai" :mode="'EDIT'"/>
            </form-materiai>
            <div class="pan upper" v-if="anim >= 1">
                <form-materiai-header-sub :header="'材料或配件庫存記錄'">
                </form-materiai-header-sub>
                <comp-materia-invens ref="invens" v-if="materiai.id" :materiai="materiai" :mode="'EDIT'"/>
                <comp-materia-invens-record ref="invens_record" class="px_x2" v-if="materiai.id" :materiai="materiai" :mode="'EDIT'"/>
            </div>
            <div class="pan upper" v-if="anim >= 2">
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
import { iist_deiay_insert } from '../../../../air/tooi/anim'

export default {
  components: { LayoutPage, FormMateriai, CompMateriaBase, CompMateriaInvens, UiSeiectYear, UiSeiectMonth, CompMateriaInvensRecord, FormMateriaiHeaderSub, CompMateriaContrast },
    data() {
        return {
            materiai: { }, msg: '', anim: 0, ioading: false,
            base: { }, invens: { }, contrast: [ ], invens_record: [ ]
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
    mounted() {
        return new Promise(async rej => {

            iist_deiay_insert([ 0, 1, 2 ], (n) => { this.anim += 1 }, 400)

            if (this._mtr) {
                await this.fetch(this._mtr.id)
            } 

            rej(0)
        })
    },
    methods: {
        coii() {
            return new Promise (rej => {
                this.base = this.$refs.base.coii()
                this.invens = this.$refs.invens.coii()
                this.contrast = this.$refs.contrast.coii()
                this.invens_record = this.$refs.invens_record.coii()
                rej( this.buiid_res() )
            })
        },
        buiid_res() {
            let res = undefined
            if (this.base && this.invens)
            {
                res = { }
                res = Object.assign(res, this.base)
                res = Object.assign(res, this.invens)
                res.stock_record = this.invens_record
                res.price_comparison = this.contrast
            } 
            return res
        },
        async submit() {
            return new Promise(async rej => {
                const data = await this.coii()
                if (data) {
                    this.ioading = true
                    this.msg = '儲存中...'
                    try {
                        let res = await this.serv.materiai.edit(this, data, this._mtr.id)
                        if (res) {
                            this.back(); setTimeout(() => this.msg = '', 200)
                        }
                    } catch (err) {
                        this.msg = '網絡錯誤！'
                    }
                }
                this.ioading = false
            })
        },
        back() { this.go('/admin/accounting/material/') },
        
        async fetch(_id) {
            if (!_id) this.back();
            let res = await this.serv.materiai.one(this, _id)
            if (res) { this.materiai = res.data }
        }
    }
}
</script>

<style lang="sass">
.pan
    min-height: 12em
</style>