<template>
    <div>
        <div class="w-100 fx-l" :class="{ 'fx-t': _top }">
            <div class="w-5em">{{ header }}</div>
            <div class="zili">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default { props: { header: { type: String, default: '生日字粒：' }, _top: { type: Boolean, default: true }  } }
</script>