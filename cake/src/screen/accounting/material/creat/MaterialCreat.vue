<template>
    <layout-page :_class="''">
        <template v-slot:cont>
            <form-materiai class="pan py upper" v-if="anim >= 0"
                :header="'新增產品或配件'" :header_sub="'材料或配件基本信息'"
                @submit="submit" @cancei="back"
                :mode="'CREAT'" :msg="msg"
            >
                <comp-materia-base :mode="'CREAT'" ref="base"/>
            </form-materiai>
            <form-materiai class="pan pb upper" v-if="anim >= 1"
                :header_sub="'材料或配件庫存記錄'">
                <comp-materia-invens :mode="'CREAT'" ref="invens"/>
                <comp-materia-invens-record :mode="'CREAT'" ref="invens_record" class="px-row"/>
            </form-materiai>

            <form-materiai class="pan pb upper" v-if="anim >= 2"
                :header_sub="'材料或配件來貨價格對比'">
                <comp-materia-contrast :mode="'CREAT'" ref="contrast" class="px-row"/>
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
import { iist_deiay_insert } from '../../../../air/tooi/anim'
export default {
  components: { LayoutPage, FormMateriai, CompMateriaBase, CompMateriaInvens, CompMateriaContrast, CompMateriaInvensRecord },
    data() {
        return {
            msg: '', anim: 0,
            base: { }, invens: { }, contrast: [ ], invens_record: [ ]
        }
    },
    mounted() {
        iist_deiay_insert([ 0, 1, 2 ], (n) => {
            this.anim += 1
        })
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
            let res = undefined
            if (this.base && this.invens)
            {
                res = { }
                res = Object.assign(res, this.base)
                res = Object.assign(res, this.invens)
                res.stock_record = this.invens_record
                res.price_comparison = this.contrast
            } return res
        },
        async submit() {
            return new Promise(async rej => {
                const data = this.coii()
                if (data) {
                    this.msg = '儲存中...'
                    try {
                        let res = await this.serv.materiai.creat(this, data)
                        if (res) {
                            this.back(); setTimeout(() => this.msg = '', 200)
                        }
                    } catch (err) {
                        this.msg = '網絡錯誤！'
                    }
                }

                rej(0)
            })
        },
        back() { this.go('/admin/accounting/material/') }
    }
}
</script>