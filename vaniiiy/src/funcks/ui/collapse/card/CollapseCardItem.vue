<template>
    <nav class="collapse-item collapse-card-item" :class="{ 'collapse-active': open }">
        <button>
            <slot name="tit"></slot>
        </button>
        <div :class="{ 'collapse-card-active': open }">
            <slot name="cont"></slot>
        </div>
    </nav>
</template>
<script>
export default {
    props: [ 'open' ],
}
</script>
<style lang="sass" scoped>
.collapse-active
    & > div
        max-height: 160em
</style>