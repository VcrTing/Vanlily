<template>
    <nav class="fx-l input-timed timed-doub">
        <div>
            <vuejs-datepicker
                :minimum-view="'day'"
                :maximum-view="'month'"
                class="mh-43"
                :format="'dd / MM / yyyy'"
                :placeholder="'開始時間'" v-if="start"
                :value="start" @selected="(v) => start = ser(v)"></vuejs-datepicker>
        </div>
        <div class="px">
            <i class="mdi mdi-arrow-bottom-right h4 pg_rt sus"></i>
        </div>
        <div class="time_2">
            <vuejs-datepicker
                :minimum-view="'day'"
                :maximum-view="'month'"
                class="mh-43"
                :format="'dd / MM / yyyy'"
                :placeholder="'結束時間'" v-if="ended"
                :value="ended" @selected="(v) => ended = ser(v)"></vuejs-datepicker>
        </div>
        <div>
            <i v-if="not" class="mdi mdi-calendar-blank h4 sus"></i>
            <i v-else class="mdi mdi-close h4" @click="reset"></i>
        </div>
    </nav>
</template>
<script>
import moment from 'moment'
import VuejsDatepicker from 'vuejs3-datepicker'
import timed from '../../../../air/tooi/timed'
export default {
  components: { VuejsDatepicker },
    emits: [ 'star', 'end', 'submit' ],
    data() {
        return {
            ended: '',
            start: ''
        }
    },
    computed: {
        not() { 
            if (this.start == timed.now()) {
                return (this.start == this.ended)
            }; return false
        }
    },
    watch: {
        ended(n) { this.$emit('end', n) },
        start(n) { this.$emit('star', n) }
    },
    mounted() { this.reset() },
    methods: {
        ser(v) { return moment(v).format('yyyy-MM-DD') },
        reset() { 
            this.start = moment().format('yyyy-MM-DD'); this.$emit('end', this.start)
            this.ended = moment().format('yyyy-MM-DD'); this.$emit('end', this.ended) 

            setTimeout(() => {
                this.$emit('submit')
            }, 20)
        }
    }
}
</script>
<style lang="sass">
.pg_rt::before
    transform: rotate(-45deg) !important
</style>