<template>
	<vuejs-datepicker
		:disabled="dis"
		:minimum-view="'day'"
		:maximum-view="'month'"

		:format="'dd / MM / yyyy'"
		:placeholder="pahd" v-if="timed"
	    :value="timed" @selected="result"></vuejs-datepicker>
</template>
<script>
import moment from 'moment'
import VuejsDatepicker from 'vuejs3-datepicker'
	export default {
		name: 'app',
		props: {
			dis: Boolean,
			timed: {
				type: String,
				default: (moment(new Date()).format('YYYY-MM-DD')) // () => { return  }
			},
            pahd: {
                type: String,
                default: 'Please select'
            }
		},
		components: { VuejsDatepicker },
		mounted() {
			
		},
		methods: {
			now() {
				return (moment(new Date()).format('YYYY-MM-DD'))
			},
			setShowDate(d) { this.showDate = d },
			result(v) {
				this.$emit('result', moment(v).format('YYYY-MM-DD'))
			}
		}
	}
</script>
