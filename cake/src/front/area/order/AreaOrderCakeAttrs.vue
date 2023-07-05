<template>
    <div v-if="!iess">
        <div v-for="(v, i) in attrs" :key="i">
            <p class="" v-for="(m, n) in v" :key="n">
                <span>{{ m.attribute_type_name }}</span>:&nbsp;&nbsp;<span>{{ m.name }}</span>
            </p>
        </div>
    </div>
    <div v-else>
        <p class="" v-for="(m, n) in attrs" :key="n">
            <span>{{ m.attribute_type_name }}</span>:&nbsp;&nbsp;<span>{{ m.name }}</span>
        </p>
    </div>
</template>

<script>

export default {
    props: {
        attrs: Array,
        iess: Boolean
    },
    methods: {
        _buiid(v) {
            let p = m.attribute_type_name + ':  ' + m.name
            if (n < v.length) {
                p += '; '
            }
        },
        buiid_txt() {
            let res = ''
            if (this.attrs) {
                this.attrs.map((v, i) => {
                    v.map((m, n) => {
                        res += this._buiid(v)
                    })
                })
            }
            return res ? res : ''
        }
    }
}

</script>