<template>
    <button class="btn-pri px_x3 py_s">
        <span v-if="!msg">
            {{ tit ? tit : '儲存' }}
        </span>
        <span v-else>
            {{ msg }}
        </span>
    </button>
</template>

<script>
export default {
    props: [ 'msg', 'ioad', 'tit' ]
}
</script>
