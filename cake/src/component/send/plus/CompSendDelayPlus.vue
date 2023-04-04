<template>
    <div class="px_x2">
        <form-def class="form-def" :header="is_plus ? '申請延遲發貨' : '修改延遲發貨'" @submit="creat_or_update">
            
            <p class="h5 pb_x pt_s">基本信息</p>
            <comp-send-view-basic ></comp-send-view-basic>
            <p class="h5 py_x">原定送貨信息</p>
            <comp-send-view-origin ></comp-send-view-origin>
            <div class="py_s"></div>
            <comp-addr-area-way></comp-addr-area-way>
            <div class="py_x2"></div>
            <p class="h5 pb_x">送貨資料修改</p>
            <comp-send-edit></comp-send-edit>
            <div class="py_s"></div>
            <comp-addr-area-way-edit></comp-addr-area-way-edit>
            <div class="py_x2"></div>

            <p class="h5 pb_x">備註</p>
            <comp-remark-edit></comp-remark-edit>
            
            <div class="py"></div>
        </form-def>

    </div>
</template>

<script>
import FormDef from '../../../funcks/ui_layout/form/def/FormDef.vue'
import CompAddrAreaWayEdit from '../../addr/eidt/CompAddrAreaWayEdit.vue'
import CompRemarkEdit from '../../comm/remark/CompRemarkEdit.vue'
import CompSendEdit from '../edit/CompSendEdit.vue'
import CompSendViewBasic from '../view/CompSendViewBasic.vue'
import CompSendViewOrigin from '../view/CompSendViewOrigin.vue'
export default {
  components: { FormDef, CompSendViewBasic, CompSendViewOrigin, CompSendEdit, CompRemarkEdit, CompAddrAreaWayEdit },
    props: {
        _mode: { type: String, default: 'PLUS' },
    },
    computed: { 
        is_plus() { return this._mode == 'PLUS' },
        // item() { return this.pina().orders[0] }
    },
    methods: {
        creat_or_update() {
            
        }
    }
}
</script>