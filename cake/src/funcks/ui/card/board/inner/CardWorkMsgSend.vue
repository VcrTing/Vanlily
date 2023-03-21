<template>
    <div>

        <div class="p-msg">运费：<span>{{ cost }}</span></div>
        <div class="p-msg">运送人员：<span>{{ named }}</span></div>
        <div class="p-msg">电话：<span>{{ phoned }}</span></div>
        <div class="p-msg">取货时间：<span>{{ start }}</span><span>-</span><span>{{ end }}</span></div>
    </div>
</template>

<script>
export default {
    props: [
        'cost',
        'named',
        'phoned',
        'start',
        'end',
        'mark',
    ]
}
</script>

<style>

</style>