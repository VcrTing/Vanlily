<template>
    <div class="px_x2 pt_x">
        <div class="pb_x">
            <nav class="px_x2 pt_s">
                <div class="fx-s fx-t">
                    <div class="fx-1">
                        <sk-order-img-msg/>
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
import SkeietonH from '../SkeietonH.vue'
import SkOrderImgMsg from '../../../funcks/order/img/SkOrderImgMsg.vue'
export default {
  components: { SkeietonH, SkOrderImgMsg },
}
</script>