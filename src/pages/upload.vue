<template>
  <div id="app">
    <h3>点击上传</h3>
    <YUpload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <YButton size="middle" type="primary">点击上传</YButton>
      <div slot="tip" class="yys-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </YUpload>
    <h3>用户头像上传</h3>
    <YUpload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="fa fa-plus avatar-uploader-icon"></i>
    </YUpload>
    <h3>上传文件列表控制</h3>
    <YUpload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleChange"
      :file-list="fileList"
    >
      <YButton size="middle" type="primary">点击上传</YButton>
      <div slot="tip" class="yys-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </YUpload>
    <h3>拖拽上传</h3>
    <YUpload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="fa fa-cloud-upload yys-icon-upload" aria-hidden="true"></i>
      <div class="yys-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="yys-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </YUpload>
    <h3 id="attribute">Attribute</h3>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>action</td>
          <td>必选参数，上传的地址</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>headers</td>
          <td>设置上传的请求头部</td>
          <td>object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>multiple</td>
          <td>是否支持多选文件</td>
          <td>boolean</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>data</td>
          <td>上传时附带的额外参数</td>
          <td>object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>name</td>
          <td>上传的文件字段名</td>
          <td>string</td>
          <td>—</td>
          <td>file</td>
        </tr>
        <tr>
          <td>with-credentials</td>
          <td>支持发送 cookie 凭证信息</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>show-file-list</td>
          <td>是否显示已上传文件列表</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>drag</td>
          <td>是否启用拖拽上传</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>accept</td>
          <td>
            接受上传的<a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"
              >文件类型</a
            >（thumbnail-mode 模式下此参数无效）
          </td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>on-preview</td>
          <td>点击文件列表中已上传的文件时的钩子</td>
          <td>function(file)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>on-remove</td>
          <td>文件列表移除文件时的钩子</td>
          <td>function(file, fileList)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>on-success</td>
          <td>文件上传成功时的钩子</td>
          <td>function(response, file, fileList)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>on-error</td>
          <td>文件上传失败时的钩子</td>
          <td>function(err, file, fileList)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td>
            文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
          </td>
          <td>function(file, fileList)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>before-upload</td>
          <td>
            上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise
            且被 reject，则停止上传。
          </td>
          <td>function(file)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>before-remove</td>
          <td>
            删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false
            或者返回 Promise 且被 reject，则停止删除。
          </td>
          <td>function(file, fileList)</td>
          <td>—</td>
          <td>—</td>
        </tr>

        <!--        <tr>-->
        <!--          <td>auto-upload</td>-->
        <!--          <td>是否在选取文件后立即进行上传</td>-->
        <!--          <td>boolean</td>-->
        <!--          <td>—</td>-->
        <!--          <td>true</td>-->
        <!--        </tr>-->
        <tr>
          <td>file-list</td>
          <td>
            上传的文件列表, 例如: [{name: 'food.jpg', url:
            'https://xxx.cdn.com/xxx.jpg'}]
          </td>
          <td>array</td>
          <td>—</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>http-request</td>
          <td>覆盖默认的上传行为，可以自定义上传的实现</td>
          <td>function</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>limit</td>
          <td>最大允许上传个数</td>
          <td>number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>on-exceed</td>
          <td>文件超出个数限制时的钩子</td>
          <td>function(files, fileList)</td>
          <td>—</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <h3 id="slot">Slot</h3>
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>tip</td>
          <td>提示说明文字</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {},
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      imageUrl: "",
    };
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        alert("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        alert("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return confirm(`确定移除 ${file.name}？`);
    },
  },
};
</script>

<style scoped>
.upload-demo {
  width: 360px;
}
.avatar-uploader >>> .yys-upload-btn {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader >>> .yys-upload-btn:hover {
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
