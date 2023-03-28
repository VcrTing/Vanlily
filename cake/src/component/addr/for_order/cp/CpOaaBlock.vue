<template>
  
<div>
    <p class="cold">{{header}}</p>
    <p class="pl-2em">
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