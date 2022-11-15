<template>
    <div class="pt">
        <crumbs class="pl_x6">
            <slot name="top"></slot>
        </crumbs>

        <collapse>
            <collapse-card-item :open="_collapse">
                <template v-slot:tit>
                    <div class="fx-s w-100" :class="_class">
                        <div class="w-75">
                            <slot name="filter"></slot>
                        </div>
                        <div class="w-25 t-r">
                            <slot name="opera"></slot>
                        </div>
                    </div>
                </template>
                <template v-slot:cont>
                    <div>
                        <slot name="center"></slot>
                    </div>
                </template>
            </collapse-card-item>
        </collapse>

        <slot name="cont"></slot>
    </div>

</template>

<script>
import CollapseCardItem from '../../../ui/collapse/card/CollapseCardItem.vue'
import Collapse from '../../../ui/collapse/Collapse.vue'
import Crumbs from '../../menu/crumbs/Crumbs.vue'
export default {
    props: {
        _class: {
            type: String,
            default: 'w-unf-r'
        },
        _collapse: {
            type: Boolean,
            default: false
        }
    },
  components: { Crumbs, Collapse, CollapseCardItem },

}
</script>

<style>

</style>