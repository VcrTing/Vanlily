<template>
    <nav class="fx-c pri_son">
        <button @click="$emit('save')">儲存</button>
        <span>&nbsp;&nbsp;</span>
        <button @click="$emit('cancei')">取消</button>
    </nav>
</template>
<script>
export default {
    props: [ '_item' ],
    emits: [ 'save', 'cancei' ],
}
</script>