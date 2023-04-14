<template>
    <div class="td item mb">
        <div class="w-22">
            <span v-if="one.display_name">{{ one.display_name }}</span>
            <span v-else>{{ one.username }}</span>
        </div>
        <div class="w-29">{{ one.email }}</div>
        <div class="w-40">
            <!--
            <comp-td-roie-edit :pans="one.roie"/>
            -->
            <co-roie-td-view v-if="one.role && one.role.type" :def="one.role.type"/>
            
        </div>
        <div class="w-9 fx-c">
            <div v-if="!hideEdit">
                <button @click="edit()" class="pri_son">
                    編輯
                </button>
                <!--
                <span>&nbsp;&nbsp;</span>
                <button @click="trash()" class="err_son">
                    刪除
                </button>
                -->
            </div>
        </div>
    </div>
</template>

<script>
import CoRoieTdView from '../../../../component/roie/CoRoieTdView.vue'
import CompTdRoieEdit from '../../../../component/roie/for_td/CompTdRoieEdit.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'

export default {
    components: {
        UiTableOpera, CompTdRoieEdit, CoRoieTdView
    },
    props: [ 'one' ],
    emits: [ 'trash' ],
    methods: {
        edit() {
            return new Promise( rej => {
                this.memberPina().do_member( this.one )
                this.go('/admin/member/member_edit')
                rej(0)
            })
        },
        trash() {
            return new Promise( rej => {
                this.pina().mod(-200); 
                this.$emit('trash', this.one.id)
                rej(0)
            })
        }
    },

    computed: {
        roie() { return this.userPina().roie },

        // admin
        // authenticated
        canEdit() {
            return this.roie == 'boss' || this.roie == 'admin'
        },
        hideEdit() {
            return this.roie == 'authenticated'
        }
    }
}
</script>