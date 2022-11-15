<template>
    <div class="panel-inner">
        <nav>
            <slot name="tit"></slot>
        </nav>
        <div class="">
            <slot name="cont"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'header' ]
}
</script>
