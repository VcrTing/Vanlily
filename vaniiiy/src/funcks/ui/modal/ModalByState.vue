<template>
    <div class="modal" :class="{ 'modal-active': open }">
        <div class="modal-hui" @click="change"></div>
        
        <div class="modal-center">
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return { def: -1 }
    },
    mounted() { this.def = this.pina().MODAL },
    computed: {
        index() { return this.pina().MODAL },
        open() { return ( this.index > 0 ) }
    },
    watch: {
        open(n, o) { }
    },
    methods: {
        change() {
            this.mod(this.open ? 0 : this.def)
        }
    }
}
</script>