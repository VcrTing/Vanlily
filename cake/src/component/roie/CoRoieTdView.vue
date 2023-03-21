<template>
    <div>
        {{ ioc(def) }}
    </div>
</template>

<script>
export default {
    props: [ 'def' ],
    data() {
        return {
            roies: [
                { txt: 'Administrator', v: 'admin' },
                { txt: 'Boss', v: 'boss' },
                { txt: '員工', v: 'authenticated' },
            ]
        }
    },
    methods: {
        ioc(r = 'Admin') {
            let res = ''
            this.roies.map(e => {
                if (e.v === r) { res = e.txt }
            })
            return res
        }
    }
}
</script>