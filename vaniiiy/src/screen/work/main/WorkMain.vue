<template>
    <layout-ban :header="'行事板'">
        <template v-slot:filter>
            <work-main-top-filter/>
        </template>

        <template v-slot:cont>
            <div class="card-board">
                <p class="h3 pt pri_light_son">
                    {{ funnel.send_date }}
                </p>
                <work-main-tr class="px_x2"></work-main-tr>
                <work-main-board 
                    v-for="(v, i) in datas" :key="i" 
                    :_timed="v.timed" 
                    :_items="v.boards"></work-main-board>
            </div>
        </template>
    </layout-ban>
</template>

<script>
import LayoutBan from '../../../funcks/ui_layout/layout/page/LayoutBan.vue'
import WorkMainBoard from './board/WorkMainBoard.vue'
import WorkMainTr from './board/WorkMainTr.vue'
import WorkMainTopFilter from './top/WorkMainTopFilter.vue'
export default {
  components: { LayoutBan, WorkMainTopFilter, WorkMainBoard, WorkMainTr },
    data() {
        return {
            funnel: { send_date: '2021-12-12' },
            datas: [
                { timed: '10:00', boards: [
                    {
                        id: 1, send_typed: 'send', source: 'Website',
                        number: '6332', tit: 'BB版Number Cake（二磅，1字）',
                        addr: { addr: '工厂' }, mark: '#20229',
                        get_timed: { start: '11:00', end: '12:00' },
                        status: 0, member: { named: 'Kate LO', phoned: '66378874' },
                        send: { cost: 120, named: 'Emma', phoned: '5467783' },
                        get_time: { start: '10:13', end: '10:30' }
                    },
                    {
                        id: 1, send_typed: 'send', source: 'Website',
                        number: '6332', tit: 'BB版Number Cake（二磅，1字）',                    
                        addr: { addr: '工厂' }, mark: '#20229',
                        get_timed: { start: '11:00', end: '12:00' },
                        status: -1, member: { named: 'Kate LO', phoned: '66378874' },
                        send: { cost: 120, named: 'Emma', phoned: '5467783' },
                        get_time: { start: '10:13', end: '10:30' }
                    },
                    {
                        id: 1, send_typed: 'get_tun', source: 'Website',
                        number: '6332', tit: 'BB版Number Cake（二磅，1字）',                    
                        addr: { addr: '工厂' }, mark: '#20229',
                        get_timed: { start: '11:00', end: '12:00' },
                        status: -1, member: { named: 'Kate LO', phoned: '66378874' },
                        send: { cost: 120, named: 'Emma', phoned: '5467783' },
                        get_time: { start: '10:13', end: '10:30' }
                    },
                    {
                        id: 1, send_typed: 'get_other', source: 'Website',
                        number: '6332', tit: 'BB版Number Cake（二磅，1字）',                    
                        addr: { addr: '工厂' }, mark: '#20229',
                        get_timed: { start: '11:00', end: '12:00' },
                        status: -1, member: { named: 'Kate LO', phoned: '66378874' },
                        send: { cost: 120, named: 'Emma', phoned: '5467783' },
                        get_time: { start: '10:13', end: '10:30' }
                    },
                    {
                        id: 1, send_typed: 'get_other', source: 'Website',
                        number: '6332', tit: 'BB版Number Cake（二磅，1字）',                    
                        addr: { addr: '工厂' }, mark: '#20229',
                        get_timed: { start: '11:00', end: '12:00' },
                        status: 1, member: { named: 'Kate LO', phoned: '66378874' },
                        send: { cost: 120, named: 'Emma', phoned: '5467783' },
                        get_time: { start: '10:13', end: '10:30' }
                    },
                    {
                        id: 1, send_typed: 'gogovan', source: 'Website',
                        number: '6332', tit: 'BB版Number Cake（二磅，1字）',                    
                        addr: { addr: '工厂' }, mark: '#20229',
                        get_timed: { start: '11:00', end: '12:00' },
                        status: -1, member: { named: 'Kate LO', phoned: '66378874' },
                        send: { cost: 120, named: 'Emma', phoned: '5467783' },
                        get_time: { start: '10:13', end: '10:30' }
                    },
                ]},

                { timed: '12:00', boards: [
                    {
                        id: 1, send_typed: 'send', source: 'Website',
                        number: '6332', tit: 'BB版Number Cake（二磅，1字）',
                        addr: { addr: '工厂' }, mark: '#20229',
                        get_timed: { start: '11:00', end: '12:00' },
                        status: 0, member: { named: 'Kate LO', phoned: '66378874' },
                        send: { cost: 120, named: 'Emma', phoned: '5467783' },
                        get_time: { start: '10:13', end: '10:30' }
                    },
                    {
                        id: 1, send_typed: 'gogovan', source: 'Website',
                        number: '6332', tit: 'BB版Number Cake（二磅，1字）',                    
                        addr: { addr: '工厂' }, mark: '#20229',
                        get_timed: { start: '11:00', end: '12:00' },
                        status: -1, member: { named: 'Kate LO', phoned: '66378874' },
                        send: { cost: 120, named: 'Emma', phoned: '5467783' },
                        get_time: { start: '10:13', end: '10:30' }
                    },
                ]},

                { timed: '15:00', boards: [ ]}
            ]
        }
    }
}
</script>

<style>

</style>