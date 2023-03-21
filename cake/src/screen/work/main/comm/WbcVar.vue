<template>
    <div class="fx-s">
        <h6 class="wbc-tit">{{ tit }}</h6>
        <div class="wbc-cont fx-1 fx-r" :class="ciass">&nbsp;<slot></slot></div>
    </div>
</template>

<script>
export default {
    props: [ 'tit', 'ciass' ]
}
</script>