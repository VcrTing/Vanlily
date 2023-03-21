<template>
    <div class="fx-s fx-t w-unf">
        <div class="w-84 fx-s fx-t">
            <div class="w-26">
                <ui-gallery :mode="'VERTICAL'"></ui-gallery>
            </div>
            <div class="w-23 f-area">
                <div>
                    款式：<span>BB糖片造型cupcake</span>
                </div>
                <div>
                    味道：<span>紅桑子，檸檬，朱古力</span>
                </div>
                <div>
                    主題顏色：<span>紅色</span>
                </div>
                <div>
                    重量：<span>N.A.</span>
                </div>
                <div class="fx-l fx-t">
                    <div class="w-5em">
                        生日字粒：
                    </div>
                    <div class="pl">
                        <div>
                            <span>名字字粒：</span><span>KC Li</span>
                        </div>
                        <div class="pt_n">
                            <span>底盤字粒：</span><span>happy birthday</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-25 f-area">
                <div>特別要求：
                    <span>名字字粒：KC Li</span>&nbsp;&nbsp;
                    <button class="btn-succ">已更新</button>
                </div>
                <div>
                    呎時：<span>6+4</span>
                </div>
                <div>
                    數量：<span>1</span>
                </div>
            </div>
            <div class="w-18 f-area">
                <div>
                    合共費用：<span>$<money :v="280000"></money></span>
                </div>
                <div>
                    蛋糕原價：<span>$<money :v="2800"></money></span>
                </div>
                <div>
                    蛋糕價錢：<span>$<money :v="28"></money></span>
                </div>
            </div>
        </div>
        <div class="w-16 t-r">
            <button class="btn-pri_out px py_s">
                <i class="mdi mdi-format-list-checks"></i>&nbsp;
                檢查清單
            </button>
        </div>
    </div>
</template>

<script>
import Money from '../../../funcks/ui/money/Money.vue'
import UiGallery from '../../../funcks/ui_media/gallery/UiGallery.vue'
export default {
  components: { UiGallery, Money },

}
</script>

<style>

</style>