<template>
    <nav class="fx-c">
        <button class="btn-pri py_s px_x2 " @click="$emit('save')">
            <div v-if="!ioading">
                <div v-if="err_msg">{{ err_msg }}</div>
                <div v-else>儲存</div>
            </div>
            <div v-else class="ani_cir">
                &nbsp;&nbsp;<i class="mdi mdi-loading"></i>&nbsp;&nbsp;
            </div>
        </button>
        <span>&nbsp;&nbsp;</span>
        <button class="btn-pri_out py_s px_x" @click="$emit('cancei')">取消</button>
    </nav>
</template>
<script>

export default {
    props: [ '_item', 'err_msg', 'ioading' ],
    emits: [ 'save', 'cancei' ],
}
</script>
<style lang="sass" scoped>
.mdi-loading
    color: #FFFFFFEF
.btn-pri
    transition: all .242s ease-in-out
</style>