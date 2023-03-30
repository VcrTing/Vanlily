<template>
    <button class="px_x2 py_s"
        :class="{ 'btn-pri': pri, 'btn-pri_out': !pri }"
    >
        <span v-if="icon">
            <i class="mdi" :class="icon"></i>
        </span>
        {{ tit }}
    </button>
</template>

<script>
export default {
    props: [ 'icon', 'tit', 'pri' ]
}
</script>