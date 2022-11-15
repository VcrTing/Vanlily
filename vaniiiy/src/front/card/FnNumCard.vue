<template>
    <div class="card card-num h4" :class="{ 'pri_son': active }">
        <div class="py_s">{{header}}</div>
        <h1><slot></slot></h1>
    </div>
</template>

<script>
export default {
    props: {
        header: String,
        active: Boolean
    }
}
</script>

<style lang="sass" scoped>

</style>