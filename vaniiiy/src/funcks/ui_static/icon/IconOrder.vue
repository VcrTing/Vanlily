<template>
    <svg-wrapper>
        <svg v-if="named == 'car'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" xml:space="preserve"><path fill="#49BABC" d="M9.8 3.6H7.9V1.2H1.2C.5 1.2.1 1.6.1 2.3V9h1.1c0 1 1 1.9 1.9 1.9s1.9-1 1.9-2h2.1c0 1 1 1.9 1.9 1.9s1.9-1 1.9-1.9H12v-3L9.8 3.6zM7.9 5.9V4.6h1.4L10.7 6H7.9z"/></svg>
    </svg-wrapper>
</template>

<script>
import SvgWrapper from '../common/SvgWrapper.vue'
export default {
  components: { SvgWrapper },
    props: [ 'named' ],
    data() {
        return {

        }
    },
}
</script>

<style>

</style>