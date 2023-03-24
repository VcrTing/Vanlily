<template>
    <div v-if="attrs && attrs.length > 0">
        <p v-for="(v, i) in attrs" :key="i">
            <span>{{v.attribute_type_name}}:&nbsp;&nbsp;</span><span>{{v.name ? v.name : ''}}</span>
        </p>
    </div>
    <div v-else class="sus">
        {{ _txt_empty ? _txt_empty : '(該蛋糕無參數)' }}
    </div>
</template>

<script>
export default {
    props: {
        cake: Object,
        _txt_empty: String
    },
    computed: {

        attrs() {
            let res = this.cake; res = res ? res.attribute : null
            return res && res.data ? this.strapi.view(res.data) : [ ]
        },
    }
}
</script>
