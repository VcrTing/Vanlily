<template>
	<nav class="input-minute">
		<select v-model="hour">
			<option v-for="(v, i) in hour" :key="i" :value="v">{{v}}</option>
		</select>
		<span>:</span>
		<select v-model="minut">
			<option v-for="(v, i) in minut" :key="i" :value="v">{{v}}</option>
		</select>
	</nav>
</template>

<script>
export default {
	data() {
		return {

			now_h: 0, now_m: 0 
		}
	},
	computed: {
		hour() { return [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ] },
		minut() {
			let res = [ ]
			for (let i= 0; i<60; i++) {
				res.push(i + 1)
			}; return res
		}
	},
	methods: {

	}
}
</script>

<style>

</style>