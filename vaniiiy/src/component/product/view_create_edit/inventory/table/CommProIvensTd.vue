<template>
    <div class="td">
        <div class="w-18">
            {{ one.store.named }}
        </div>
        <div class="w-15">
            {{ one.come_date }}
        </div>
        <div class="w-10">
            {{ one.color }}
        </div>
        <div class="w-11">
            {{ one.num }}
            <span class="err">
                ({{ one.num_change }})
            </span>
        </div>
        <div class="w-9">
            {{ one.used }}
        </div>
        <div class="w-9">
            {{ one.bad }}
        </div>
        <div class="w-15">
            {{ one.issue_date }}
        </div>
        <div class="w-13 t-c">
            <span class="pri hand">操作</span>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'one' ]
}
</script>

<style>

</style>