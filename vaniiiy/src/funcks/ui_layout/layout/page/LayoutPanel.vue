<template>
    <div class="pt">
        <crumbs class="pl_x2">
            <slot name="top"></slot>
        </crumbs>
        
        <div class="card card-page">
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
            default: 'w-unf-r'
        }
    },
  components: { Crumbs },

}
</script>

<style>

</style>