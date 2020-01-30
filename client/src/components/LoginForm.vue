<template>
	<div class="login-container">
	<h3 class="bg-secondary">Login</h3>
		<form class="bg-tertiary">
		<div class="field">
			<label>Username</label>
			<input type="text" placeholder="Username">
		</div>
		<div class="field">
			<label>Password</label>
			<input type="password" placeholder="Password">
		</div>
		<input class="bg-primay" type="submit" value="Login">
		</form>
	</div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
	width: 500px;
	max-width: 100%;
	margin: 0 auto;
	transform: translate(0, 50%);
}
.login-container h3 {
	padding: 10px;
}
form {
	padding: 10px;
}
</style>
