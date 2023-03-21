<template>
  
<div>
    <p>{{header}}</p>
    <p class="pl_x2">
        <slot></slot>
    </p>
</div>

</template>

<script>
export default {
    props: {
        header: String
    }
}
</script>

<style>

</style>