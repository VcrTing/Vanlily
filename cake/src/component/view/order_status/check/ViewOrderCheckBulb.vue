<template>
    <div :class="{ 'check-bulb-active': is_check, 'op-80 sub_son': !is_check }">
        <i class="mdi mdi-lightbulb-outline h5" v-if="!is_check"></i>
        <i class="mdi mdi-lightbulb h5" v-else></i>
    </div>
</template>
<script>
export default {
    props: [ 'is_check' ]
}
</script>