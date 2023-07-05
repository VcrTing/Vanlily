<template>
    <nav class="" v-if="!txt_mode">
        <ui-input class="w-100 py" :header="'備註一：'" :is_err="false">
            <textarea class="input" placeholder="可以不填寫" v-model="form.remarks_1"></textarea>
        </ui-input>
    </nav>
    <nav v-else>
        <p>備註一:&nbsp;&nbsp;</p>
        <div v-if="form.remarks_1">{{ form.remarks_1 }}</div>
        <span v-else class="sub">(無延遲發貨備註)</span>
    </nav>
</template>
<script>
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput },
    props: { 
        one: Object,
        _edit: Boolean,
        txt_mode: Boolean
    },
    
    data() {
        return {
            form: { remarks_1: '', remarks_2: '', },
            form_origin: { remarks_1: '', remarks_2: '', },
            form_err: { }
        }
    },
    mounted() { 
        return new Promise( rej => {
            const src = this.one.delay_delivery;
            if (src) {
                this.reset( {
                    remarks_1: src.remarks
                } )
            } else {
                this.reset( {
                    remarks_1: this.one.remarks_1
                } )
            }

            rej(0)
        })
    },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } } },
        coii() {
            for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } }
            delete this.form.id
            return this.form
        },
    }
}
</script>