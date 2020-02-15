<template>
	<div class="login-container">
		<form>
			<input type="text" ref="username" placeholder="username">
			<input type="password" ref="password" placeholder="password">
			<input type="text" ref="fullname" placeholder="fullname">
			<select ref="gender">
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
			<input type="number" ref="age" placeholder="age">
			<input type="submit" @click="createUser()" value="Submit">
		</form>
	</div>
</template>
<script>
import axios from 'axios';
export default {
	name: 'AddUser',
	props: {
	},
	data() {
		return {
			formData: {}
		}
	},
	mounted() {
	},
	methods: {
		createUser() {
			try {
				this.formData.username = this.$refs.username.value;
				this.formData.password = this.$refs.password.value;
				this.formData.fullName = this.$refs.fullname.value;
				this.formData.gender = this.$refs.gender.value;
				this.formData.age = this.$refs.age.value;
				axios.post('/api/v1/users', this.formData)
				.then(res => { console.log(res) });
			} catch(err) {
				console.log(err);
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
	padding: 20px;
	border: 1px solid #ececec;
}
</style>
