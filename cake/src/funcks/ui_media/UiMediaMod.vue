<template>
    <div class="modal eos-mod-media" :class="{ 'modal-active': app.MODAL == -100 }">
        <div class="modal-hui" @click="app.mod( 0 )"></div>
        <div class="modal-cont softer" @click="app.mod( 0 )">
            <div>
                <img :src="app.IMG" class="br" @dblclick="app.mod( 0 )"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        app() {
            return this.pina()
        }
    },
}
</script>