<template>
	<div class="login-container">
		<div v-for="user in users" :key="user._id" class="card">
			<h1>{{ user.fullName }}</h1>
			<p>{{ user.username }}</p>
			<p>{{ user.gender }}</p>
			<div class="btn-container">
				<a href="" class="submit">Update</a>
				<a class="submit">Delete</a>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'List',
	props: {
	},
	data() {
		return {
			users: []
		}
	},
	created() {
		axios.get('/api/v1/users')
		.then(res => { 
			this.users = res.data.message;
			console.log(this.users);
		})
		.catch(err => { 
			console.log(err);
		});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #1a1a1a;
	border-radius: 10px;
	text-align: center;
	cursor: pointer;
}
.btn-container {
	text-align: center;
}
.btn-container:after {
	content: '';
	width: 100%;
	display: inline-block;
}
a.submit {
	max-width: 200px;
	display: inline-block;
	text-decoration: none;
	border: 1px solid #1a1a1a;
	color: #1a1a1a;
	margin: 5px;
}
</style>
