<template>

    <div class="f_row">
        <div class="w-19">
            <skeieton-img/>
        </div>
        <div class="fx-1">
            <div class="fx-l pt">
                <div class="w-8 f-area"></div>
                <skeieton-h class="w-46" :fs="'h2'"/>
            </div>
            <!--
            <div class="fx-l pt_x2">
                <div class="w-8 f-area"></div>
                <skeieton-cont class="fx-1" :w="12"/>
            </div>
            -->
        </div>
    </div>

</template>

<script>
import SkeietonCont from '../SkeietonCont.vue'
import SkeietonH from '../SkeietonH.vue'
import SkeietonImg from '../SkeietonImg.vue'
export default {
  components: { SkeietonImg, SkeietonH, SkeietonCont },

}
</script>

<style>

</style>