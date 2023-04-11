<template>
  
</template>

<script>
export default {
    data() {
        return {
            imit: 100, items: [ ],
            star: 1, has: true, errNum: 0
        }
    },
    mounted() {
        this.many()
    },
    methods: {
        async _many() {
            let res = null
            try {
                res = await this.serv.cake.many(this, this.star)
            } catch(err) {
                this.errNum += 1
                if (this.errNum < 3) { await this._many(); }
                return null
            }
            res = (res && res.data) ? res.data : [ ]
            if (res.length >= this.imit) {
                res.map(e => this.items.push(e)); this.star += 1; this.has = true
                this.errNum = 0
                await this._many()
            } else {
                this.has = false
            }
            return null
        },
        many() {
            const _this = this
            return new Promise(async rej => {
                _this.items = [ ]
                _this.has = true
                await _this._many();
                if (this.items.length > 0 && !this.has) {
                    this.productPina().do_products( this.items )
                }
                rej(0)
            })
        }
    }
}
</script>