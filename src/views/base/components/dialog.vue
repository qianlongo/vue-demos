<template>
  <div class="dialog" v-show="visible">
    <div class="dialog-mask" @click="onHide"></div>
    <div class="dialog-body">
      <div class="dialog-title" v-if="title">{{ title }}</div>
      <!-- 注意这里，没有传title属性，时候通过插槽进行内容承接 -->
      <slot name="title" :userInfo="userInfo" v-else></slot>
      <div class="dialog-main">
        <!-- 声明main部分 -->
        <slot name="main" :userInfo="userInfo"></slot>
      </div>
      <div class="dialog-footer">
        <div class="button-cancel" @click="onHide">取消</div>
        <div class="button-confirm" @click="onHide">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialog",
  props: {
    title: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      userInfo: {
        name: '前端胖头鱼'
      }
    }
  },
  methods: {
    onHide () {
      this.$emit('update:visible', false)
    }
  }
};
</script>

<style scoped>
.dialog {
}
.dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.dialog-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  min-height: 104px;
  background-color: #ffffff;
  border-radius: 16px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.dialog-title {
  padding-top: 26px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
}

.dialog-main {
  flex: 1;
  max-height: 60vh;
  padding: 26px 24px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
  text-align: center;
  word-wrap: break-word;
}

.dialog-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-top: 0.5px solid #ebedf0;
}

.button-cancel,.button-confirm{
  flex: 1;
  text-align: center;
  height: 100%;
  line-height: 50px;
}

.button-cancel{
  border-right: 0.5px solid #ebedf0;
  color: #323233;
}

.button-confirm{
  color: #ee0a24;
}
</style>