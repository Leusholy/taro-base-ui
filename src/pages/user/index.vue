<template>
  <view :class="$style.page">
    <img :src="LogoImage" :class="$style.page_logo" />
    <text :class="$style.page_title">Taro Base UI</text>
  </view>
</template>

<script lang="ts" setup>
import LogoImage from "@/assets/logo.svg";
</script>

<style lang="scss" module>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.page_logo {
  height: 8rem;
  width: 8rem;
  padding: 1rem;
  filter: drop-shadow(0 0 1rem #7703fcaa);
}

.page_title {
  font-size: 1.5rem;
  font-weight: bold;
  background: -webkit-linear-gradient(315deg, #7703fc 25%, #e32b6b);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
