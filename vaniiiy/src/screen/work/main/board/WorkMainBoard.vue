<template>
    <div>
        <ui-line-timed :timed="_timed"></ui-line-timed>
        <div class="pt px_x2">

            <div class="fx-s fx-t">
                <div class="w-12">&nbsp;</div>
                <div class="w-22 px_s">
                    <card-work 
                        v-for="(v, i) in many_send" :key="i" 
                        :header="'单号(' + v.number + ')'"
                        :tit="v.tit"
                        :status="v.status"
                        :_color="v.status ? 'dark' : 'thin'"
                    >
                        <template v-slot:cont>
                            <card-work-msg-addr
                                :addr="v.addr.addr"
                                :mark="v.mark"
                                :source="v.source"
                                :phoned="v.member.phoned"
                                :named="v.member.named"
                            />
                        </template>
                    </card-work>
                </div>
                <div class="w-22 px_s">
                    <card-work 
                        v-for="(v, i) in many_get_tunm" :key="i" 
                        :header="'单号(' + v.number + ')'"
                        :tit="v.tit"
                        :status="v.status"
                        :_color="'pri'"
                    >
                        <template v-slot:cont>
                            <card-work-msg-addr
                                :addr="v.addr.addr" :mark="v.mark"
                                :source="v.source"
                                :named="v.member.named" :phoned="v.member.phoned"
                            />
                        </template>
                        <template v-slot:sub>
                            <card-work-msg-send
                                :cost="v.send.cost" :named="v.send.named"
                                :phoned="v.send.phoned"
                                :start="v.get_time.start" :end="v.get_time.end"
                            />
                        </template>
                    </card-work>
                </div>
                <div class="w-22 px_s">
                    <card-work 
                        v-for="(v, i) in many_get_other" :key="i" 
                        :header="'单号(' + v.number + ')'"
                        :tit="v.tit"
                        :status="v.status"
                        :_color="'wine'"
                    >
                        <template v-slot:cont>
                            <card-work-msg-addr
                                :addr="v.addr.addr" :mark="v.mark"
                                :source="v.source"
                                :named="v.member.named" :phoned="v.member.phoned"
                            />
                        </template>
                        <template v-slot:sub>
                            <card-work-msg-send
                                :cost="v.send.cost" :named="v.send.named"
                                :phoned="v.send.phoned"
                                :start="v.get_time.start" :end="v.get_time.end"
                            />
                        </template>
                    </card-work>
                </div>
                <div class="w-22 px_s">
                    <card-work 
                        v-for="(v, i) in many_gogvan" :key="i" 
                        :header="'单号(' + v.number + ')'"
                        :tit="v.tit"
                        :status="v.status"
                        :_color="'cold'"
                    >
                        <template v-slot:cont>
                            <card-work-msg-addr
                                :addr="v.addr.addr" :mark="v.mark"
                                :source="v.source"
                                :named="v.member.named" :phoned="v.member.phoned"
                            />
                        </template>
                        <template v-slot:sub>
                            <card-work-msg-send
                                :cost="v.send.cost" :named="v.send.named"
                                :phoned="v.send.phoned"
                                :start="v.get_time.start" :end="v.get_time.end"
                            />
                        </template>
                    </card-work>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardWork from '../../../../funcks/ui/card/board/CardWork.vue'
import CardWorkMsgSend from '../../../../funcks/ui/card/board/inner/CardWorkMsgSend.vue'
import CardWorkMsgAddr from '../../../../funcks/ui/card/board/inner/CardWorkMsgAddr.vue'
import UiLineTimed from '../../../../funcks/ui_element/line/UiLineTimed.vue'
export default {
  components: { UiLineTimed, CardWork, CardWorkMsgAddr, CardWorkMsgSend },
    props: [ '_timed', '_items' ],
    computed: {
        many_send() { return this.funn('send')},
        many_get_tunm() { return this.funn('get_tun')},
        many_get_other() { return this.funn('get_other')},
        many_gogvan() { return this.funn('gogovan')},
    },
    data() {
        return {

        }
    },

    methods: {
        funn(_k) {
            let res = [ ]
            this._items.map(e => 
            {
                if (e.send_typed == _k) {
                    res.push( e )
                }
            })
            return res
        }
    }
}
</script>

<style>

</style>