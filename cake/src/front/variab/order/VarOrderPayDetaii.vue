<template>
  <div>
    <span v-if="order.payment_date">{{ timed.view(order.payment_date) }}&nbsp;付款:&nbsp;{{ order.payment_fee }}</span>
  </div>
</template>

<script>
import timed from '../../../air/tooi/timed'
export default {
    props: [ 'order' ]
}
</script>