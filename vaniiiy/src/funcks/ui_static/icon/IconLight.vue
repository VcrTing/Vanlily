<template>
    <svg-wrapper>
        <svg v-if="named == 'on'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" xml:space="preserve"><path fill="#D97A07" d="M6 .8c-2 0-3.6 1.6-3.6 3.6 0 1.2.6 2.3 1.5 3v1.2c0 .3.2.5.5.5h3.1c.3 0 .5-.2.5-.5V7.4c.9-.6 1.5-1.7 1.5-3C9.6 2.5 8 .8 6 .8zm1.5 5.8-.5.3v1.2H5V6.9l-.5-.3c-.7-.5-1.1-1.3-1.1-2.1C3.4 3 4.6 1.9 6 1.9S8.6 3 8.6 4.5c0 .8-.4 1.6-1.1 2.1zm-3 3.5v.5c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5v-.5h-3z"/><path fill="#F2CE16" d="M8.6 4.5c0 .8-.4 1.6-1.1 2.1l-.5.3v1.2H5V6.9l-.5-.3c-.7-.5-1.1-1.3-1.1-2.1C3.4 3 4.6 1.9 6 1.9S8.6 3 8.6 4.5z"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" xml:space="preserve"><path fill="#595959" d="M4.5 10.6c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5v-.5h-3v.5zM6 .8c-2 0-3.6 1.6-3.6 3.6 0 1.2.6 2.3 1.5 3v1.2c0 .3.2.5.5.5h3.1c.3 0 .5-.2.5-.5V7.4c.9-.7 1.5-1.7 1.5-3C9.6 2.5 8 .8 6 .8zm1.5 5.8-.5.3v1.2H5V6.9l-.5-.3c-.7-.5-1.1-1.3-1.1-2.1C3.4 3 4.6 1.9 6 1.9S8.6 3 8.6 4.5c0 .8-.4 1.6-1.1 2.1z"/></svg>
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