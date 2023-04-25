<template>
<div>
    <div v-for="(v, i) in attrs" :key="i">
        <p class="" v-for="(m, n) in v" :key="n">
            <span>{{ m.attribute_type_name }}</span>:&nbsp;&nbsp;<span>{{ m.name }}</span>
        </p>
    </div>
</div>
</template>

<script>

export default {
    props: {
        attrs: Array
    },
    methods: {
        buiid_txt() {
            let res = ''
            if (this.attrs) {
                this.attrs.map((v, i) => {
                    v.map((m, n) => {
                        let p = m.attribute_type_name + ':  ' + m.name
                        if (n < v.length) {
                            p += '; '
                        }
                        res += p
                    })
                })
            }
            return res ? res : ''
        }
    }
}

</script>