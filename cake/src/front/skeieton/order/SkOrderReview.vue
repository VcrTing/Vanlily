<template>
    <div>
        <div class="py_x2">
            <h3 class="n"><skeieton-h :fs="'h3'"/></h3>
        </div>
        <h5 class="n pt_x2 pb_n"><skeieton-cont :w="12"/></h5>
        <div class="pt">
            <skeieton-cont :w="60"/>
        </div>
    </div>
</template>

<script>
import SkeietonCont from '../SkeietonCont.vue'
import SkeietonH from '../SkeietonH.vue'
export default {
  components: { SkeietonH, SkeietonCont },

}
</script>