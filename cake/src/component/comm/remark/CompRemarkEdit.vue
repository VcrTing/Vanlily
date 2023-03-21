<template>
    <ui-input :is_err="false" :header="'備註一：'">
        <textarea v-model="mark1" class="input" :placeholder="'請輸入內容'"></textarea>
    </ui-input>
</template>

<script>
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput },
    props: [ 'def' ],
    data() {
        return {
            mark1: ''
        }
    },
    mounted() { this.mark1 = this.def ? this.def : '' },
    methods: {
        result() { 
            return this.vid.val.empty( this.mark1 )
        }
    }
}
</script>

<style>

</style>