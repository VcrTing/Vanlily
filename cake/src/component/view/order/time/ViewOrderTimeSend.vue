<template>
    <div class="d-ib">
        <span>{{ send_date }}&nbsp;</span><br/>
        <span class="w-0-p">{{ send_time }}</span>
        <span class="w-100-p w-0 view-p">{{ send_time_short }}</span>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    props: [ 'date', 'time' ],
    computed: {
        send_date() {
            return this.date ? moment(this.date).format('yyyy/MM/DD') : '- -'
        },
        send_time() {
            return this.time
        },
        send_time_short() {
            return this.time ? (this.time + '').substring(0, 2) : ''
        }
    }
}
</script>