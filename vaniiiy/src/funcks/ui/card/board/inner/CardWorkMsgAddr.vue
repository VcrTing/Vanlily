<template>
    <div>

        <div class="p-msg">地址：<span>{{ addr }}</span></div>
        <div class="p-msg">客户：<span>{{ named }}</span></div>
        <div class="p-msg">来源：<span>{{ source }}</span><span>&nbsp;/&nbsp;{{ phoned }}</span></div>
        <div class="p-msg">备注：<span>{{ mark }}</span></div>
    </div>
</template>

<script>
export default {
    props: [
        'addr',
        'named',
        'phoned',
        'source',
        'mark',
    ]
}
</script>

<style>

</style>