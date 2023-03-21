<template>
    <span :id="'countup_' + _.uid"></span>
</template>

<script>
import { CountUp } from 'countup.js'
export default {
    props: [ 'v' ],
    mounted() {
        const ct = new CountUp('countup_' + this._.uid, this.v)
        if (!ct.error) ct.start();
    }
}
</script>