<template>
    <div class="auth-wrapper">
        <div class="auth-img"
        
            :style="{ 
                
                'background-image': 'url(' + im + ')' }"
        ></div>
    
        <div class="auth-cont fx-s">
            
            <div class="auth-panel">
                <nav>
                    <logo class="auth-logo"></logo>
                    <slot></slot>
                </nav>
            </div>
            <div class="w-60">
                <!--img src="../../../assets/img/Air.png"/-->
            </div>
        </div>
    </div>
</template>

<script>
import bg from '../../../assets/img/Air.png'
import Logo from '../../../funcks/ui_static/logo/Logo.vue'
export default {
  components: { Logo },
    data() { return { im: '' } },
    mounted() { this.im = bg }
}
</script>
