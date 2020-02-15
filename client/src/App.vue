<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

/* Predifined */
.bg-primay {
	background: #76bbc7;
	color: #fff;
}
.bg-secondary {
	background: #536564;
	color: #fff;
}
.bg-tertiary {
	background: #d5dedc;
}

/* Resets */
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: sans-serif;
}
input:focus, textarea:focus, select:focus{
        outline: none;
}

/* Additionals */
#app {
	max-width: 1080px;
	width: 100%;
	margin: 0 auto;
	position: relative;
	padding: 0 10px;
}

form {
	font-size: 18px;
	width: 100%;
}

body, html {
	background: #ececec;
}

input {
	padding: 10px 5px;
	margin: 10px 0;
	width: 100%;
	border: 1px solid #fff;
	border-radius: 8px;
}

a.submit,input[type="submit"] {
	display: block;
	padding: 10px 5px;
	margin: 3px 0;
	cursor: pointer;
}
</style>
