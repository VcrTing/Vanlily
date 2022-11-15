<template>
    <nav class="fx-l input-timed timed-doub">
        <div>
            <timed-picker
                :timed="start"
                :pahd="'开始时间'"
            ></timed-picker>
        </div>
        <div class="px">
            <i class="mdi mdi-arrow-bottom-right h4 pg_rt sus"></i>
        </div>
        <div class="time_2">
            <timed-picker
                :timed="start"
                :pahd="'结束时间'"
            ></timed-picker>
        </div>
        <div>
            <i class="mdi mdi-calendar-blank h4 sus"></i>
        </div>
    </nav>
</template>
<script>
import moment from 'moment'
import TimedPicker from '../plugin/TimedPicker.vue'
export default {
  components: { TimedPicker },
    data() {
        return {
            end: '',
            start: ''
        }
    },
    mounted() { 
        this.start = moment(new Date()).format('yyyy-MM-DD') }
}
</script>
<style lang="sass">
.pg_rt::before
    transform: rotate(-45deg) !important
</style>