<template>
    <div >
        <div class="fx-s pt_s px_x2" v-if="header">
            <h2 v-html="header"></h2>

            <div class="fx-r py_s">
                <button @click="cancel" class="btn-err px_x3 py_s">
                    删除
                </button>
                &nbsp;&nbsp;&nbsp;
                <button @click="which" class="btn-pri px_x3 py_s">
                    <span v-if="mode == 1">返回</span>
                    <span v-else>儲存</span>
                </button>
            </div>
        </div>
        <div class="pt" :class="_class_cont">
            <form-materiai-header-sub v-if="header_sub" :header="header_sub"></form-materiai-header-sub>
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
