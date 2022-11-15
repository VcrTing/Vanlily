<template>
    <div>
            <div class="fx-l pb_x pt pl_x2 cold">
                <div class="w-60">
                    <vf-send-type-choise
                        @change="tabType"
                    class="row fx-l"></vf-send-type-choise>
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
                        <p>地區線路：</p>
                        <input class="input w-100" placeholder="請輸入內容" />
                    </div>
                    <div class="w-33">
                        <p>地鐵站</p>
                        <input class="input w-100" placeholder="請輸入內容" />
                    </div>
                    <div class="w-33">
                        <p>備註例如地鐵站出口(不出站計算)</p>
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
                    <p class="pl_x2">
                        &nbsp;
                    </p>
                </div>
                <div class="w-28">
                    <p>客付運費價格</p>
                    <p class="pb">
                        <span>$</span>
                        &nbsp;&nbsp;&nbsp;
                        <span class="h5">120</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>HKD</span>
                    </p>
                </div>
                <div class="w-45 pri_son">
                    <p>Vanlily Cake 付運費價格</p>
                    <p class="pb pl_x2">
                        <span>$</span>
                        &nbsp;&nbsp;&nbsp;
                        <span class="h5">120</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>HKD</span>
                    </p>
                </div>
            </div>
    </div>
</template>

<script>
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import VfSelfGetRadio from '../../../view_form/addr/VfSelfGetRadio.vue'
import VfSendTypeChoise from '../../../view_form/send/VfSendTypeChoise.vue'
export default {
  components: { VfSendTypeChoise, VfSelfGetRadio, UiInput },
    data() {
        return { tab: 2 }
    },
    methods: { tabType(v) { this.tab = v } }
}
</script>

<style>

</style>