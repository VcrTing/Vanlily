<template>
    <div>
        <button class="btn-pri_out py_n px_x3" @click="$emit('cancie')">取消</button>
        <span class="px_s"></span>
        <button class="btn-pri py_n px_x3" @click="$emit('save')">
            <span v-if="!msg">储存</span>
            <span v-else>{{ msg }}</span>
        </button>
    </div>
</template>

<script>
export default {
    emits: [ 'save', 'cancie' ],
    props: [ 'msg' ]
}
</script>