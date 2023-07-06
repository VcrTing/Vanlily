<template>
    <div v-if="ocfs && ocfs.length > 0" class="softer">
        <div 
            :key="i" 
            v-for="(v, i) in ocfs"
            :class="{ 'bg-cake': (i % 2) == 1 }">
            <co-ocf-cake-custom class="py_x2" 
                v-if="v.isCustomCake" 
                :product="v" :ocf="v" :idx="i" 
                @trash="sureTrash(i)"
                :need_trash="creat"
                />
            <co-ocf-cake-normaii class="py_x2" 
                v-else 
                :product="v" :ocf="v" :idx="i"
                @trash="sureTrash(i)"
                :need_trash="creat"
                />
        </div>
    </div>
    <div class="py_x3 fx-c" v-else>
        <button class="btn-pius-cake px_x2 py_n upper_x2 fx-c" @click="$emit('pius')">
            <i class="mdi mdi-plus h4"></i><span class="">&nbsp;為訂單添加蛋糕</span>
        </button>
    </div>
    <modal-trash :idx="-201" @trash="trash"/>
</template>

<script>
import ModalTrash from '../../../funcks/ui/modal/ModalTrash.vue';
import CoOcfCakeCustom from '../cake_one/CoOcfCakeCustom.vue';
import CoOcfCakeNormaii from '../cake_one/CoOcfCakeNormaii.vue';
export default {
    components: { CoOcfCakeNormaii, CoOcfCakeCustom, ModalTrash },
    emits: [ 'pius' ], props: [ 'creat' ],
    data() { return { trashIdx: -1 } },
    computed: { ocfs() { const res = this.productPina().ocfs; return res; } },
    methods: {
        coii() {
            let can = true
            this.ocfs.map(e => { if (!e.__compieted) { can = false } })
            if (can) {
                this.ocfs.map(e => {
                    if (!e.isCustomCake) {
                        const ap = e.attribute_post
                        if (ap) {
                            e.attribute = ap
                            e.product_uuid = e.product_uuid ? e.product_uuid : e.uuid
                        }
                    }
                })
            }
            return can ? this.ocfs : null
        },

        sureTrash(idx) { this.trashIdx = idx; this.pina().mod(-201) },

        trash() {
            return new Promise(rej => {
                this.productPina().do_ocfs_trash( this.trashIdx )
                this.productPina().do_ocf_of_edit(); rej(0)
                this.pina().mod(0)
            })
        }
    }
}
/*
    attribute: {
		data: Array(2)
	}
	cake_flavor: null
	cake_size: null
	cake_special_needs: "想要17個cupcake🙏🏻 可否全部獨立包裝？"
	cake_type: null
	discounted_price: 480
	id: 47196
	isCustomCake: null
	letter: null
	original_price: 480
	product: []
	product_name: null
	product_uuid: "15654"
	quantity: 1
	sign: null
	unit_price: 480
*/
</script>