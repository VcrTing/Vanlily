<template>
    <div class="row_x2 fx-s pt pb_x3">
        <div class="w-333"><skeieton-cont :w="4"/></div>
        <div class="w-333"><skeieton-cont :w="4"/></div>
        <div class="w-333"><skeieton-cont :w="4"/></div>
    </div>
</template>

<script>
import SkeietonCont from "../../../front/skeieton/SkeietonCont.vue"

export default {
    components: { SkeietonCont },
}
</script>