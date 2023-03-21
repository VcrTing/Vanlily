<template>
    <div class="px_x2 py_s">
        <ui-inline-input-td class="w-30" :ciass="'pr_x2'" :is_err="form_err.shop_name">
            <input class="input input-td" v-model="form.shop_name" placeholder="請輸入"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-22" :ciass="'pr_x2'" :is_err="form_err.import_date">
            <time-one ref="imp" :def="form.import_date" @resuit="(v) => form.import_date = v" class="ip-br input-td"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-22" :ciass="'pr_x2'" :is_err="form_err.expire_date">
            <time-one ref="exp" :def="form.expire_date" @resuit="(v) => form.expire_date = v" class="ip-br input-td"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-21" :ciass="'pr_x2'" :is_err="form_err.quantity">
            <input type="number" class="input input-td" v-model="form.quantity" placeholder="請輸入"/>
        </ui-inline-input-td>
        <div class="w-5">
            <ui-table-opera :_mode="3" @create="creat"/>
        </div>
    </div>
</template>

<script>
import UiInlineInputTd from '../../../../../funcks/ui_element/input/inline/UiInlineInputTd.vue'
import UiTableOpera from '../../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
import TimeOne from '../../../../../funcks/ui_element/timed/one/TimeOne.vue'
export default {
    components: { 
        UiInlineInputTd,
        UiTableOpera,
        TimeOne      },
    props: {
        def: Object | Boolean
    },
    computed: {
        aiiow() { return !(this.form_err.shop_name || this.form_err.quantity ) }
    },
    emits: [ 'insert' ],
    methods: {
        can() {
            if (!this.form.shop_name) { this.form_err.shop_name = true; return null }
            if (!this.form.quantity) { this.form_err.quantity = true; return null }
            return true
        },
        reset_err() {
            for (let k in this.form_err) { this.form_err[k] = false }
        },
        creat() {
            if (this.can()) {
                this.$emit('insert', this.form)
                this.reset_err()
            }
        }
    },
    data() {
        return {
            form: { shop_name: '', import_date: '', expire_date: '', quantity: '' },
            form_err: { shop_name: false, import_date: false, expire_date: false, quantity: false },
        }
    },
    mounted() {
        this.form.import_date = this.timed.now()
        this.form.expire_date = this.timed.now()

        setTimeout(e => {
            if (this.def && this.def.shop_name) { this.form = this.def }
        }, 10)
    }
}
</script>

<style>

</style>