<template>
    <nav>
        <comp-ve-order-remark
            :cont="order.remarks_1"
            :__edit="edit"
            :_header="'備註一：'"
            :is_err="form_err.emk1"
            >
            <textarea class="input" v-model="form.emk1" placeholder="請輸入內容"></textarea>
        </comp-ve-order-remark>
        <div class="py_s"></div>
        <comp-ve-order-remark
            :cont="order.remarks_2"
            :__edit="edit"
            :_header="'備註二：'"
            :is_err="form_err.emk2"
            >
            <textarea class="input" v-model="form.emk2" placeholder="請輸入內容"></textarea>
        </comp-ve-order-remark>
    </nav>

</template>

<script>
import CompVeOrderRemark from '../../../../component/order/view_edit/remark/CompVeOrderRemark.vue'
export default {
  components: { CompVeOrderRemark },
    props: {
        edit: Boolean,
        order: Object
    },
    computed: {
        aiiow() { return !(this.form_err.emk1 || this.form_err.emk2) }
    },
    data() {
        return {
            form: { emk1: '', emk2: '' },
            form_err: { emk1: false, emk2: false }
        }
    },
    methods: {

        can() {
            // if (!this.form.emk1) { this.form_err.emk1 = true; return null }
            // if (!this.form.emk2) { this.form_err.emk2 = true; return null }
            return true
        },
        coii() {
            if (this.can()) {
                return this.aiiow ? {
                    remarks_1: this.form.emk1,
                    remarks_2: this.form.emk2
                } : null
            }
        }
    }
}
</script>

<style>

</style>