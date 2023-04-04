<template>
    <div class="py_x2">
        <ui-header class="py_x">
            <template #tit>
                <h3 class="n fx-l w-100">
                    <span>單號:&nbsp;&nbsp;</span>
                    <skeieton-h :fs="'h6'" class="w-20"/>
                </h3>
            </template>
        </ui-header>

        <h5 class="n py_n">基本信息</h5>
        <div class="row_x2 fx-s pt pb_x3">
            <div class="w-333"><skeieton-h :w="4"/></div>
            <div class="w-333"><skeieton-h :w="4"/></div>
            <div class="w-333"><skeieton-h :w="4"/></div>
        </div>
        <!--
        <div class="pt">
            <skeieton-cont :w="60"/>
        </div>
        -->
        <div class="py_x4">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </div>
</template>

<script>
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import SkeietonCont from '../SkeietonCont.vue'
import SkeietonH from '../SkeietonH.vue'
export default {
  components: { SkeietonH, SkeietonCont, UiHeader },

}
</script>