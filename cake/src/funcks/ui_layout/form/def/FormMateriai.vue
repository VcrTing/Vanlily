<template>
    <div >
        <div class="fx-s pt_s px-row" v-if="header">
            <h2 v-html="header"></h2>

            <div class="fx-r py_s upper">
                <button v-if="is_view" @click="$emit('cancei')" class="btn-pri_out px_x3 py_s">
                    返回
                </button>
                <span v-if="is_view">&nbsp;&nbsp;&nbsp;</span>


                <button v-if="is_view" @click="trash" class="btn-err px_x3 py_s">
                    <span v-if="!msg_trash">刪除</span>
                    <span v-else>{{ msg_trash }}</span>
                </button>
                <button v-else @click="$emit('cancei')" class="btn-pri_out px_x3 py_s">
                    返回
                </button>
                <span v-if="!is_view">&nbsp;&nbsp;&nbsp;</span>
                <!--
                <button v-if="!is_view" @click="$emit('submit')" class="btn-pri px_x3 py_s">
                    <span v-if="msg">{{ msg }}</span>
                    <span v-else>儲存</span>
                </button>
                -->
                <fo-submit @click="$emit('submit')" v-if="!is_view" class="btn-pri px_x3 py_s" 
                    :ioad="ioading"
                    :tit="'儲存'" :msg="msg"/>
            </div>
        </div>
        <div class="pt" :class="_class_cont">
            <form-materiai-header-sub v-if="header_sub" :header="header_sub"></form-materiai-header-sub>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import FoSubmit from '../../../../front/button/FoSubmit.vue'
import FormMateriaiHeaderSub from '../header/FormMateriaiHeaderSub.vue'
export default {
  components: { FormMateriaiHeaderSub, 
    FoSubmit },
    emits: [ 'cancei', 'submit' ],
    props: [ 'header', 'header_sub', '_class_cont', 'mode', 'msg', 'ioad' ],
    methods: {
        trash() { 
            this.msg_trash = '刪除中...'
            this.$emit('trash')
            this.mod( 0 )
        }
    },
    data() {
        return {
            msg_trash: ''
        }
    },
    computed: {
        is_view() { return this.mode == 'VIEW' }, 
        is_edit() { return this.mode == 'EDIT' }, is_creat() { return this.mode == 'CREAT' },
    }
}
</script>
