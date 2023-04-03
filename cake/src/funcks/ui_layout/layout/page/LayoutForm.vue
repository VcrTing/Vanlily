<template>
    <div class="pt">
        <crumbs :class="ciass">
            <slot name="top"></slot>
        </crumbs>

        <slot name="opera"></slot>

        <div class="panel-form mt px_x2 py upper">
            <h3>{{ header }}</h3>
            <slot name="cont"></slot>
        </div>
    </div>
</template>

<script>
import CollapseCardItem from '../../../ui/collapse/card/CollapseCardItem.vue'
import Collapse from '../../../ui/collapse/Collapse.vue'
import Crumbs from '../../menu/crumbs/Crumbs.vue'
export default {
    props: {
        ciass: { type: String, default: 'pl_x2' },
        header: { type: String }
    },
  components: { Crumbs, Collapse, CollapseCardItem },

}
</script>

<style lang="sass">
.panel-form
    min-height: auto !important
</style>