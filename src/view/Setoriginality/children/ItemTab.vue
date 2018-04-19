<template>
  <div class="itemTab">
    <div class="chuan">
      <el-upload
        class="avatar-uploader"
        action="http://localhost:9000/dsp-creative/creative/upload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <p>JPG/JPEG, 小于30KB</p>
    <p>广告文案：<input type="text" placeholder="请设置广告名称" v-model="copy"></p>
    <p>监控链接：<input type="text" placeholder="请设置广告名称" v-model="link"></p>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import { addCreative } from '@/utils/http.js'
export default {
  props: ["ind", "address", "item"],
  data () {
    return {
      imageUrl: '',
      copy: '',
      link: ''
    }
  },
  methods: {
    // 图片上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = 'http://localhost:9000/'+res.data.value
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'||'image/jpg'||'image/JPG'||'image/png'||'image/PNG';
      const isLt2M = file.size / 1024 / 1024 < 5;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    // 提交创意
    submit () {
      addCreative({
        item:this.item,
        address: this.address,
        imageUrl: this.imageUrl,
        copy: this.copy,
        copy: this.link
      })
      .then(res => {
        console.log(res)
      })
    }
  }
};
</script>

<style scoped>
  .itemTab button{
    width: 150px;
    height: 50px;
    border: none;
    background: rgb(207, 207, 207);
    color: rgb(114, 114, 114);
    margin-top: 30px;
    outline: none;
  }
.itemTab .chuan{
    width: 180px;
    height: 180px;
    position: relative;
    border: 1px solid #ccc;
  }
  .itemTab .chuan input{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0;
    opacity: 0;
  }
  .itemTab .chuan img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0;
  }
  .itemTab p{
    font-size: 12px;
    color: #999;
    margin-bottom: 20px;
  }
  .itemTab p input{
    width: 400px;
    height: 25px;
    border: 1px solid #ccc;
  }
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
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