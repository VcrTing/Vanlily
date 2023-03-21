<template>
    <div class="fx-s fx-t">
        <div class="w-5"></div>
        <div class="w-32">
            <h3>檢查清單</h3>
            <div class="py"></div>
            <ui-gallery></ui-gallery>
        </div>
        <div class="w-5"></div>
        <div class="w-43">
            <nav class="table-line">
                <nav class="fx-l">
                    <td class="w-5em t-c b pb_s">完成檢查</td>
                    <td class="w-5em t-c b pb_s">出貨檢查</td>
                    <td class="pb_s">&nbsp;</td>
                </nav>
                <div>
                    <nav>
                        <td class="w-5em t-c">  <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span> </td>
                        <td class="w-5em t-c"> <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span></td>
                        <td class="pl">款式：<span>BB糖片造型cupcake</span></td>
                    </nav>
                    <nav>
                        <td class="w-5em t-c">  <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span> </td>
                        <td class="w-5em t-c"> <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span></td>
                        <td class="pl">主題顏色：<span>紅色</span></td>
                    </nav>
                    <nav>
                        <td class="w-5em t-c">  <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span> </td>
                        <td class="w-5em t-c"> <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span></td>
                        <td class="pl">呎時：<span>7cm，12個</span></td>
                    </nav>
                    <nav>
                        <td class="w-5em t-c">  <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span> </td>
                        <td class="w-5em t-c"> <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span></td>
                        <td class="pl">重量：<span>N.A</span></td>
                    </nav>
                    <nav>
                        <td class="w-5em t-c">  <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span> </td>
                        <td class="w-5em t-c"> <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span></td>
                        <td class="pl">味道：<span>檸檬，朱古力</span></td>
                    </nav>
                    <nav>
                        <td class="w-5em t-c">  <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span> </td>
                        <td class="w-5em t-c"> <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span></td>
                        <td class="pl">
                            <zi-li-layout>
                                <div class="pb_n">字牌 1：<span>boy or girl</span></div>
                                <div class="pb_n">字牌 2：<span>He Or She</span></div>
                            </zi-li-layout>
                        </td>
                    </nav>
                    <nav>
                        <td class="w-5em t-c">  <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span> </td>
                        <td class="w-5em t-c"> <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span></td>
                        <td class="pl">
                            <zi-li-layout :header="'特別要求：'" :_top="false">
                                <div>
                                    名字字粒：<span>KC Li</span>&nbsp;&nbsp;
                                    <button class="btn-succ">已更新</button>
                                </div>
                            </zi-li-layout>
                        </td>
                    </nav>
                </div>
            </nav>
        </div>
        <div class="w-5"></div>
    </div>
</template>

<script>
import ZiLiLayout from '../../../../funcks/ui_layout/text/view/ZiLiLayout.vue'
import UiGallery from '../../../../funcks/ui_media/gallery/UiGallery.vue'
export default {
  components: { UiGallery, ZiLiLayout },
    data() {
        return {
        }
    }
}
</script>

<style>

</style>