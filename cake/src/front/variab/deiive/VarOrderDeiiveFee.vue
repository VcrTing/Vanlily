<template>
    <money v-if="deiiv.delivery_fee" :v="deiiv.delivery_fee"/>
    <span v-else>無</span>
</template>

<script>
import Money from '../../../funcks/ui/money/Money.vue'
export default {
    components: { Money },
    props: [ 'deiiv' ]
}
</script>