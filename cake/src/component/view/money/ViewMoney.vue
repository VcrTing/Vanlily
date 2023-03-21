<template>
    <div class="d-ib">
        <span class="pr_t">$</span><span v-if="_float"><money :v="money"></money></span>
        <span v-else>{{ money }}</span><span>&nbsp;HKD</span>
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

<style>

</style>