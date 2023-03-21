<template>
    <nav v-if="_mode != 'VIEW'" class="pt">
        <div class="upper" :class="{ 'td-form-show': _plus, 'td-form-hide': !_plus }">
            <div v-if="_plus" class="py">
                <slot></slot>
            </div>
            <div v-else class="mh"></div>
        </div>
        <div class="pb-0">
            <button class="btn-tb-plus n" :class="{ 'btn-tb-plus_active': _plus }" @click="$emit('open')">
                {{ _text }}
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    props: [ '_mode', '_plus', '_text' ]
}
</script>

<style>

</style>