<template>
    <div class="modal" :class="{ 'modal-active': open, 'modal-ciose': !open }">
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
        open() { return ( this.pina().MODAL > 0 ) }
    },
    methods: {
        change() { this.mod( 0 ) }
    }
}
</script>