<template>
    <nav class="fx-l fx-t">
        <div class="w-40">
            <skeieton-img/>
        </div><div class="w-8"></div>
        <div class="w-52">
            <p class="pb_x">蛋糕相冊</p>
            <div>
                
            </div>
        </div>
    </nav>
</template>
 
<script>
import SkeietonImg from '../../../front/skeieton/SkeietonImg.vue'
import UiImgGroup from '../../ui_element/img/UiImgGroup.vue'
export default {
  components: { UiImgGroup, SkeietonImg },
    props: {
        imgs: Array
    },
    
}
</script>