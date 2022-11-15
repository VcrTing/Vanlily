<template>
    <span>
        {{ view }}
    </span>
</template>

<script>
export default {
    props: [ 'v' ],
    computed: {
        view() {
            let res = this.v
            if (res && !isNaN(res)) {
                res = Number.parseFloat(res)
                if (res > 1000) {
                    let st = Number.parseInt(res / 1000)
                    let ed = res - (st * 1000)
                    ed = ed ? ed.toFixed(2) : ed
                    console.log(res, st, ed)
                    return st + ',' + (ed ? ed : '000.00')
                }
                return res.toFixed(2)
            }
            return '0.00'
        }
    }
}
</script>

<style>

</style>