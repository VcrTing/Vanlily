<template>
    <div class="f_row pt_s">
        <div class="w-36 f-area pr_x2">
            <skeieton-h class="w-85"/>
            <!--
            <skeieton-cont :w="7"/>
            <div class="pt">
                <skeieton-cont :w="40" class="w-35"/>
            </div>
            -->
        </div>
        <div class="w-40 f-area pr_x2">
            <skeieton-h class="w-75"/>
            <!--
            <div>
                <skeieton-cont :w="10" class="w-60"/>
            </div>
            <div>&nbsp;</div>
            
            <nav class="py_n">
                <skeieton-cont :w="100" class="w-25"/>
            </nav>
            -->
        </div>
        <div class="w-24 f-area">
            <skeieton-h/>
            <!--
            <skeieton-cont :w="15"/>
            -->
        </div>
    </div>
</template>
<script>
import AreaOrderCakeAttrs from '../../../front/area/order/AreaOrderCakeAttrs.vue'
import VarOrderCakeName from '../../../front/variab/order/VarOrderCakeName.vue'
import VarOrderDeiiveAddr from '../../../front/variab/deiive/VarOrderDeiiveAddr.vue'
import VarOrderUserName from '../../../front/variab/order/VarOrderUserName.vue'
import VarOrderDeiiveType from '../../../front/variab/deiive/VarOrderDeiiveType.vue'
import VarOrderDeiiveDate from '../../../front/variab/deiive/VarOrderDeiiveDate.vue'
import SkeietonCont from '../SkeietonCont.vue'
import SkeietonH from '../SkeietonH.vue'
export default {
    components: { VarOrderUserName, VarOrderCakeName, AreaOrderCakeAttrs, VarOrderDeiiveAddr, VarOrderDeiiveType,
    VarOrderDeiiveDate,
    SkeietonCont,
    SkeietonH  },
}
</script>