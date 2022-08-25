<template>
  <div>
    <div v-if="drag">
      <div
        class="yys-upload-dragger"
        @click="onUploadClick"
        @drag="onUploadClick"
      >
        <div class="yys-upload-btn">
          <slot></slot>
        </div>
        <input
          ref="input"
          type="file"
          :name="name"
          :accept="accept"
          :multiple="multiple"
          class="yys-upload__input"
          @change="handleChange"
        />
      </div>
      <slot name="tip"></slot>
    </div>

    <div v-else class="yys-upload">
      <div @click="onUploadClick" class="yys-upload-btn">
        <slot></slot>
      </div>
      <input
        ref="input"
        type="file"
        :name="name"
        :accept="accept"
        :multiple="multiple"
        class="yys-upload__input"
        @change="handleChange"
      />
      <slot name="tip"></slot>
      <div v-if="showFileList">
        <div
          v-for="(item, index) in fileList_"
          :key="index"
          class="yys-upload-files"
          @mouseenter="handleMouseenter(index)"
          @mouseleave="showCloseIndex = ''"
          @click="onFileClick(item)"
        >
          <i class="fa fa-file-text-o file-icon" aria-hidden="true"></i>
          {{ item.name }}
          <span class="yys-icon-box">
            <i
              @click.stop="onRemoveClick(item, index)"
              v-if="showCloseIndex === index"
              class="fa fa-times close-icon"
              aria-hidden="true"
            ></i>
            <i
              v-if="item.status === 'success' && showCloseIndex !== index"
              class="fa fa-check-circle-o check-icon"
              aria-hidden="true"
            ></i>
            <i
              v-if="item.status === 'error' && showCloseIndex !== index"
              class="fa fa-exclamation-circle error-icon"
              aria-hidden="true"
            ></i>
            <i
              v-if="item.status === 'pending' && showCloseIndex !== index"
              aria-hidden="true"
              class="fa fa-spinner fa-pulse spinner-icon"
            ></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "YUpload",
  data() {
    return {
      showCloseIndex: "",
      file: "",
      fileList_: [],
    };
  },
  props: {
    action: { type: String, required: true },
    headers: { type: Object },
    multiple: { type: Boolean },
    data: { type: Object },
    name: { type: String, default: "file" },
    withCredentials: { type: Boolean, default: false },
    showFileList: { type: Boolean, default: true },
    drag: { type: Boolean, default: false },
    accept: { type: String },
    onPreview: { type: Function },
    onRemove: { type: Function },
    onSuccess: { type: Function },
    onError: { type: Function },
    onProgress: { type: Function },
    onChange: { type: Function },
    beforeUpload: { type: Function },
    beforeRemove: { type: Function },
    autoUpload: { type: Boolean, default: true },
    fileList: { type: Array, default: () => [] },
    httpRequest: { type: Function },
    disabled: { type: Boolean, default: false },
    limit: { type: Number },
    onExceed: { type: Function },
  },
  components: {},
  computed: {},
  model: {
    prop: "value",
    event: "change",
  },
  methods: {
    onRemoveClick(item, index) {
      let flag = false;
      if (this.beforeRemove) {
        flag = this.beforeRemove(item, this.fileList_);
      }
      if (flag) {
        this.fileList_.splice(index, 1);
        this.onRemove(this.file, this.fileList);
      }
    },
    onFileClick(item) {
      this.onPreview(item);
    },
    async handleChange(e) {
      const formData = new FormData();
      const file = e.target.files[0];
      const FileList = e.target.files;
      const FileListLength = FileList.length;
      this.file = {
        name: file.name,
        size: file.size,
        type: file.type,
        status: "pending",
      };
      this.fileList_.push(this.file);

      if (FileListLength + this.fileList_.length > this.limit) {
        this.onExceed && this.onExceed(this.file, this.fileList_);
        alert(
          `当前限制选择 ${
            this.limit
          } 个文件，本次选择了 ${FileListLength} 个文件，共选择了 ${
            FileListLength + this.fileList_.length
          } 个文件`
        );
        return;
      }
      console.log("file", file);

      this.onChange && this.onChange(this.file, this.fileList_);
      // for (const item of FileList) {
      //   formData.append("file", item);
      //   console.log(item);
      // }
      // formData.append("file", FileList);

      formData.append(this.name, file);

      if (this.data) {
        for (const dataKey in this.data) {
          formData.append(dataKey, this.data[dataKey]);
        }
      }

      let cookie = {};
      if (this.withCredentials) {
        cookie = { Cookie: document.cookie };
      }

      if (this.beforeUpload) {
        const res = this.beforeUpload(this.file);
        if (!res) return;
      }

      if (this.httpRequest) {
        this.httpRequest(this.file);
        return;
      }

      try {
        const res = await axios.post(this.action, formData, {
          headers: {
            ...this.headers,
            ...cookie,
            "Content-Type": "multipart/form-data",
          },
        });
        this.file.status = "success";
        this.onSuccess && this.onSuccess(res, this.file);
        this.onChange && this.onChange(this.file, this.fileList_);
      } catch (e) {
        this.file.status = "error";
        this.onError && this.onError(e);
        this.onChange && this.onChange(this.file, this.fileList_);
      }
    },
    onUploadClick() {
      if (this.disabled) return;
      this.$refs.input.click();
    },
    handleMouseenter(index) {
      this.showCloseIndex = index;
    },
    clearFiles() {},
    abort() {},
    submit() {},
  },
  mounted() {
    this.fileList_ = this.fileList.map((item) => {
      return {
        name: item.name,
        url: item.url,
        status: "success",
      };
    });
  },
};
</script>

<style scoped></style>
