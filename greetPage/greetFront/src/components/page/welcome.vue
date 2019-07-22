<template>
	<div class="hello">
		<el-row>
			<el-col :span="24">
				<el-card>
					<el-col :span="12">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>持仓股票</span>
								<el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
								
							</div>
							  

								<el-table :data="tableData" stripe style="width: 100%">
									<el-table-column prop="date" label="日期">
									</el-table-column>
									<el-table-column prop="name" label="姓名">
									</el-table-column>
									<el-table-column prop="address" label="地址">
									</el-table-column>
									
								</el-table>
							<el-button style="float: right; padding: -3px 0" type="text">查看更多</el-button>
						</el-card>
					</el-col>
					<el-col :span="12">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>个人中心</span>
								<el-button style="float: right; padding: 3px 0" type="text">登录/退出</el-button>
							</div>
							<el-card class="box-card">
							</el-card>
						</el-card>
					</el-col>
					<el-col :span="24">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>工作计划</span>

								
								<el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
							</div>
							<el-card class="box-card">
								<el-button style="float: right; padding: 3px 0" type="text">查看历史</el-button>
								<el-table :data="tableData" stripe style="width: 100%" height="250">
									<el-table-column prop="date" label="内容">
									</el-table-column>
									<el-table-column fixed="right" label="操作" width="250">
										<template slot-scope="scope">
											<el-button @click="handleClick(scope.row)" type="text">查看</el-button>
											<el-button type="text">编辑</el-button>
										</template>
									</el-table-column>
									
								</el-table>
								
							</el-card>
						</el-card>
					</el-col>
				</el-card>

			</el-col>
		</el-row>

	</div>
	</section>
	</div>
</template>

<script>
	export default {
		name: 'welcome',
		data() {
			return {
				username: '',
				currentDate: new Date(),
				buttonname: '登录',
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.box-card {
		height: 400px;
	}

	
</style>
