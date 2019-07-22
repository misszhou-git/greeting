<template>
	<el-container>
		<el-header>
			<el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="/welcome">欢迎</el-menu-item>
				<el-submenu index="2">
					<template slot="title">工作台</template>
					<el-menu-item index="/sayhello">问候短信</el-menu-item>
					<el-menu-item index="/economics">经济阅读</el-menu-item>
					<el-menu-item index="/affairs">时政要闻</el-menu-item>
					<el-submenu index="2-4">
						<template slot="title">金融</template>
						<el-menu-item index="2-4-1">股市</el-menu-item>
						<el-menu-item index="2-4-2">基金</el-menu-item>
						<el-menu-item index="2-4-3">黄金</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="/message">数据苏州</el-menu-item>
				<el-menu-item index="/trades">网格交易</el-menu-item>
				
					
					
				
				

			</el-menu>
			<el-col :span="4" :offset="16">
				<el-dropdown>
					<span style="font-size:20px"><i class="el-icon-setting" style="margin-right: 15px"></i>{{user}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>个人中心</el-dropdown-item>
						<el-dropdown-item>注销</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
			<div class="line"></div>

		</el-header>
	</el-container>
</template>

<script>
	export default {
		name: 'headers',
		data() {
			return {
				activeIndex: "/welcome",
				user: '登录',
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				this.activeIndex = keyPath[0]
			},
			showMessage() {

			}

		}
	}
</script>

<style>
	
</style>
