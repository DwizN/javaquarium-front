
<template>
<div>
<el-input class="py-1" type="text" placeholder="toto" v-model="form.identifiant" clearable><template slot="prepend">Username : </template></el-input>
<el-input class="py-1" type="password" placeholder="toto" v-model="form.password" clearable><template slot="prepend">Password : </template></el-input>
<button @click="connect()">Authentifier</button>
</div>
</template>
<script type="text/javascript" src="./Login.source.js"></script>