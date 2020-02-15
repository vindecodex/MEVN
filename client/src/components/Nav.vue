<template>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/create/user">Create User</a></li>
			<li><a href="/user">User List</a></li>
		</ul>
	</nav>
</template>
<script>
export default {
	name: 'Nav'
}
</script>
<style scooped>
nav {
	width: 100%;
	height: 50px;
	background: #536564;
}
ul {
	text-align: center;
	list-style-type: none;
	position: relative;
}
ul:after {
	content: '';
	width: 100%;
	display: inline-block;
}
ul li {
	display: inline-block;
	line-height: 36px;
}
ul li a {
	display: block;
	text-decoration: none;
	padding: 5px 10px;
	color: #fff;
}
</style>
