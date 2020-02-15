<template>
	<div class="login-container">
		<h3>About</h3>
		<ul>
			<li v-for="(rate, index) in ratings" :key="index">{{ rate }}</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'About',
	props: {
	},
	data() {
		return {
		ratings: 0
		}
	},
	mounted() {
		axios.get('/api')
		.then(res => { 
			this.ratings = res.data.message.data;
			console.log(res.data.message.data);
		})
		.catch(err => { 
			console.log(err);
		});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
	list-style-type: none;
}
</style>
