<template>
    <div class="td">
        <div class="w-12">
            HKD&nbsp;<money :v="one.come_cost"></money>
        </div>
        <div class="w-8">
            <money :v="one.pifa_cost"></money>
        </div>
        <div class="w-8">
            <money :v="one.price"></money>
        </div>
        <div class="w-8">
            <money :v="one.lirun"></money>
        </div>

        <div class="w-11">
            {{ one.store }}
        </div>
        <div class="w-8">
            {{ one.week }}
        </div>
        <div class="w-18 pr_s">
            {{ one.addr }}
        </div>
        <div class="w-6">
            {{ one.moq }}
        </div>

        <div class="w-10">
            {{ one.phoned }}
        </div>
        <div class="w-11">
            {{ one.date }}
        </div>
    </div>
</template>

<script>
import Money from '../../../../../funcks/ui/money/Money.vue'
export default {
  components: { Money },
    props: [ 'one' ],
    data() {
        return {
        }
    }
}
</script>

<style>

</style>