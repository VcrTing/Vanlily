<template>
    <div>
        <ui-input class="w-618" :is_err="false" :header="'款式：'">
            <div class="ps-r input input-txt-mode">
                <div class=" fx-l">
                    <button @click="open = !open" class="cake-picker-trig" :class="{ 'cake-picker-trig-active': choised }">
                        <span class="mdi mdi-filter-variant"></span>
                    </button>
                    <div class="d-ib pl_x2">
                        <fk-cake-avatar-name :cake="cake_choise"/>
                    </div>
                </div>
                <div>
                    <fk-cake-picker-menu @resuit="recive" :open="open" class="w-100 mt"/>
                </div>
            </div>
        </ui-input>
    </div>
</template>

<script>
import FkCakePickerMenu from '../../../../../funcks/product/FkCakePickerMenu.vue'
import FkCakeAvatarName from '../../../../../funcks/product/view/FkCakeAvatarName.vue'
import UiInput from '../../../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput, FkCakePickerMenu, FkCakeAvatarName },
    props: {
        def: String,
    },
    data() {
        return {
            named: '', named_choised: '', cake_choise: { },
            open: false, choised: false
        }
    },
    mounted() {
        this.named = this.def
    },
    computed: {
        products() { return this.productPina().products },
    },
    watch: {
        named(n, o) {
            if (this.named_choised) {
                if ((n + '').trim() != this.named_choised) {
                    this.choised = false
                }
            }
        },
        cake_choise(n, o) { this.$emit('choise', n) }
    },
    methods: {
        coii() {
            return this.named
        },
        _named(src) {
            let res = src ? src.translation : null; res = res ? res['zh-hant'] : null
            return res ? res.name : ''
        },
        recive(ck) {
            this.cake_choise = ck
            this.named_choised = this._named(ck)
            this.named = this._named(ck)
            this.choised = true
            this.open = false
        }
    }
}
</script>

<style>

</style>