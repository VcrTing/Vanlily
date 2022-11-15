<template>
    <div class="pt">
        <div class="fx-s">
            <div class="w-40 b-500">
                {{ header }}
            </div>
            <slot name="opera"></slot>
        </div>

        <div class="px_t py">
            <nav class="px_s">
                <slot name="filter"></slot>
            </nav>

            <div class="mt">
                <slot name="cont"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import UiHeader from '../../../ui_element/header/UiHeader.vue'
export default {
  components: { UiHeader },
    props: {
        header: { type: String }
    }
}
</script>

<style>

</style>