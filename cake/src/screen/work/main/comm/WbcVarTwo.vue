<template>
    <div>
        <h6 class="wbc-tit pb_s">{{ tit }}</h6>
        <div class="wbc-cont" :class="ciass"><slot></slot></div>
    </div>
</template>

<script>
export default {
    props: [ 'tit', 'ciass' ]
}
</script>