<template>
    <!--<input type="checkbox" :id="'check_box_' + $.uid" class="checked" v-model="now"/>-->
    <div class="_checkbox" :id="'check_box_' + $.uid" :class="{ 'checkbox-active': now }"></div>
    <label class="hand" :for="'check_box_' + $.uid" @click="now = !now">&nbsp;{{ txt }}</label>
</template>

<script>
export default {
    props: {
        txt: String,
        def: Boolean
    },
    mounted() {
        this.now = this.def ? this.def : false
    },
    data() {
        return {
            now: false
        }
    }
}
</script>

<style>

</style>