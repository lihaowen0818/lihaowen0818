<template>
  <div class="main">
    <div class="login">
      <el-form size="mini" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="账号" prop="loginId">
          <el-input type="text" v-model="ruleForm.loginId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="loginPass">
          <el-input type="password" v-model="ruleForm.loginPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login.vue",
  data() {
    //验证密码的方法
    const validateLoginPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    //验证密码的方法
    const validateLoginId = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        callback();
      }
    }

    return {
      //表单数据
      ruleForm: {
        //登录名
        loginId: "",
        //登录密码
        loginPass: ""
      },
      //表单的验证规则
      rules: {
        //验证账户
        loginId: [
          {validator: validateLoginId, trigger: 'blur'}
        ],
        //验证密码
        loginPass: [
          {validator: validateLoginPass, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    //表单的提交方法
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        //判断表单数据是否验证成功
        if (valid) {
          //todo 实现登录
          let res = await this.$get('/iss/user/'+this.ruleForm.loginId+'/'+this.ruleForm.loginPass+'');
          console.log(res);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    //表单的重置方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped lang="less">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .login {
    width: 460px;
    height: 220px;
    border: 1px solid #ccc;
  }
}
</style>
