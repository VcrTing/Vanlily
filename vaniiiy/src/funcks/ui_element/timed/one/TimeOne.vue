<template>
    <div class="input-timed input-icon-r">
        <timed-picker :timed="def" @result="submit" :class="_calss"></timed-picker>
        <i class="mdi mdi-calendar-blank h4 sus"></i>
    </div>
</template>

<script>
import TimedPicker from '../plugin/TimedPicker.vue'
export default {
  components: { TimedPicker },
    props: [ 'def', '_calss' ],
    emits: [ 'result' ],
    mounted() { },
    methods: {
        submit(v) { this.$emit('result', v) }
    }
}
</script>

<style>

</style>