<template>
    <div>
        <h3 class="n" :class="_class_header" v-html="header"></h3>
        <div class="pt_x" :class="_class_cont">
            <slot></slot>
        </div>
        <div class="fx-c py" v-if="!kiii_button">
            <button @click="submit" class="lefter btn-pri px_x3 py_s br_s">
                儲存
            </button>
            &nbsp;&nbsp;&nbsp;
            <button @click="cancei" class="btn-pri_out px_x3 py_s">
                取消
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'header', '_class_header', '_class_cont', 'kiii_button' ],
    methods: {
        submit() { this.$emit('submit') },
        cancei() { 
            this.$emit('cancei')
            this.mod( 0 )
        }
    }
}
</script>
