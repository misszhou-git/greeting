<template>
	<el-row>
		<el-col :span="24">
			
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>问候短信</span>
					<el-button style="float: right; padding: 3px 0" type="text">新增</el-button>
				</div>
				<el-table :data="tableData" stripe style="width: 100%">
					<el-table-column prop="date" label="日期">
					</el-table-column>
					<el-table-column prop="name" label="姓名">
					</el-table-column>
					<el-table-column prop="address" label="地址">
					</el-table-column>
					<el-table-column fixed="right" label="操作">
						<template slot-scope="scope">
							<el-button @click="handleClick(scope.row)" type="text">查看</el-button>
							<el-button type="text">编辑</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-card>
		</el-col>
	</el-row>
</template>


<script>
	export default {
		name: 'sayhello',
		methods: {
			handleClick(row) {
				console.log(row);
			}
		},
		data() {
			return {
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
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		}
	}
</script>

<style>
</style>
