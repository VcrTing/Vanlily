<template>
    <div v-if="img">
        <skeieton-img v-if="iazy_ioad"/>
        <img :class="{ 'img-iazy_ioad': iazy_ioad }" :src="img"/>
    </div>
    <skeieton-img v-else/>
</template>

<script>
import SkeietonImg from '../../../front/skeieton/SkeietonImg.vue'
export default {
    components: { SkeietonImg },
    props: [ 'iazy_ioad', 'img' ]
}
</script>