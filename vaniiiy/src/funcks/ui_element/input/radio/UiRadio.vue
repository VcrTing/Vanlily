<template>
    <label class="fx-l pr radio-pri" @click="$emit('tap')">
        <nav class="radio" :class="{ 'radio-active': active }"></nav>
        <div class="pl hand">
            <slot></slot>
        </div>
    </label>
</template>

<script>
export default {
    props: {
        active: Boolean
    },
    emits: [ 'tap' ]
}
</script>