<template>
  <div class="hello">
  	<el-row>
  		<el-col :span="24">
  			<el-card>
  				
  				<el-col :span="24">
  					<el-card class="box-card">
  						<div slot="header" class="clearfix">
  							<span>购房</span>
  							<el-button style="float: right; padding: 3px 0" type="text">房贷计算</el-button>
  						</div>
  						<el-card class="box-card">
  							<div v-for="o in 4" :key="o" class="text item">
  								{{'购房: ' + o }}
  							</div>
  						</el-card>
  					</el-card>
  				</el-col>
					<el-col :span="24">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>租房</span>
								<el-button style="float: right; padding: 3px 0" type="text">路途</el-button>
							</div>
							<el-card class="box-card">
								<div v-for="o in 4" :key="o" class="text item">
									{{'租房: ' + o }}
								</div>
							</el-card>
						</el-card>
					</el-col>
					<el-col :span="24">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>买车</span>
								<el-button style="float: right; padding: 3px 0" type="text">车贷计算</el-button>
							</div>
							<el-card class="box-card">
								<div v-for="o in 4" :key="o" class="text item">
									{{'买车: ' + o }}
								</div>
							</el-card>
						</el-card>
					</el-col>
					<el-col :span="24">
						<el-card class="box-card">
							<div slot="header" class="clearfix">
								<span>经济数据</span>
								<el-button style="float: right; padding: 3px 0" type="text">详情</el-button>
							</div>
							<el-card class="box-card">
								<div v-for="o in 4" :key="o" class="text item">
									{{'经济数据: ' + o }}
								</div>
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
  name: 'HelloWorld',
  data () {
    return {
      msg: '消息中心'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
