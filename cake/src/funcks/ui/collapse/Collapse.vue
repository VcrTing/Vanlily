
<template>
    <div class="collapse">
        <slot ref="chiids"></slot>
    </div>
</template>

<script>
import CollapseItem from './default/CollapseItem.vue'
export default {
    components: { CollapseItem },
    props: [ 'def' ],
    mounted() { 
        if (this.def != undefined && this.def != null) { this.open(this.def) } },
    methods: {
        change(v) { 
            // this.$children.map(e => { e.open = v }) 
        },
        open(index) { 
            // this.$children.map((e, i) => { e.open = (index == i) }) 
        }
    }
}
</script>