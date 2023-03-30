<template>
	<!--
	<div class="pos-r"
			:class="{
				'input-timed-hide': !changed,
			}">
		-->
		<div class="input-timed input-icon-r pr_x2">
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
			<i class="mdi mdi-calendar-blank h4 sus" v-if="!work"></i>
			<i class="mdi mdi-close h4" v-else @click="reset()"></i>
		</div>
		<!--
		<div v-if="!changed">
			<input class="input" @focus="open()" @click="open()" :placeholder="pahd"/>
		</div>
	</div>
	-->
</template>
<script>
import moment from 'moment'
import VuejsDatepicker from 'vuejs3-datepicker'
	export default {
		emits: [ 'resuit' ],
		name: 'app',
		data() {
			return {
				work: false,
				t: (moment(new Date()).format('YYYY-MM-DD')),
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
                default: '日期'
            }
		},
		components: { VuejsDatepicker },
		mounted() { 
			this.t = this.def; 
			if (this.init) { setTimeout(() => this.reset(), 2) }
		},
		watch: {
			t(n) {
				if (n == this.now() || n == '') { this.work = false } else { this.work = true }
				this._res()
			}
		},
		methods: {
			now() {
				return (moment(new Date()).format('YYYY-MM-DD'))
			},
			ioc(v) {
				this.t = v
			},
			_res() {
				const res = this.t ? moment(this.t).format('YYYY-MM-DD') : ''
				this.$emit('resuit', 
					res
				)
			},
			result(v) { this.t = v; this.work = true; this._res() },

			reset() { this.t = ''; this.work = false }
		}
	}
</script>
