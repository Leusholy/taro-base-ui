<template>
  <view :class="$style.page">
    <nut-animate type="float" :loop="true" duration="3000">
      <img :src="VueImage" :class="$style.page_logo" />
    </nut-animate>
    <text :class="$style.page_title">Taro Base UI</text>
  </view>
</template>

<script lang="ts" setup>
import VueImage from "@/assets/vue.svg";
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
  filter: drop-shadow(0 0 1rem #42b883aa);
}

.page_title {
  font-size: 1.5rem;
  font-weight: bold;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
