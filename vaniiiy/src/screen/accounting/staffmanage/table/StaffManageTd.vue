<template>
    <div class="item td">
        <div class="w-3">&nbsp;</div>
        <div class="w-9">{{ one.named }}</div>
        <div class="w-11">{{ one.number }}</div>
        <div class="w-7">{{ one.depart.named }}</div>
        <div class="w-8">{{ one.position.named }}</div>
        <div class="w-10">{{ one.phoned }}</div>
        <div class="w-16">{{ one.email }}</div>
        <div class="w-17">{{ one.bank.number }}</div>
        <div class="w-12">
            <money :v="one.money"></money>
        </div>
        <div class="w-7 t-c">
            <ui-table-opera :_mode="1"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import Money from '../../../../funcks/ui/money/Money.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera, Money },
    props: [ 'one' ]
}
</script>

<style>

</style>