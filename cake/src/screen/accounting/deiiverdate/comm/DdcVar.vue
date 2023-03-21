<template>
    <p>
        <span>{{ tit }}:&nbsp;&nbsp;</span>
        <span class="n">
            <slot></slot>
        </span>
    </p>
</template>

<script>
export default {
    props: [ 'tit' ]
}
</script>