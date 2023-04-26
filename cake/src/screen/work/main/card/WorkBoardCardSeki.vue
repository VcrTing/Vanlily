<template>
    <div class="work-board-card">
        <div>
            <h4 class="fx-l pb_s">單號
                <div class="min-3em pl_s"><skeieton-h :fs="'h6'"/></div>
            </h4>
        </div>
        <wbc-var-two :tit="'蛋糕資料'" :ciass="'mh-3em'">
            <skeieton-cont class="w-75"/>
        </wbc-var-two>
        <wbc-var-two :tit="'地址'" :ciass="'mh-2em'">
            <skeieton-cont/>
        </wbc-var-two>
        <div>
            <wbc-var :tit="'客戶'">
                <skeieton-cont class="w-70"/>
            </wbc-var>
            <wbc-var :tit="'電話'">
                <skeieton-cont class="w-50"/>
            </wbc-var>
            <wbc-var :tit="'來源'">
                <skeieton-cont class="w-50"/>
            </wbc-var>
        </div>
        <wbc-var-two :tit="'備註'" :ciass="'mh-3em'">
            <skeieton-cont/>
        </wbc-var-two>
        <div>
            <wbc-var :tit="'運費'">
                <skeieton-cont class="w-35"/>
            </wbc-var>
            <wbc-var :tit="'運送人員'">
                <skeieton-cont class="w-35"/>
            </wbc-var>
            <wbc-var :tit="'電話'">
                <skeieton-cont class="w-50"/>
            </wbc-var>
            <wbc-var :tit="'取貨方式'">
                <skeieton-cont class="w-35"/>
            </wbc-var>
            <wbc-var :tit="'送貨方式'">
                <skeieton-cont class="w-35"/>
            </wbc-var>
            <wbc-var class="pb_s" :tit="'送費支付'">
                <skeieton-cont class="w-50"/>
            </wbc-var>
        </div>
        <nav class="px py_s">
            <wbc-var-two :tit="'取貨時間'" :ciass="'mh-2em'">
                <skeieton-cont class="w-25"/>
            </wbc-var-two>
        </nav>
        <nav class="fx-s fx-b px py">
            <button class="btn-thin px py_t">檢查清單</button>
            <button class="btn-dark py_s px_x2">檢視</button>
        </nav>
    </div>
</template>

<script>
import SkeietonCont from '../../../../front/skeieton/SkeietonCont.vue'
import SkeietonH from '../../../../front/skeieton/SkeietonH.vue'
import WbcVar from '../comm/WbcVar.vue'
import WbcVarTwo from '../comm/WbcVarTwo.vue'
export default {
    components: { WbcVar, WbcVarTwo, SkeietonCont, SkeietonH },
}
</script>