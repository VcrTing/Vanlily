<template>
    <div class="fx-l fx-t">
        <ui-radio :active="now == 1" @tap="now = 1">
            <p>A1 Vanlily Cake Workshop(免送貨費)</p>
            <p>
                <span>地址：</span>
                <span>屯門環路收成工業大廈606室提取（屯溪門地鐵站F2出口）</span>
            </p>
            <div>
                <span>取貨時間：</span>
                <span>
                    星期壹至星期日：10:00-18:00
                </span>
            </div>
        </ui-radio>
        
        <ui-radio :active="now == 2" @tap="now = 2">
            <p>屯門站F出口 <span>+HK$ 50</span></p>
            <p>
                <span>取貨時間：</span>
                <span>
                    星期壹至星期日：10:00-18:00
                </span>
            </p>
        </ui-radio>
    </div>
</template>

<script>
import UiRadio from '../../../funcks/ui_element/input/radio/UiRadio.vue'
export default {
  components: { UiRadio },
    data() {
        return {
            now: 1
        }
    }
}
</script>

<style>

</style>