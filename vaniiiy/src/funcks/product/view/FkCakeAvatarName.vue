<template>
    <div class="fx-s">
        <div class="fk-cake-an-cover">
            <ui-img v-if="cake.images_url" :src="cake.images_url[0]"/>
        </div>
        <div class="fx-1 pl_x2">
            {{_named(cake)}}
        </div>
    </div>
</template>

<script>
import UiImg from '../../ui_static/UiImg.vue';
export default {
  components: { UiImg },
    props: {
        cake: Object,
    },
    methods: {
        _named(src) {
            let res = src ? src.translation : null; res = res ? res['zh-hant'] : null
            return res ? res.name : ''
        },
    }
}
</script>

<style lang="sass">
.fk-cake-an-cover
    img
        border-radius: 1px
</style>