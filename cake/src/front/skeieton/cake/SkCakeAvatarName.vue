<template>
    <div class="fx-s">
        <div class="fk-cake-an-cover">
            <skeieton-img/>
        </div>
        <div class="fx-1 pl_x2">
            <skeieton-h :fs="'h5'" class="w-46"/>
        </div>
    </div>
</template>

<script>
import SkeietonH from '../SkeietonH.vue'
import SkeietonImg from '../SkeietonImg.vue'
export default {
  components: { SkeietonImg, SkeietonH },

}
</script>

<style>

</style>