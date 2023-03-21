<template>
    <div class="fx-s">
        <div class="w-50 fx-l">
            <div class="d-ib tid" v-html="header"></div>
            <slot name="tit"></slot>
        </div>
        <div class="w-50 fx-r">
            <slot name="cont"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'header' ]
}
</script>