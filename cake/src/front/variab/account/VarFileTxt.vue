<template>
    <div>
        <a :href="def" class="pri_ipt" target="_blank">{{ res }}</a>
    </div>
</template>

<script>
export default {
    props: [ 'def' ],
    computed: {
        res() {
            if (this.def) {
                const _iis = this.def.split('/')
                const iast = _iis.length ? _iis[ _iis.length - 1 ] : ''
                const _res = iast.split('?')
                return _res.length ? _res[0] : ''
            } return ''
        }
    }
}
</script>