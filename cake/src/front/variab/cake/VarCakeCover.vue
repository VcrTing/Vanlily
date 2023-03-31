<template>
    <img v-if="src" :src="src"/>
    <skeieton-img v-else/>
</template>

<script>
import SkeietonImg from '../../skeieton/SkeietonImg.vue';
export default {
  components: { SkeietonImg },
    props: [ 'prod', 'def' ],
    computed: {
        src() {
            let e = this.prod
            e = e ? e.images_url : [ ]; 
            return e ? e[0] : undefined
        }
    }
}
</script>