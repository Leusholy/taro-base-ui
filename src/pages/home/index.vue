<template>
  <view :class="$style.home_page">
    <img :src="LogoImage" :class="$style.home_page_logo" alt="Vue logo" />
    <text :class="$style.home_page_title">Taro Base UI</text>
  </view>
</template>

<script lang="ts" setup>
import LogoImage from "@/assets/vue.svg";
</script>

<style lang="scss" module>
.home_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.home_page_logo {
  height: 288px;
  padding: 56px;
  filter: drop-shadow(0 0 56px #42b883aa);
}

.home_page_title {
  font-size: 56px;
  font-weight: bold;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
