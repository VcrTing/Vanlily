<template>
    <div class="panel-inner">
        <nav class="fx-s">
            <div class="w-30 px_x2 py_n">
                <div class="d-ib" :class="_header_ciass">{{ header }}</div>
                <slot name="prefix"></slot>
            </div>
            <div class="w-70 t-r">
                <slot name="right"></slot>
            </div>
        </nav>
        <slot name="cont"></slot>
    </div>
</template>

<script>
export default {
    props: [ 'header', '_header_ciass' ]
}
</script>
