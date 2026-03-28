<template>
  <div class="login-container">
    <!-- 背景图 -->
    <div class="login-bg"></div>
    
    <!-- 登录表单 -->
    <div class="login-form">
      <!-- logo -->
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="Rabbit Shop" />
        <h2>欢迎登录</h2>
      </div>
      
      <!-- 表单 -->
   <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
  <el-form-item label="Confirm" prop="usename">
      <el-input
        v-model="ruleForm.usename"
        type="input"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="Password" prop="usepassword">
      <el-input v-model="ruleForm.usepassword" type="password" autocomplete="off" />
    </el-form-item>
    
  </el-form>
        
        <!-- 登录按钮 -->
        <button type="button" class="login-btn">登录</button>
        
        <!-- 其他操作 -->
        <div class="form-footer">
          <a href="#" class="forget-password">忘记密码？</a>
          <a href="#" class="register">立即注册</a>
        </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'

// 表单数据

const ruleForm = reactive({
  usename: '',
  usepassword: '',
})
const rules = reactive({
  usename: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  usepassword: [{ required: true, message: '请输入密码', trigger: 'blur' },{
    min:6,max:14,message:'密码长度必须在6-14位之间',trigger:'blur'
  }],
})




onMounted(() => {
  console.log('登录页面加载完成')
})
</script>

<style scoped lang="less">
.login-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  
  .login-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../../assets/images/login-bg.png') no-repeat center center;
    background-size: cover;
    filter: blur(2px);
  }
  
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 400px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    
    .logo {
      text-align: center;
      margin-bottom: 30px;
      
      img {
        width: 80px;
        height: 80px;
        margin-bottom: 15px;
      }
      
      h2 {
        font-size: 24px;
        font-weight: 600;
        color: #333;
        margin: 0;
      }
    }
    
    .form {
      .form-item {
        position: relative;
        margin-bottom: 20px;
        
        .icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
          color: #999;
        }
        
        .user-icon {
          left: 15px;
        }
        
        .password-icon {
          left: 15px;
        }
        
        .eye-icon {
          right: 15px;
          cursor: pointer;
        }
        
        .input {
          width: 100%;
          height: 50px;
          border: 1px solid #e0e0e0;
          border-radius: 25px;
          padding: 0 50px;
          font-size: 16px;
          outline: none;
          transition: all 0.3s;
          
          &:focus {
            border-color: #409EFF;
            box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
          }
        }
      }
      
      .login-btn {
        width: 100%;
        height: 50px;
        background: linear-gradient(135deg, #409EFF, #667EEA);
        border: none;
        border-radius: 25px;
        color: white;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        margin-bottom: 20px;
        
        &:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
        }
        
        &:active {
          transform: translateY(0);
        }
      }
      
      .form-footer {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        
        a {
          color: #666;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
          
          &:hover {
            color: #409EFF;
          }
        }
      }
    }
    
    .third-party {
      .third-party-title {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        
        .line {
          flex: 1;
          height: 1px;
          background: #e0e0e0;
        }
        
        .text {
          padding: 0 20px;
          font-size: 14px;
          color: #999;
        }
      }
      
      .third-party-icons {
        display: flex;
        justify-content: center;
        gap: 40px;
        
        .icon-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #f5f5f5;
          transition: all 0.3s;
          
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          
          .icon {
            font-size: 24px;
          }
          
          .wechat-icon {
            color: #07C160;
          }
          
          .qq-icon {
            color: #12B7F5;
          }
          
          .phone-icon {
            color: #FF6700;
          }
        }
      }
    }
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .login-form {
    width: 95%;
    padding: 20px;
    
    .logo {
      img {
        width: 60px;
        height: 60px;
      }
      
      h2 {
        font-size: 20px;
      }
    }
    
    .form {
      .form-item {
        .input {
          height: 45px;
          font-size: 14px;
        }
      }
      
      .login-btn {
        height: 45px;
        font-size: 16px;
      }
    }
    
    .third-party {
      .third-party-icons {
        gap: 30px;
        
        .icon-item {
          width: 45px;
          height: 45px;
          
          .icon {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>