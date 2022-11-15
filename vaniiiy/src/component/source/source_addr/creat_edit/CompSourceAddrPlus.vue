<template>
    <div class="px_x2">
        <form-def :header="is_plus ? '新增自取地點' : '修改自取地點'" @submit="creat_or_update">
            <div class="fx-l">
                <ui-inline-input class="w-80" :header="'名稱：'" :is_err="named_err">
                    <input class="input input-sus br_s input-long" type="text" placeholder="請輸入"
                        v-model="named" @keydown.enter="creat_or_update"
                    >
                </ui-inline-input>
                <div class="w-20"></div>
            </div>
        </form-def>
    </div>
</template>

<script>
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import FormDef from '../../../../funcks/ui_layout/form/def/FormDef.vue'
export default {
  components: { FormDef, UiInlineInput },
    props: {
        _mode: { type: String, default: 'PLUS' },
        def: { type: Object, default: null }
    },
    data() {
        return {
            id: 0,
            named: '',
            named_err: null
        }
    },
    mounted() { if (this.def) { this.named = this.def.named; this.id = this.def.id } },
    computed: { 
        is_plus() { return this._mode == 'PLUS' },
    },
    watch: {
        named(n, o) {
            this.named_err = !this.vid.input.vid_named(n)
        }
    },
    methods: {
        _build() { return { named: this.named } },

        async doing(way, data) { 
            let res = await this.serv.addr[ way ](this, data) 
            if (res) {
                console.log('處理添加 / 修改成功')
            }
        },

        async creat_or_update() {
            if (!this.named_err && this.named) {
                let res = this._build()
                res = await this.is_plus ? 
                    this.doing('creat', res): 
                    this.doing('update', res)
            }
        }
    }
}
</script>

<style>

</style>