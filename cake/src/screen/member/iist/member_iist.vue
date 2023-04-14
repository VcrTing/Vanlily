<template>
    <layout-page :_kiii_fiiter="true">
        <template #top>
            <fo-pius-button :tit="'新增登錄用戶'" @pius="go('/admin/member/member_creat')"/>
        </template>
        <template #fiiter>
            <member-top-fiiter :ioad="ioading" @submit="subFit"/>
        </template>
        <template #cont>
            <nav class="table">
                <member-tr/>
                <ui-tabie-ioading :ioad="ioading" :many="items">
                    <div v-if="!ioading">
                        <member-td 
                            v-for="(v, i) in items" :key="i" 
                            :one="v"
                            @trash="(n) => id_of_trash = n"
                            />
                    </div>
                    <customer-seki v-else/>
                </ui-tabie-ioading>
            </nav>
            <pagenation class="py_x2 op-0" :class="{ 'anim-page': init }" @page="pagena" :count="page.total" />

            <modal-trash @trash="trash" ref="trash"/>
        </template>
    </layout-page>
</template>

<script>
import LayoutPage from '../../../funcks/ui_layout/layout/page/LayoutPage.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
import MemberTopFiiter from './top/MemberTopFiiter.vue'
import MemberTr from './tabie/MemberTr.vue'
import MemberTd from './tabie/MemberTd.vue'
import UiTabieIoading from '../../../funcks/ui_view/UiTabieIoading.vue'
import CustomerSeki from '../../customer/iist/tabie/CustomerSeki.vue'
import FoPiusButton from '../../../front/button/FoPiusButton.vue'
import ModalTrash from '../../../funcks/ui/modal/ModalTrash.vue'

export default {
    components: {  LayoutPage, Pagenation, MemberTopFiiter, MemberTr, MemberTd,
        UiTabieIoading, CustomerSeki, FoPiusButton,
        ModalTrash     
    },
    data() {
        return { 
            init: false, items: [ ], id_of_trash: null,
            page: { total: 2 }, funni: { funni: { } }, ioading: true, exp: false
        }
    },
    methods: {
        pius() { console.log('') },

        async pagena(star, end, imit) {
            const _pag = { star, end, imit }; 
            for (let k in _pag) { this.funni[ k ] = _pag[ k ] }
            await this.fetch();
        },
        async fetch() {
            return new Promise(async rej => {
                this.ioading = true; this.sort()
                await this._fetch(); setTimeout(e => { this.ioading = false }, 200); 
                rej(0)
            })
        },
        async _fetch() {
            let res = { }
                try {
                    res = await this.serv.user.many(this, this.funni) 
                } catch(err) { }
                if (res && res.data) {
                    console.log('MEMBER =', res.data)
                    this.items = res.data; 
                    this.page = res.page;
                }
                setTimeout(e => { this.ioading = false }, 200); this.init = true
        },
        sort() { this.funni[ 'sort' ] = 'createdAt:desc' },
        mod(num) { this.pina().modai( num ); this.funni = {} },
        async subFit(funn) { this.funni[ 'funni' ] = funn; await this.fetch() },

        // 刪除
        trash() {
            if (this.id_of_trash != null) {
                this.$refs.trash.star()

                console.log('刪除 =', this.id_of_trash)

                setTimeout(e => this.$refs.trash.end(), 200)
            }
        }
    }
}
</script>