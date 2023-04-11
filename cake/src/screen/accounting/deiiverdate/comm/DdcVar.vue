<template>
    <div class="pb fx-l fx-t">
        <div>{{ tit }}:&nbsp;&nbsp;</div>
        <div class="n d-ib fx-1">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'tit' ]
}
</script>