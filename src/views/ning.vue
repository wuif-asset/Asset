<template>
<div>
	<el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="资产类别">
    <el-input type="text" v-model="aname" autocomplete="off" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="资产名称">	
    <el-input type="text" v-model="ruleForm.mname" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="规格型号">
    <el-input v-model.number="ruleForm.sizes"></el-input>
  </el-form-item>
  <el-form-item label="计量单位">
  <el-input v-model="ruleForm.uom"></el-input>
  </el-form-item>
  <el-form-item label="原值">
   <el-input-number v-model="ruleForm.price" controls-position="right"></el-input-number>
  </el-form-item>
    <el-form-item label="照片">
    <el-upload
    class="avatar-uploader"
    action="/uploads"
    :show-file-list="false"
    :on-success="handleAvatarSuccess">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
	import category from '../api/category';
  export default {
    data() {
      return {
        ruleForm: {
			
          mname: '',
          sizes: '',
		  uom:'',
		  price:0
        },
		gid:0,
		aname:'',
		aid:0,
		imageUrl:''
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
			 let forms=this.ruleForm
			 forms.aid=this.aid
			 forms.thumb=this.imageUrl
            category.insters(forms).then(res=>{
				if(res.data.code==0){
					        this.$alert('<strong>添加成功</strong>', '温馨提示', {
          dangerouslyUseHTMLString: true
        });
				}else{
										this.$alert('<strong>添加失败</strong>', '温馨提示', {
					dangerouslyUseHTMLString: true
					});
				}
			})
          } else {
     
          }
        });
      },
	  handleAvatarSuccess(res, file){
	  	console.log(res,file)
	  // this.imageUrl = URL.createObjectURL(file.raw);
	  this.imageUrl=res.url
	  },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
	  getcategory(id){
		  		  category.query(id).then(res=>{
		  			  if(res.data.code==0){
		  			  this.aname=res.data.data.cname
					  this.aid=res.data.data.aid
		  			  }
		  
		  		  })
	  }
    },
	beforeMount(){
		this.gid=this.$route.query.id||1
		this.getcategory(this.gid)
	}
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
    .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
