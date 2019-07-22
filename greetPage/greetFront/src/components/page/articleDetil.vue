<template>
	<el-row>
		<el-col :span="24">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>详情</span>
					<el-button @click="back()" style="float: right; padding: 3px 0" type="text">返回</el-button>
				</div>
				7月11日，中诚信国际在上海清算所公告称，将新城控股(27.090, -0.97, -3.46%)集团股份有限公司主体及相关债项的AAA评级列入信用评级观察名单。公告称，新城控股目前为止尚未出现触发债券投资者保护条款的情况，下半年公司公开市场到期债券规模相对较小，但实际控制人被批准逮捕及董事长变更等事项，对公司品牌形象及声誉产生一定负面影响，未来公司土地获取的不确定性提高，同事目前公司外部融资压力正在加大，2019年下半年公司刚性经营支出及到期债务偿还仍然面临一定压力。此外，公司股票价格快速下跌，公司控股股东所质押的公司股权安全性有所下降
			</el-card>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: 'economics',
		methods: {
			back() {
				this.$router.push('/economics')
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
