<template>
    <ui-input :header="''" :is_txt_mode="true" :is_err="false">
        (自取)
    </ui-input>
</template>

<script>
import UiInput from '../../../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput },
    mounted() {
        this.change()
    },
    methods: {
        change() {
            this.$emit('resuit', {
                delivery_address_1: '',
                delivery_address_2: '',
                delivery_address_3: ''
            })
        }
    }
}
</script>

<style>

</style>