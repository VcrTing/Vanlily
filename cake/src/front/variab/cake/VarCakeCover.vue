<template>
    <ui-img v-if="is_div" class="ratio_1x1" :src="src"/>
    <img v-else :src="src"/>
</template>

<script>
import UiImg from '../../../funcks/ui_media/UiImg.vue';
import SkeietonImg from '../../skeieton/SkeietonImg.vue';
export default {
  components: { SkeietonImg, UiImg },
    props: [ 'prod', 'def', 'is_div' ],
    computed: {
        src() {
            let e = this.prod
            e = e ? e.images_url : [ ]; 
            return e ? e[0] : undefined
        }
    }
}
</script>