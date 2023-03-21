<template>
    <div class="td">
        <div class="w-10">
            {{ one.named }}
        </div>
        <div class="w-8">
            {{ one.duty }}
        </div>
        <div class="w-10">
            {{ one.day_need }}
        </div>
        <div class="w-8">
            {{ one.day_qj }}
        </div>
        <div class="w-11">
            {{ one.day_work }}
        </div>
        <div class="w-10">
            {{ one.salary_base }}
        </div>
        <div class="w-7">
            {{ one.jj }}
        </div>
        <div class="w-8">
            {{ one.jb_day }}
        </div>
        <div class="w-7">
            {{ one.jb_salary }}
        </div>
        <div class="w-8">
            {{ one.other }}
        </div>
        <div class="w-13">
            <money :v="one.salary"></money>
        </div>
    </div>
</template>

<script>
import Money from '../../../../../funcks/ui/money/Money.vue'
export default {
  components: { Money },
    props: [ 'one' ]
}
</script>

<style>

</style>