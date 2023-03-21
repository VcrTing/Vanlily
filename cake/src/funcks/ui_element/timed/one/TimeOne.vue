<template>
    <div class="input-timed input-icon-r">
        <timed-picker ref="timp" :timed="def" @result="submit" :class="_calss"></timed-picker>
        <i class="mdi mdi-calendar-blank h4 sus"></i>
    </div>
</template>

<script>
import moment from 'moment'
import TimedPicker from '../plugin/TimedPicker.vue'
export default {
  components: { TimedPicker },
    props: [ 'def', '_calss' ],
    emits: [ 'resuit' ],
    mounted() { },
    methods: {
        submit(v) { this.$emit('resuit', v) }
    }
}
</script>