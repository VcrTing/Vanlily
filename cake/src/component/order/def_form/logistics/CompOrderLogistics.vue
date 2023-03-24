<template>
    <div>
        <div class="fx-s w-unf">
            <div class="w-90 w-100-p mb-0">
                <comp-logistics-time></comp-logistics-time>
            </div>
        </div>
        <div class="py"></div>
        <div class="fx-s fx-wp">
            <div class="w-65 w-100-p pb">
                <comp-logistics-msg></comp-logistics-msg>
            </div>
            <div class="w-35 pb">
                <card-invite :_edit="false" :_scale="false"></card-invite>
            </div>
        </div>
        <div class="pb_x"></div>
        <div class="card-def br pb-0">
        </div>
    </div>
</template>

<script>
import CardInvite from '../../../card/invite/CardInvite.vue'
import CompLogisticsMsg from './block/CompLogisticsMsg.vue'
import CompLogisticsTime from './block/CompLogisticsTime.vue'
export default {
    components: { CompLogisticsTime, CompLogisticsMsg, CardInvite },
}
</script>