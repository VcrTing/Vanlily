<template>
    <div>
        <div class="pl_x2 pb">
            <div class="fx-s pl_x2">
                <div class="w-28">
                    <p>國家/地區：</p>
                    <p class="pl_x2">香港</p>
                </div>
                <div class="w-33">
                    <p>地區</p>
                    <vf-downtown-select class="input w-100"></vf-downtown-select>
                </div>
                <div class="w-33">
                    <p>市政/區域</p>
                    <input class="input w-100" placeholder="請輸入內容" />
                </div>
            </div>
        </div>
        <div class="pl_x2 pt">
            <div class="fx-s fx-t pl_x2">
                <div class="w-28"><p>&nbsp;</p><p class="pl_x2">&nbsp;</p></div>
                <div class="w-33">
                    <p>公寓、套房、單位等</p>
                    <input class="input w-100" placeholder="請輸入內容" />
                </div>
                <div class="w-33">
                    <p>門牌號碼和街道名稱</p>
                    <input class="input w-100" placeholder="請輸入內容" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VfDowntownSelect from "../../../view_form/addr/VfDowntownSelect.vue"

export default {
    components: { VfDowntownSelect },
}
</script>

<style>

</style>