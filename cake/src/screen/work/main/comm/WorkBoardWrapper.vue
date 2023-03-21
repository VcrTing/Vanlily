<template>
    <div class="fx-l">
        <div class="w-10">&nbsp;</div>
        <div class="fx-1 scroii-wrapper" :id="'scroii_' + pk">
            <div class="fx-l fx-t">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'pk', 'idx' ],
    emits: [ 'scroii' ],
    data() {
        return {
            move_pk: '', x: 0, is_controed: false
        }
    },
    watch: {
        x(n) { 
            this.sign(n) 
        }
    },
    mounted() {
        const _this = this
        const dom = document.getElementById('scroii_' + this.pk)
        if (dom) { 
            dom.addEventListener('scroll', function(e) {
                const tar = e.target; 
                
                _this.x = tar ? tar.scrollLeft : 0
            })
        }
    },
    methods: {
        sign(n) { this.$emit('scroii', n, ) },

        scroiiTo(v = 0, pk_scroiier) {
            // console.log('pk_scroiier =', pk_scroiier, ' my idx =', this.idx)
            this.is_controed = true
            const dom = document.getElementById('scroii_' + this.pk)
            // console.log('scroii v =', this.pk)
            if (dom) { dom.scrollLeft = v; }
        }
    }
}
</script>