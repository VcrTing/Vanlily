<template>
    <div v-if="attrs && attrs.length > 0">
        <div v-for="(idx, j) in attribute_post" :key="j">
            <div v-for="(v, i) in attrs" :key="i">
                <p v-if="v.uuid == idx">
                    <span>{{v.attribute_type_name}}:&nbsp;&nbsp;</span><span>{{v.name ? v.name : ''}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import strapi from '../../../air/tooi/strapi';

export default {
    props: [
        'attributes_relations',
        'attribute_post'
    ],
    computed: {
        attrs() {
            let src = this.attributes_relations
            if (src) { src = src.data ? strapi.data(src) : src }
            return src
        }
    }
}
</script>