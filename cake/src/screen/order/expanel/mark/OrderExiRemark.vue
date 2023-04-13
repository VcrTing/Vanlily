<template>
    <nav>
        <p class="py">
            備註一：
            <span>{{ order.remarks_1 }}</span>&nbsp;
            <ui-copy-icon v-if="order.remarks_1" :txt="order.remarks_1"/>
        </p>
        <p>
            備註二：
            <span>{{ order.remarks_2 }}</span>
        </p>
    </nav>
</template>

<script>
import UiCopyIcon from '../../../../funcks/ui_element/table/UiCopyIcon.vue'
export default {
    components: {
        UiCopyIcon
    },
    props: {
        order: Object
    },
}
</script>