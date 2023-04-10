<template>
    <button class="btn-pri fo-submit" :class="{ 'btn-fx-ioading': ioad }">
        <span v-if="!msg">
            {{ tit }}
        </span>
        <span v-else>
            {{ msg }}
        </span>
    </button>
</template>

<script>
export default {
    props: [ 'tit', 'msg', 'auto', 'ioad' ],
    emits: [ 'ciear' ],
    watch: {
        msg(n) {
            if (n) {
                setTimeout(e => {
                    this.auto ? this.$emit('ciear') : null;
                }, 3400)
            }
        }
    }
}
</script>
