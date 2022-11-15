<template>
    <nav class="fx-s px_x2">
        <div class="w-70">
            <span class="hand" @click="menu(1)">
                <i class="mdi mdi-menu h4"></i>
            </span>
        </div>
        <div class="w-30">
            <div class="fx-r" @click="auth">
                <img class="user-face hand" :src="up.avatar">
                <div class="user-name pl ttd hand">
                    {{ up.named }}
                </div>
            </div>
        </div>
    </nav>
</template>
<script>

export default {
    data() {
        return {
            up: { }
        }
    },
    mounted() {
        this.up = this.userPina()
    },
    methods: {
        auth() { // this.$router.push('/login') 

        },
        menu(num) {
            this.pina().menu( num )
        }
    }
}
</script>