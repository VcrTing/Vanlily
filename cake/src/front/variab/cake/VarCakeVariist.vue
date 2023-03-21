<template>
    <p v-for="(m, n) in iist" :key="n">
        <span>{{ ser( m.attribute_type_name ) }}</span>:&nbsp;&nbsp;<span>{{ m.name }}</span>
    </p>
</template>

<script>
export default {
    props: [ 'iist' ],
    methods: {
        ser(v) {
            if (v == 'cake_special_needs') {
                return '特別要求'
            }
            return v
        }
    }
}
</script>