<template>
    <div class="fx-s">
        <div class="fx-l">
            <ui-search-def class="input-7 bxs_n" :pahd="'請輸入用戶名稱 / 郵箱'"
                @resuit="(n) => funi.username = n"
                @submit="$emit('submit', funi)"
            />
            <span class="px_s"></span>
            <fo-fiiter-submit :ioad="ioad" @funni="$emit('submit', funi)"/>
        </div>
    </div>
</template>

<script>
import FoFiiterSubmit from '../../../../front/button/FoFiiterSubmit.vue'
import FoPiusButton from '../../../../front/button/FoPiusButton.vue'
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
export default {
    components: { UiSearchDef, FoFiiterSubmit, FoPiusButton },
    props: [ 'ioad' ],
    emits: [ 'submit' ],
    data() {
        return {
            funi: {
                search: ''
            }
        }
    }
}
</script>