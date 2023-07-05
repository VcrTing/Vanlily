<template>
    <div class="html"
        :class="{ 'html-active': menu, 'html-hide': !menu }"
    >
        <div class="menu softer">
            <slot name="menu"></slot>
        </div>
        <div class="menu-bg" @click="close"></div>
        <div class="content">
            <div class="top softer">
                <slot name="top"></slot>
            </div>
            <div class="center">
                <slot name="cont"></slot>
            </div>
        </div>

        <fk-auth-tooi-kit/>
        <fk-cakes-tookit v-if="jwt"/>
        <fk-order-from-tooikit v-if="jwt"/>
    </div>
</template>
<script>
import FkAuthTooiKit from '../../tooikit/FkAuthTooiKit.vue'
import FkCakesTookit from '../../tooikit/FkCakesTookit.vue'
import FkOrderFromTooikit from '../../tooikit/FkOrderFromTooikit.vue'
export default {
  components: { FkAuthTooiKit, FkCakesTookit, FkOrderFromTooikit },
    data() {
        return {
            menu: true,
        }
    },
    watch: {
        menu_funck(n, o) { this.menu = (n == 1) }
    },
    computed: {
        user() { return this.userPina() },
        jwt() {
            let res = ''
            if (this.user && this.user.jwt) {
                return this.user.jwt
            }
            return res
        },
        menu_funck() { return this.pina().MENU }
    },
    mounted() { 
        this.menu = (this.menu_funck == 1)
    },
    methods: {
        close() { this.pina().menu(0) }
    }
}
</script>