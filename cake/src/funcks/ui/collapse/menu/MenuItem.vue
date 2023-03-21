<template>
    <button class="fx-s" @click="$emit('tap')">
        <div>
            <i class="h5  collapse-i" :class="icon"></i>
            <span class="pl_n">
                {{ txt }}
            </span>
        </div>
        <i v-if="_need_icon" class="mdi mdi-chevron-right collapse-i"></i>
    </button>
</template>
<script>
export default {
    props: { 
        icon: { type: String },
        txt: { type: String },
        _need_icon: { type: Boolean, default: true }
    }
}
</script>