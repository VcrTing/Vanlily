<template>
    <div>
        <p>
            特別要求:&nbsp;&nbsp;
            <span v-if="coec && coec.cake_special_needs">{{ coec.cake_special_needs }}</span>
            <span v-else class="sus">(無需求)</span>
        </p>
        <p>
            生日牌:&nbsp;&nbsp; 
            <span>{{ coec.sign }}</span>
        </p>
        <p>
            字粒:&nbsp;&nbsp; 
            <span>{{ coec.letter }}</span>
        </p>
        <p>
            數量:&nbsp;&nbsp; 
            <span>{{ coec.quantity }}</span>
        </p>

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
    }
}
</script>