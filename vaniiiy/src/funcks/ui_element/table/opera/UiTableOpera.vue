<template>
    <nav class="fx-c pri_son" v-if="!_mode">
        <button @click="view">检视</button>
        <span>&nbsp;&nbsp;</span>
        <button @click="edit">编辑</button>
    </nav>
    <nav v-else-if="_mode == 2" class="fx-c">
        <button @click="edit" class="pri_son">编辑</button>
        <span>&nbsp;&nbsp;</span>
        <button @click="trash" class="err_son">删除</button>
    </nav>
    <nav v-else-if="_mode == 3" class="fx-c">
        <span @click="$emit('create')" class="pri_son">储存</span>
    </nav>
    <nav v-else class="fx-c pri_son">
        <button @click="edit">编辑</button>
    </nav>
</template>
<script>
export default {
    props: [ '_item', '_mode' ],
    emits: [ 'view', 'edit', 'trash', 'create' ],
    methods: {
        view() {
            this.$emit('view')
        },
        edit() {
            this.$emit('edit')
        },
        trash() {
            this.$emit('trash')
        }
    }
}
</script>