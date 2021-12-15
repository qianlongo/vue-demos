<template>
  <div
    ref="longTap"
    v-long-press="150"
    @long-press-start="onLongPressStart"
    @long-press-stop="onLongPressStop"
  >
    测试长按事件
  </div>
</template>

<script>
const longPressStop = new CustomEvent("long-press-stop");
const longPressStart = new CustomEvent("long-press-start");

export default {
  name: "longTap",
  directives: {
    'long-press': {
      bind(el, binding, vnode, oldVnode) {
        el.dataset.longPressTimeoutId = "0";

        const onpointerup = () => {
          clearTimeout(parseInt(el.dataset.longPressTimeoutId));

          if (vnode.componentInstance) {
            vnode.componentInstance.$emit("long-press-stop");
          } else {
            el.dispatchEvent(longPressStop);
          }

          document.removeEventListener("pointerup", onpointerup);
        };

        const onpointerdown = () => {
          document.addEventListener("pointerup", onpointerup);

          const timeout = setTimeout(() => {
            if (vnode.componentInstance) {
              vnode.componentInstance.$emit("long-press-start");
            } else {
              el.dispatchEvent(longPressStart);
            }
          }, binding.value);

          el.dataset.longPressTimeoutId = timeout.toString();
        };

        el.$_long_press_pointerdown_handler = onpointerdown;
        el.addEventListener("pointerdown", onpointerdown);
      },
      inserted(ele) {
        // console.log(ele);
        // ele.focus();
      },
      update() {},
      componentUpdated() {},
      unbind(el) {
        clearTimeout(parseInt(el.dataset.longPressTimeoutId));
        el.removeEventListener(
          "pointerdown",
          el.$_long_press_pointerdown_handler
        );
      },
    },
  },
  mounted () {
    setTimeout(() => {
      console.log(this.$refs.longTap)
      this.$refs.longTap.dispatchEvent(longPressStop)
    }, 3000)
  },
  methods: {
    onLongPressStart (e) {
      console.log('onLongPressStart', '')
    },
    onLongPressStop (e) {
      console.log('onLongPressStop')
      // this.$emit('long-press-stop', e)
    }
  }
};
</script>

<style scoped>
</style>