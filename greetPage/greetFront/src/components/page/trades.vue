<template>
	<el-row>
		<el-col :span="24">

			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>时政要闻</span>
				</div>
				<div v-for="o in 10" :key="o" class="text item">
					<el-card class="box-card">
						{{'时政要闻 ' + o }}
						<el-button @click="showDetil()" style="float: right; padding: 3px 0" type="text">详情>></el-button>
					</el-card>
				</div>


			</el-card>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: 'economics',
		methods: {
			showDetil() {
				this.$router.push('/articleDetil')
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style>

</style>
