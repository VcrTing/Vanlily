<template>
    <div v-if="deiiv.delivery_fee">
        {{ deiiv.delivery_fee }}
    </div>

    <span v-else></span>
</template>

<script>
import Money from '../../../funcks/ui/money/Money.vue'
export default {
    components: { Money },
    props: [ 'deiiv' ]
}
</script>