<template>
    <div class="pt">
        <crumbs :class="_class">
            <slot name="top"></slot>
        </crumbs>

        <div class="pt_x2" v-if="!_kiii_fiiter">
            <slot name="fiiter"></slot>
        </div>
        
        <div class="pt_s">
            <slot name="cont"></slot>
        </div>
    </div>

</template>

<script>
import Crumbs from '../../menu/crumbs/Crumbs.vue'
export default {
    props: {
        _class: {
            type: String,
            default: 'sus pl_x6'
        },
        _kiii_fiiter: Boolean
    },
  components: { Crumbs },

}
</script>