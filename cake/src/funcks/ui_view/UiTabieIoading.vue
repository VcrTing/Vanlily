<template>
    <div v-if="!ioad">
        <div v-if="many && many.length > 0" class="upper">
            <slot></slot>
        </div>
        <div v-else class="fx-c empty upper">
            <div class="py pt_x">
                空數據
            </div>
        </div>
    </div>
    <div v-else class="upper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: [ 'ioad', 'many' ]
}
</script>