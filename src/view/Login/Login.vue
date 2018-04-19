<template>
  <div class="loginpage">
    <div class="login-box">
      <el-form :model="fadeData" ref="formDom">
        <el-form-item prop="username" label="邮箱" :rules="userProp">
          <el-input type="email" v-model="fadeData.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码" :rules="passwordProp">
          <el-input type="password" v-model="fadeData.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click.native="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginpage",
  data() {
    return {
      fadeData: {
        username: "",
        password: ""
      },
      userProp: [
        {
          required: true,
          message: "请输入邮箱地址"
        },
        {
          required: true,
          type: "email",
          message: "请输入正确的邮箱地址"
        }
      ],
      passwordProp: [
        {
          required: true,
          message: "密码不能为空"
        }
      ]
    };
  },
  methods: {
    submit() {
      let notify = data => {
        this.$notify(data);
      };
      this.$refs.formDom.validate((bool, obj) => {
        if (bool) {
          this.$store.dispatch("updata", {
            fadeData: this.fadeData,
            notify: notify
          });
          setTimeout(() => {
            if (window.localStorage.token) {
              this.$router.push({
                path: "/index"
              });
            }
          }, 1000);
        } else {
          console.log("格式错误", obj.username.message);
        }
      });
    }
  },
  created() {
    if (window.localStorage.token) {
      this.$router.push({
        path: "/index"
      });
    }
  }
};
</script>
<style scoped>
.loginpage {
  width: 100%;
  height: 100%;
  background-size: 100%;
  position: relative;
}
.login-box {
  text-align: center;
  position: absolute;
  top: 24%;
  right: 200px;
  background: #fff;
  width: 23%;
  border-radius: 5px;
  height: 400px;
  padding: 10px 30px;
}
.login-box button {
  text-align: center;
  width: 200px;
  height: 40px;
  background: rgb(245, 54, 54);
  color: #fff;
  border: none;
  border-radius: 20px;
}
</style>
