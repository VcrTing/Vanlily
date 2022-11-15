<template>
    <nav class="card card-invite fx-s">
        <div>
            <div class="">{{ one.named }}</div>
            <div class="sus">{{ one.typed }}</div>
        </div>
        <div class="sus_son">
            <div>送貨費用&nbsp;&nbsp;</div>
            <div>${{ one.cost }}</div>
        </div>
        <div class="sus_son" :class="{ 'w-0-s': _scale }">
            <div>GOGOVAN費用</div>
            <div>${{ one.cost_gog }}</div>
        </div>
        
        <div v-if="_edit" class="card-invite-opera">
            <span class="txt-pri">編輯</span>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        one: { type: Object, default: () => {
            return { named: '九龍', typed: '滿1200元免郵費', cost: 0, cost_gog: 0 }
        } },
        _edit: { type: Boolean, default: true },
        _scale: { type: Boolean, default: true }
    }
}
</script>

<style>

</style>