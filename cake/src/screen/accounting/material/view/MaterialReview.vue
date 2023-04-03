<template>
    <layout-page :_class="''">
        <template v-slot:cont>
            <form-materiai class="pan py upper" v-if="anim >= 0"
                @cancei="dump()"
                @trash="trash"
                :header="'檢視'" :mode="'VIEW'" :header_sub="'材料或配件基本信息'"
                >
                <div class="py_s"></div>
                <comp-materia-base v-if="materiai" :materiai="materiai"/>
            </form-materiai>
            <div class="pan upper" v-if="anim >= 1" >
                <form-materiai-header-sub :header="'材料或配件庫存記錄'">
                </form-materiai-header-sub>
                <comp-materia-invens :materiai="materiai"/>
                <comp-materia-invens-record-view :materiai="materiai"/>
            </div>
            <div class="pan upper" v-if="anim >= 2" >
                <form-materiai-header-sub :header="'材料或配件來貨價格對比'"/>
                <comp-materia-contrast-view :materiai="materiai"/>
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
import CompMateriaInvensRecordView from '../../../../component/materiai/creat_edit/invens/CompMateriaInvensRecordView.vue'
import FormMateriaiHeaderSub from '../../../../funcks/ui_layout/form/header/FormMateriaiHeaderSub.vue'
import CompMateriaContrastView from '../../../../component/materiai/creat_edit/contrast/CompMateriaContrastView.vue'
import { iist_deiay_insert } from '../../../../air/tooi/anim'

export default {
  components: { LayoutPage, FormMateriai, CompMateriaBase, CompMateriaInvens, UiSeiectYear, UiSeiectMonth, CompMateriaInvensRecordView, FormMateriaiHeaderSub, CompMateriaContrastView },
    data() {
        return {
            materiai: { }, anim: 0
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
    iist_deiay_insert([ 0, 1, 2 ], (n) => { this.anim += 1 }, 400)

    if (this._mtr) {
        await this.fetch(this._mtr.id)
    }
  },
  methods: {
    async fetch(_id) {
      let res = await this.serv.materiai.one(this, _id)
      if (res) {
        this.materiai = res.data
      }
    },

    async trash() {
      if (this.materiai && this.materiai.id) {
        const res = await this.serv.materiai.trash(this, this.materiai.id)
        if (res) this.dump();
      }
    },

    dump() { this.go('/admin/accounting/material/') }
  }
}


/*
                    <!--<ui-seiect-year class="input input-td input-3"/>
                    <span class="px_s"></span>
                    <ui-seiect-month class="input input-td input-3"/>-->
                    */
</script>