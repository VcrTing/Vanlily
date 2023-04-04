<template>
    <div>
        <div v-for="(v, i) in attrs_origin" :key="i">
            <p v-if="ioc_attr(v)">
                <span>
                    {{ ioc_attr(v).attribute_type_name }}:&nbsp;&nbsp;
                </span>
                <span>
                    {{ ioc_attr(v).name }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'cake' ],
    computed: {
        coecs() {
            let src = this.productPina()
            return src.coecs ? src.coecs : [ ]
        },
        coec() {
            if (this.coecs && this.cake) {
                let res = { }
                this.coecs.map(e => {
                    if (e.product_uuid == this.cake.uuid) {
                        res = e
                    }
                }); 
                return res
            } return { }
        },
        attrs_origin() {
            return this.cake && this.cake.attributes_relations ? this.cake.attributes_relations : [ ]
        },
        attrs() {
            if (this.coec) return this.coec.attribute ? this.coec.attribute : [ ];
            return [ ]
        }
    },
    methods: {
        ioc_attr( option ) {
            let res = null
            this.attrs.map( _ar => {
                if (_ar == option.uuid) {
                    res = option
                }
            })
            return res
        }
    }
}
</script>