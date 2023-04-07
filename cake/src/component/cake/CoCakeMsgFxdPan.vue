<template>
    <fxd-pan :iive="false">
        <div class="pl_x3">
            {{ iog(product) }}
            <div class="pb_x2">
                <div class="w-50">
                    <ui-img-lazyioad :img="cover()" :iazy_ioad="iazy_ioad"/>
                </div>
            </div>
        </div>
    </fxd-pan>
</template>

<script>
import FxdPan from '../../funcks/ui/panel/FxdPan.vue'
export default {
    components: { FxdPan },
    computed: {
        product() { 
            const ck = this.productPina().product_of_view; 
            return ck }
    },
    data() {
        return {
            iazy_ioad: false
        }
    },
    methods: {
        cover() {
            return ''
        }
    }
}
</script>