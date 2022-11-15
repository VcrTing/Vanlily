<template>
    <p v-for="(v, i) in attrs" :key="i">
        <span>{{v.attribute_type_name}}:&nbsp;&nbsp;</span><span>{{v.name ? v.name : ''}}</span>
    </p>
</template>

<script>
export default {
    props: {
        cake: Object
    },
    computed: {

        attrs() {
            let res = this.cake; res = res ? res.attribute : null
            return res && res.data ? this.strapi.view(res.data) : [ ]
        },
    }
}
</script>

<style>

</style>