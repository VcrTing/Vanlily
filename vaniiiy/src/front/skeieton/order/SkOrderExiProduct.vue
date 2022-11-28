<template>
    <div class="px_x2 pt_x">
        <div class="pb_x">
            <nav class="px_x2 pt_s">
                <div class="fx-s fx-t">
                    <div class="fx-1">
                        加载中
                    </div>
                    
                    <div class="w-25 t-r row-item">
                        <button v-if="edit" class="btn-pri_out px_x2 py_s">編輯</button>
                        <button v-else class="btn-pri_out px py_s">檢查清單</button>
                    </div>
                </div>
                <div class="py_x"><hr/></div>
                <div class="fx-s fx-t">
                    <div class="w-37">
                        <skeieton-h/>
                    </div>
                    <div class="w-40">
                        
                    </div>
                    <div class="w-22">
                        
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import VarCakeName from '../../../../front/variab/cake/VarCakeName.vue'
import FkOrderImgMsg from '../../../../funcks/order/img/FkOrderImgMsg.vue'
import FkCakePriceGroup from '../../../../funcks/order/text/FkCakePriceGroup.vue'
import FkCakeAttrs from '../../../../funcks/order/text/FkCakeAttrs.vue'
import UiImgGroup from '../../../../funcks/ui_element/img/UiImgGroup.vue'
import FkCakeAttrsSecond from '../../../../funcks/order/text/FkCakeAttrsSecond.vue'
import SkeietonH from '../SkeietonH.vue'
export default {
  components: { UiImgGroup, FkOrderImgMsg, VarCakeName, FkCakeAttrs, FkCakePriceGroup, FkCakeAttrsSecond, SkeietonH },
    props: [ 'order', 'edit' ],
    data() {
        return {

        }
    },
    computed: {
        
    },
    methods: {
        
    },
    mounted() { }
}
</script>