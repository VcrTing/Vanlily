<template>
    <div class="d-ib">
        <span class="pr_t">$</span><span v-if="!_float"><money :v="money" v-if="money"/><span v-else>0</span></span>
        <span v-else>{{ money ? money : 0 }}</span><span>&nbsp;HKD</span>
    </div>
</template>

<script>
import Money from '../../../funcks/ui/money/Money.vue'
export default {
  components: { Money },
    props: [
        'money',
        '_float'
    ]
}
</script>