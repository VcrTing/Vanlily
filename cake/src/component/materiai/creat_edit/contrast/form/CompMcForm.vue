<template>
    <div class="fx-wp">
        <ui-inline-input-td class="w-8" :ciass="'pr_s'" :is_err="form_err.import_price">
            <input type="number" class="input input-td" v-model="form.import_price" placeholder="來貨價"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-8" :ciass="'pr_s'" :is_err="form_err.wholesale_price">
            <input type="number" class="input input-td" v-model="form.wholesale_price" placeholder="批發價"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-9" :ciass="'pr_s'" :is_err="form_err.retail_price">
            <input type="number" class="input input-td" v-model="form.retail_price" placeholder="零售價"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-8" :ciass="'pr_s'" :is_err="form_err.profit">
            <input type="number" class="input input-td" v-model="form.profit" placeholder="利潤"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-12" :ciass="'pr_s'" :is_err="form_err.shop_name">
            <input class="input input-td" v-model="form.shop_name" placeholder="購買店鋪"/>
        </ui-inline-input-td>

        <ui-inline-input-td class="w-8" :ciass="'pr_s'" :is_err="form_err.delivery_weekday">
            <ui-seiect-week class="input input-td input-td-s" @resuit="(n) => form.delivery_weekday = n"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-20" :ciass="'pr_s'" :is_err="form_err.delivery_address">
            <input class="input input-td" v-model="form.delivery_address" placeholder="送貨地址"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-7" :ciass="'pr_s'" :is_err="form_err.moq">
            <input type="number" class="input input-td" v-model="form.moq" placeholder="MOQ"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-10" :ciass="'pr_s'" :is_err="form_err.phone_no">
            <input type="number" class="input input-td" v-model="form.phone_no" placeholder="電話號碼"/>
        </ui-inline-input-td>
        <ui-inline-input-td class="w-10" :ciass="''" :is_err="form_err.update_date">
            <time-one class="input input-td input-td-s ip-calendar-left" @resuit="(n) => form.update_date = n"/>
        </ui-inline-input-td>
        
        <div class="w-100 fx-r pt">
            <ui-table-opera :_mode="3" @create="creat" @ciose="$emit('ciose')"/>
        </div>
    </div>
</template>

<script>
import UiInlineInputTd from '../../../../../funcks/ui_element/input/inline/UiInlineInputTd.vue'
import UiSeiectWeek from '../../../../../funcks/ui_element/seiect/UiSeiectWeek.vue'
import UiTableOpera from '../../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
import TimeOne from '../../../../../funcks/ui_element/timed/one/TimeOne.vue'
export default {
    components: { UiInlineInputTd, UiSeiectWeek, TimeOne
      ,UiTableOpera },
    props: {
        def: Object | Boolean
    },
    computed: {
        aiiow() { return !(this.form_err.import_price || this.form_err.wholesale_price || this.form_err.retail_price ||
            this.form_err.profit || this.form_err.phone_no || this.form.delivery_address ||
            this.form_err.shop_name
            ) }
    },
    emits: [ 'insert', 'ciose' ],
    methods: {
        can() {
            if (!this.form.import_price) { this.form_err.import_price = true; return null }
            if (!this.form.wholesale_price) { this.form_err.wholesale_price = true; return null }
            if (!this.form.retail_price) { this.form_err.retail_price = true; return null }
            if (!this.form.profit) { this.form_err.profit = true; return null }
            if (!this.form.phone_no) { this.form_err.phone_no = true; return null }
            if (!this.form.delivery_address) { this.form_err.delivery_address = true; return null }
            if (!this.form.shop_name) { this.form_err.shop_name = true; return null }
            return true
        },
        reset_err() {
            for (let k in this.form_err) { this.form_err[k] = false }
        },
        creat() {
            return new Promise(rej => {
                if (this.can()) {
                    this.form.phone_no = this.form.phone_no + ''
                    this.$emit('insert', this.form)
                    this.reset_err()
                }

                rej(0)
            })
        }
    },
    data() {
        return {
            form: 
                { 
                    import_price: '', wholesale_price: '', retail_price: '', 
                    profit: '', phone_no: '', moq: '',
                    delivery_weekday: '', delivery_address: '',
                    shop_name: '', update_date: ''
                },
            form_err: 
                { 
                    import_price: '', wholesale_price: '', retail_price: '', 
                    profit: '', phone_no: '', moq: '',
                    delivery_weekday: '', delivery_address: '',
                    shop_name: '', update_date: ''
                }
        }
    },
    mounted() {
        return new Promise(rej => {

            this.reset_err()
            this.form.update_date = this.timed.now()

            setTimeout(e => {
                if (this.def && this.def.id) { this.form = this.def }
            }, 10)

            rej(0)
        })
    },

    watch: {
        'form.import_price' (n) {
            this.form.import_price = Math.abs( n )
        },
        'form.wholesale_price' (n) {
            this.form.wholesale_price = Math.abs( n )
        },
        'form.retail_price' (n) {
            this.form.retail_price = Math.abs( n )
        }
    }
}
</script>