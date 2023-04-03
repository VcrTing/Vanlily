<template>
    <div class="card card-num h4" :class="{ 'pri_son': active, 'card-sub': !active }">
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
.card-sub
    color: #a0a0a0
    
</style>