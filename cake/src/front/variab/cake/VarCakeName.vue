<template>
    <span>{{ named ? named : def_name }}</span>
</template>

<script>
export default {
    props: [ 'prod', 'def' ],
    computed: {
        def_name() {
            if (this.def) { return this.def }
        },
        named() {
            let e = this.prod
            e = e ? e.translation : undefined; 
            e = e ? e['zh-hant'] : undefined
            return e ? e.name : undefined
        }
    }
}
</script>