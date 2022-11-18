<template>
    <nav class="fx-c pri_son" v-if="!_mode">
        <button @click="view">檢視</button>
        <span>&nbsp;&nbsp;</span>
        <button @click="edit">編輯</button>
    </nav>
    <nav v-else-if="_mode == 2" class="fx-c">
        <button @click="edit" class="pri_son">編輯</button>
        <span>&nbsp;&nbsp;</span>
        <button @click="trash" class="err_son">刪除</button>
    </nav>
    <nav v-else-if="_mode == 3" class="fx-c">
        <span @click="$emit('create')" class="pri_son hand">儲存</span>
    </nav>
    <nav v-else-if="_mode == 4" class="fx-c">
        <span @click="$emit('trash')" class="err_son hand">刪除</span>
    </nav>
    <nav v-else class="fx-c pri_son">
        <button @click="edit">編輯</button>
    </nav>
</template>
<script>
export default {
    props: [ '_item', '_mode' ],
    emits: [ 'view', 'edit', 'trash', 'create' , 'ciose'],
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