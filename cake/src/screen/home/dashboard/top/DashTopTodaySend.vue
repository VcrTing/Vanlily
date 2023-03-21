<template>
    <div class="dash-top-card">
        <div>{{ txt_now }}待送訂單</div>
        <nav class="fx-s">
            <div class="h0">
                <fk-countup :v="one.todayDeliveryCount" v-if="one.todayDeliveryCount"/>
                <span v-else>0</span>
            </div>
            <button class="btn-pri_light btn-icon h3_son d-ib">
                <i class="mdi mdi-send-clock-outline"></i>
            </button>
        </nav>
        <div>
            <span>比<span>{{ txt }}</span>{{ ia_add }}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="err_son"><span>{{ num }}</span>%</span>
        </div>
    </div>
</template>

<script>
import FkCountup from '../../../../funcks/tooikit/FkCountup.vue'
export default {
  components: { FkCountup },
    props: {
        one: Object,
        txt: String,
        txt_now: String
    },
    computed: {
        ia_add() {
            if (this.one.pius) {
                if (this.one.pius.todayDeliveryCount < 0) {
                    return '減少'
                }
            }
            return '增加'
        },
        num() {
            const res = this.one.pius ? Math.abs( this.one.pius.todayDeliveryCount ) : 0
            return this.one.todayDeliveryCount ? res : 0
        }
    }
}
</script>