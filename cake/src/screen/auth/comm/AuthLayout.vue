<template>
    <div class="auth-wrapper">
        <div class="auth-img"
            id="auth_bk_img"
            :style="{ 
                'background-image': 'url(' + im + ')' }"
        ></div>
    
        <div class="auth-cont fx-s fx-wp">
            
            <div class="auth-panel">
                <nav class="">
                    <logo class="auth-logo"></logo>
                    <slot></slot>
                </nav>
            </div>
            <div class="w-60"></div>
        </div>
    </div>
</template>

<script>
import bg from '../../../assets/img/Air.png'
import Logo from '../../../funcks/ui_static/logo/Logo.vue'

export default {
    components: { Logo },
    data() { return { im: bg } },
    mounted() { 
        const _this = this
        const dom = document.getElementById('auth_bk_img');
        document.onmousemove = (e) => _this.moveBk(e.clientX, e.clientY, dom);
    },
    methods: {
        moveBk(x, y, dom) {
            x = x ? (x / 300) : 1
            y = y ? (y / 50) : 1; y = 0 - y
            dom.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
        }
    }
}
</script>
