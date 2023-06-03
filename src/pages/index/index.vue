<template>
  <view class="index">
    <nut-button>{{ msg }}</nut-button>
  </view>
</template>

<script>
import { ref } from "vue";
import "./index.scss";

export default {
  setup() {
    const msg = ref("Hello world");
    return {
      msg,
    };
  },
};
</script>
