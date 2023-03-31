<template>
    <div v-if="size && size > 0" class="fx-l fk-cake-an-big">
        <div class="fk-cake-an-cover">
            <ui-img v-if="cake.images_url" :src="cake.images_url[0]"/>
        </div>
        <h4 class="fx-1 pl_x2 fx-l n">
            <div v-if="_uuid && cake">[{{ cake.uuid }}]&nbsp;&nbsp;</div>
            {{_named(cake)}}
        </h4>
    </div>
    <div v-else class="fx-s">
        <div class="fk-cake-an-cover">
            <ui-img v-if="cake && cake.images_url" :src="cake.images_url[0]"/>
        </div>
        <div class="fx-1 pl_x2 fx-l">
            <div v-if="_uuid && cake">[{{ cake.uuid }}]&nbsp;&nbsp;</div>
            {{_named(cake)}}
        </div>
    </div>
</template>

<script>
import UiImg from '../../ui_static/UiImg.vue';
export default {
  components: { UiImg },
    props: {
        size: Number,
        cake: Object,
        _uuid: Boolean
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

.fk-cake-an-big
    .fk-cake-an-cover
        width: 4.8em
        height: 4.8em
</style>