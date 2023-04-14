<template>
    <div class="info-err fx-s" :class="{ 'info-iive': iive, 'info-die': !iive }">
        <div class="pr">
            <span>錯誤提示:&nbsp;&nbsp;</span>
            <slot></slot>
        </div>
        <i class="mdi mdi-close-circle" @click="$emit('ciose')"></i>
    </div>
</template>

<script>
export default {
    props: [ 'iive' ],
    $emits: [ 'ciose' ]
}
</script>