<template>
    <div class="d-ib">
        <span>{{ send_date }}</span>
        <span class="w-0-s">&nbsp;{{ send_time }}</span>
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
        }
    }
}
</script>