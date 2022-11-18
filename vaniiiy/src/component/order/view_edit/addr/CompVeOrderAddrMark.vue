<template>
    <div :class="{ 'panel-inner px_x2 py': paner }">
        <div class="pt_s">送貨類別</div>

            <div class="pt_s">
                <vf-send-type-choise :def="1" @resuit="(n) => {}" class="pt cold row"></vf-send-type-choise>
                <div class="w-50 pl_x2 pt">
                    <vf-receive-type-choise class="fx-s pt" :def="1" @resuit="(n) => {}"/>
                </div>
            </div>

            <div class="pl_x2 pt_x2 pb">
                <!-- 自取 -->
                <div v-show="tab == 1" class="fx-s upper cold">
                    <div class="w-15"></div>
                    <div class="w-70">
                        <vf-self-get-radio></vf-self-get-radio>
                    </div>
                    <div class="w-15"></div>
                </div>
                <!-- 送達地鐵站 -->
                <div v-show="tab == 2" class="fx-s upper">
                    <div class="w-28">
                        <p>地域</p>
                        <input class="input w-100" placeholder="請輸入內容" />
                    </div>
                    <div class="w-33">
                        <p>地区</p>
                        <input class="input w-100" placeholder="請輸入內容" />
                    </div>
                    <div class="w-33">
                        <p>详细地址</p>
                        <input class="input w-100" placeholder="請輸入內容" />
                    </div>
                </div>
                <!-- 樓下交收 -->
                <div v-show="tab >= 3" class="upper">
                    <ui-input :header="'地址備註'" :is_err="false">
                        <textarea class="input" placeholder="請輸入地址"></textarea>
                    </ui-input>
                </div>
            </div>
            <div class="fx-s fx-t pt_x2 cold">
                <div class="w-32">
                    <p class="">運費對比</p>
                    <p class="">&nbsp;</p>
                </div>
                <div class="w-28">
                    <p>客付運費價格</p>
                    <p class="pb">
                        <span>$</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="h5">120</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span>HKD</span>
                    </p>
                </div>
                <div class="w-45 pri_son">
                    <p>Vanlily Cake 付運費價格</p>
                    <p class="pb pl_x2">
                        <span>$</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="h5">120</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span>HKD</span>
                    </p>
                </div>
            </div>
    </div>
</template>

<script>
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import VfSelfGetRadio from '../../../view_form/addr/VfSelfGetRadio.vue'
import VfReceiveTypeChoise from '../../../view_form/send/VfReceiveTypeChoise.vue'
import VfSendTypeChoise from '../../../view_form/send/VfSendTypeChoise.vue'
export default {
  components: { VfSendTypeChoise, VfSelfGetRadio, UiInput, VfReceiveTypeChoise },
    props: {
        paner: Boolean,
        order: Object
    },
    data() {
        return { tab: 2 }
    },
    methods: { 
        tabType(v) { this.tab = v },
        coii() {
            
        }
    }
}
</script>

<style>

</style>