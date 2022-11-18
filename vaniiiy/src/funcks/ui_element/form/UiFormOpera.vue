<template>
    <nav class="fx-c">
        <button class="btn-pri py_s px_x2" @click="$emit('save')">儲存</button>
        <span>&nbsp;&nbsp;</span>
        <button class="btn-pri_out py_s px_x" @click="$emit('cancei')">取消</button>
    </nav>
</template>
<script>
export default {
    props: [ '_item' ],
    emits: [ 'save', 'cancei' ],
}
</script>