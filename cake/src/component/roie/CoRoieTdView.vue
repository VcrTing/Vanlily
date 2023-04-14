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
                { txt: '管理員(Administrator)', v: 'admin' },
                { txt: 'BOSS', v: 'boss' },
                { txt: '普通員工', v: 'authenticated' },
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