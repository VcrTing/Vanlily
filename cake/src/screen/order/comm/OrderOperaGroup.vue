<template>
    <div class="">
        <button class="btn-pri_iht px py_t br_s" @click="creatCopy">創建副本</button>
    </div>
</template>

<script>
export default {
    props: [ 'one' ],
    methods: {
        creatCopy() {
            console.log('創建副本 =', this.one)
        }
    }
}
</script>