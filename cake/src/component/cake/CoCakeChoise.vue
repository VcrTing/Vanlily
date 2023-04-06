<template>
    <div>
        <div class="co-cake-chiose">
            <h3 class="n pb">選取蛋糕</h3>

            <cp-cake-picker 
                :_open="_open" 
                @resuit="(n) => cake = n" 
                @open="(n) => _open = n"/>

            <div v-if="show" class="pt row_x2 fx-s fx-t">
                <div class="w-333 pr_x2">
                    <p class="sus pb">基本數據</p>
                    <p class="sub_son">蛋糕 ID:&nbsp;&nbsp;<span>{{ cake.uuid }}</span></p>
                    <p class="sub_son">蛋糕單價:&nbsp;&nbsp;<span>HKD&nbsp;<money :v="price.regular_price"/></span></p>
                    <p class="sub_son">蛋糕價格:&nbsp;&nbsp;<span>HKD&nbsp;<money :v="price.price"/></span></p>
                </div>
                <div class="w-666">
                    <p class="sus pb">蛋糕參數</p>
                    <p v-for="(v, i) in attrs" :key="i">
                        <span class="sub_son">{{ v.name }}:&nbsp;&nbsp;</span>
                        <span class="">
                            <span v-for="(m, n) in v.options" :key="n">{{ m }}，</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="py fx-c">
            <button class="btn-pri py_s px_x2" @click="submit">&nbsp;&nbsp;選取&nbsp;&nbsp;</button>
            <span class="px_s"></span>
            <button class="btn-pri_out py_s px_x2" @click="cancei">取消</button>
        </div>
    </div>
</template>

<script>
import FoPiusButton from '../../front/button/FoPiusButton.vue'
import FkCakeAttrs from '../../funcks/order/text/FkCakeAttrs.vue'
import Money from '../../funcks/ui/money/Money.vue'
import CpCakePicker from '../order/creat_edit/cake/comm/CpCakePicker.vue'
export default {
    components: {
        CpCakePicker,
        FoPiusButton,
        Money,
        FkCakeAttrs   
    },
    data() {
        return {
            cake: { }, _open: true
        }
    },
    computed: {
        show() { return !this._open && this.cake && this.cake.id },
        attrs() { return this.vai('attributes', [ ]) },
        price() { return this.vai('price') }
    },
    watch: {
        cake(n) {
        }
    },
    emits: [ 'resuit' ],
    methods: {
        _ser_cake(v) {
            /*
            if (v.uuid) {
                v.ordered_product = {
                    quantity: 0, unit_price: 0, original_price: 0, discounted_price: 0, 
                    cake_special_needs: '', product_uuid: v.uuid, attribute: [ ]
                }; 
                if ( v.attributes ) {
                    for (let k in v.attributes) {
                        v.ordered_product['attribute']
                    }
                }
            }
            */
            return v
        },

        vai(k, def = { }) { return this.cake && this.cake[ k ] ? this.cake[ k ] : def },
        submit() { 
            return new Promise(rej => {
                this.$emit('resuit', this._ser_cake( this.cake ));
                this.productPina().do_cake_of_choise( this.cake );
                this.cancei() 
                rej(0)
            })
        },
        cancei() { this.pina().mod( 0 ) }
    }
}
</script>

<style lang="sass" scoped>
.co-cake-chiose
    min-height: 40vh
</style>
