<template>
        <label class="w-50 fx-l fx-t pr_x" @click="$emit('tap')">
            <nav class="radio" :class="{ 'radio-active': active }"></nav>
            <div class="pl_x hand">
                <slot></slot>
            </div>
        </label>
</template>

<script>
export default {
    props: [ 'active' ]
}
</script>