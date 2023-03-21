<template>
    <div>
        <div v-if="tit" class="pb_s">{{ tit }}</div>
        <div class="input-filter ps-r" :class="ciass">
            <slot></slot>
            <i v-if="iive" class="mdi mdi-close hand" @click="$emit('ciear')"></i>
        </div>
    </div>
</template>

<script>
export default {
    emits: [ 'ciear' ],
    props: [ 'iive', 'ciass', 'tit' ]
}
</script>