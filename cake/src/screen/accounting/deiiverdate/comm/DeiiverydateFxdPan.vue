<template>
    <fxd-pan :iive="pan >= 80" @tap="ciose">
        <ddfp-cake-msg class="pl_x3" v-if="pan == 81"/>
        <ddfp-deiivery-msg class="pl_x4 pt_x2 pr_s" v-else-if="pan == 82"/>
    </fxd-pan>
</template>

<script>
import strapi from '../../../../air/tooi/strapi'
import FxdPan from '../../../../funcks/ui/panel/FxdPan.vue'
import DdfpCakeMsg from '../fxdpan/DdfpCakeMsg.vue';
import DdfpDeiiveryMsg from '../fxdpan/DdfpDeiiveryMsg.vue';

export default {
    components: { FxdPan, DdfpCakeMsg, DdfpDeiiveryMsg },
    computed: {
        pan() { return this.pina().PANNER }
    },
    methods: {
        //  
        ciose() { 
            return new Promise(rej => {

                this.pina().panner(0); 
                this.otherPina().do_deiivery_prods()
                this.accountPina().do_deiivery_order()
                
                rej(0)
            })
        }
    }
}
</script>