<template>
    <div>
        <button class="btn-pri_out py_n px_x3" @click="$emit('cancie')">取消</button>
        <span class="px_s"></span>
        <button class="btn-pri py_n px_x3" @click="$emit('save')">储存</button>
    </div>
</template>

<script>
export default {
    emits: [ 'save', 'cancie' ]
}
</script>

<style>

</style>