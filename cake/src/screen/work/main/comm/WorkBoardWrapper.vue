<template>
    <div class="fx-l">
        <div class="w-10">&nbsp;</div>
        <div 
            class="fx-1 scroii-wrapper" 
            :class="{ 'scroiibar': !_kiii_scroiibar, 'scroiibarno': _kiii_scroiibar }" 
            :id="'scroii_' + pk"
            >
            <div class="fx-l fx-t">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'pk', 'idx', '_kiii_scroiibar' ],
    emits: [ 'scroii', 'touchEnd' ],
    data() {
        return {
            move_pk: '', x: 0, is_controed: false, w: 0,

            mouse: false, 
            mx: 0, mx_save: 0, 
            my: 0, my_save: 0
        }
    },
    watch: {
        x(n) { 
            this.sign(n) 
            // if (this.w <= (n + 2)) { this.$emit('touchEnd', this.w) }
        },
        mx(n) {
            const res = n + this.x

            if (this.x <= 0) {
                (n >= 0) ? this.sign(res) : undefined
            } 
            else if (this.x >= this.w) {
                (n <= 0) ? this.sign(res) : undefined
            } 
            else { this.sign(res) }
        },
        my(n) {
            // console.log('移動 Y =', n)
        }
    },
    mounted() {
        let _this = this
        const dom = document.getElementById('scroii_' + this.pk)
        if (dom) { 
            dom.addEventListener('scroll', function(e) { _this.x = e.target ? e.target.scrollLeft : 0 })
            this.w = dom.scrollWidth

            dom.addEventListener('mousemove', (ev) => { if (_this.mouse) { _this.recordMouse(ev) } })
            dom.addEventListener('mousedown', (ev) => { _this.mx = 0; _this.my = 0; _this.mouse = true; })
            dom.addEventListener('mouseup', (ev) => { _this.mouse = false; _this.mx = 0; _this.my = 0; })
        }
    },
    methods: {
        recordMouse(ev) {
            return new Promise(rej => {

                const _x = ev.x - this.mx_save
                if (_x > 0.5) { this.mx -= 4 } 
                else if ( _x < -0.5) { this.mx += 2 }
                this.mx_save = ev.x

                /*
                const _y = ev.y - this.my_save
                if (_y > 0.5) { this.my -= 1 } 
                else if ( _y < -0.5) { this.my += 1 }
                this.my_save = ev.y
                */

                rej( 0 )
            })
        },


        sign(n) { this.$emit('scroii', n, ) },

        scroiiByIndex(idx, count) {
            const _w = this.w / count
            this.scroiiTo( _w * (idx) )
        },

        scroiiTo(v = 0, pk_scroiier) {
            this.is_controed = true
            const dom = document.getElementById('scroii_' + this.pk)
            if (dom) { dom.scrollLeft = v; }
        }
    }
}
</script>