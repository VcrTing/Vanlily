<template>
	<nav>
		<nav>
			<input class="mp-hour" v-model="hour">
			<span>:</span>
			<input class="mp-minut" v-model="minut">
		</nav>
		<nav>
			
		</nav>
	</nav>
</template>
<script>
import moment from 'moment'
	export default {
		data() {
			return {
				hour: 12,
				minut: 30
			}
		},
		computed: {
			res() { 
				return this.hour + ':' + this.minut
			},
			hours() { return [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
			minuts() { let ms = [ ] 
				for(let i= 0; i < 60; i++ ) { ms.push(i) }; return ms
			}
		}
	}
</script>
