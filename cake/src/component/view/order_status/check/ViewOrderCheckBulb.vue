<template>
    <div :class="{ 'check-bulb-active': is_check, 'op-80 sub_son': !is_check }">
        <i class="mdi mdi-lightbulb-outline h5"></i>
    </div>
</template>
<script>
export default {
    props: [ 'is_check' ]
}
</script>