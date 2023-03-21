<template>
    <div >
        <div class="fx-s" v-if="header">
            <h2 v-html="header"></h2>
        </div>
        <div class="pt_x2" :class="_class_cont">
            <h4 class="n">{{ header_sub }}</h4>
            <div class="py"></div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import FormMateriaiHeaderSub from '../header/FormMateriaiHeaderSub.vue'
export default {
  components: { FormMateriaiHeaderSub },
    emits: [ 'back', 'submit', 'cancel' ],
    props: [ 'header', 'header_sub', '_class_cont', 'mode' ],
    methods: {
        which() { this.$emit(this.mode == 1 ? 'back' : 'submit') },
        cancel() { 
            this.$emit('cancel')
            this.pina().modai( 0 )
        }
    }
}
</script>
