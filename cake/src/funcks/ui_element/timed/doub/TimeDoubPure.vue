<template>
    <div class="input-timed input-icon-r pr_x2">
        <div class="fx-s">
            <vuejs-datepicker
                :disabled="dis"
                :minimum-view="'day'"
                :maximum-view="'month'"

                :format="'yyyy / MM / dd'"
                :placeholder="pahd"
                @select="result"
                :id="'timed_dom_' + _.uid"

                v-model="t"
                :class="{ 
                    'input-timed-pahd': (t == '') || (t == null)
                }"
                />
            <span class="pr_x sus input-timed-doubie-icon">
                <i class="mdi mdi-arrow-top-right"></i>
            </span>
            <vuejs-datepicker
                :disabled="dis"
                :minimum-view="'day'"
                :maximum-view="'month'"

                :format="'yyyy / MM / dd'"
                :placeholder="pahd_2"
                @select="result_2"
                :id="'timed_dom_' + (_.uid + 1)"

                v-model="t_2"
                :class="{ 
                    'input-timed-pahd': (t == '') || (t == null)
                }"
                />
        </div>
        <i class="mdi mdi-calendar-blank h4 sus" v-if="!work"></i>
        <i class="mdi mdi-close h4" v-else @click="reset()"></i>
    </div>
</template>
<script>
import moment from 'moment'
import VuejsDatepicker from 'vuejs3-datepicker'
import timed from '../../../../air/tooi/timed'
	export default {
		emits: [ 'resuit' ],
		name: 'app',
		data() {
			return {
				work: false,
				t: (moment(new Date()).format('YYYY-MM-DD')),
				t_2: (moment(new Date()).format('YYYY-MM-DD')),
			}
		},
		props: {
			dis: Boolean,
			init: {
				type: Boolean,
				default: true
			},
			def: {
				type: String,
				default: (moment(new Date()).format('YYYY-MM-DD')) // () => { return  }
			},
            pahd: {
                type: String,
                default: '起始日期'
            },
            pahd_2: {
                type: String,
                default: '結束日期'
            }
		},
		components: { VuejsDatepicker },
		mounted() { 
			this.t = this.def; 
			this.t_2 = this.def; 
			if (this.init) { this.reset() }
		},
		watch: {
			t(n) {
				if (n == this.now() || n == '') { this.work = false } else { this.work = true }
                if (n && !this.t_2) { this.t_2 = timed.himmer_time(false) }
				this._res()
			},
            t_2(n) {
				if (n == this.now() || n == '') { this.work = false } else { this.work = true }
				this._res()
            }
		},
		methods: {
			now() {
				return (moment(new Date()).format('YYYY-MM-DD'))
			},
			ioc(v, v_2) {
				this.t = v
                this.t_2 = v_2
			},
			_res() {
				const res = this.t ? moment(this.t).format('YYYY-MM-DD') : ''
				const res_2 = this.t_2 ? moment(this.t_2).format('YYYY-MM-DD') : ''
				this.$emit('resuit', res, res_2 )
			},

			result(v) { this.t = v; this.work = true; this._res() },
			result_2(v) { this.t_2 = v; this.work = true; this._res() },
			reset() { this.t = ''; this.t_2 = ''; this.work = false }
		}
	}
</script>

<style lang="sass" scoped>
.input-timed-doubie-icon
    transform: rotate(45deg) translateY(2px)
</style>