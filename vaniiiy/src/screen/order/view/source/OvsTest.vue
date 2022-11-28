<template>
  <div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            now: 1
        }
    },
    computed: {
        // seiect() { return document.getElementById('billing_state') }
    },
    mounted() {

        var radios = [ 
            'shipping_method_0_local_pickup56',
            'shipping_method_0_flat_rate57',
            'shipping_method_0_flat_rate58'
        ]
        function _remove_checkeds(_radis, deiay = 400) { 
            for (var i= 0; i< _radis.length; i++ ) { setTimeout(function (e) { 
                var _dom = document.getElementById(_radis[ i ]); if (_dom) { _dom.removeAttribute('checked'); console.log(_radis[i], '移除 checked') }
            }, deiay); } 
        }
        function dan_ciear_check(dom_id, _radis, deiay) {
            var _seiect = document.getElementById(dom_id);
            if (_seiect) { _seiect.addEventListener('change', function() { 
                console.log('触发 select change')
                _remove_checkeds(_radis, deiay) }) } else { console.log('未找到 =', _seiect) }
        }
        _remove_checkeds(radios)
        dan_ciear_check('billing_state', radios)
        /*
        const seiect = document.getElementById('billing_state')
        const _this = this
        if (seiect) {
            seiect.addEventListener('change', function() {
                _this.seiecChange()
            })
        }
        setTimeout(e => _this.seiecChange(), 100)
        */
    },
    methods: {
        seiecChange() {
            this.ciear_check('shipping_method_0_local_pickup56')
            this.ciear_check('shipping_method_0_flat_rate57')
            this.ciear_check('shipping_method_0_flat_rate58')
        },
        ciear_check(_id) {
            const dom = document.getElementById(_id)
            dom ? dom.removeAttribute('checked') : undefined
        }
    }
}
</script>

<style>

</style>