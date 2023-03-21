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
        return {
            open: true
        }
    },
    methods: {
        change() {
            console.log('open =', this.open)
            this.open = !this.open
        }
    }
}
</script>