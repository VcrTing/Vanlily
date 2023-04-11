<template>
    <div class="fx-s fx-t pt_x2">
        <div class="w-32 pr_x4">
            <skeieton-img class="br"/>
            <div class="py_x4"></div>
            <div class="py_x4"></div>
        </div>
        <div class="w-4"></div>
        <div class="fx-1">
            <skeieton-h :fs="'h6'" class="w-30"/>
            <div class="py"></div>
            <skeieton-h :fs="'h6'" class="w-100"/>
        </div>
    </div>
</template>

<script>
import SkeietonH from '../../../../front/skeieton/SkeietonH.vue'
import SkeietonImg from '../../../../front/skeieton/SkeietonImg.vue'
export default {
    components: {
        SkeietonImg,
        SkeietonH
    }
}
</script>