<template>
  <div>
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
    <div
      v-for="(item, index) in fileList"
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
          @click.stop="onRemoveClick"
          v-if="showCloseIndex === index"
          class="fa fa-times close-icon"
          aria-hidden="true"
        ></i>
        <i
          v-else
          class="fa fa-check-circle-o check-icon"
          aria-hidden="true"
        ></i>
      </span>
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
    onRemoveClick() {
      if (this.beforeRemove) {
        this.beforeRemove(this.file, this.fileList);
      }
      this.onRemove(this.file, this.fileList);
    },
    onFileClick(item) {
      this.onPreview({ name: item.name, url: item.url, status: "success" });
    },
    async handleChange(e) {
      const formData = new FormData();
      const file = e.target.files[0];

      // const FileList = e.target.files;
      // for (const item of FileList) {
      //   formData.append("file", item);
      //   console.log(item);
      // }
      // formData.append("file", FileList);

      formData.append("file", file);

      const res = await axios.post(this.action, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("res", res);
    },
    onUploadClick() {
      this.$refs.input.click();
    },
    handleMouseenter(index) {
      this.showCloseIndex = index;
    },
    clearFiles() {},
    abort() {},
    submit() {},
  },
  mounted() {},
};
</script>

<style scoped></style>
