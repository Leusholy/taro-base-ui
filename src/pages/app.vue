<template>
  <view :class="$style.app_page">
    <nut-config-provider>
      <RouterView />
    </nut-config-provider>
  </view>
</template>

<style lang="scss" module>
.app_page {
  height: 100vh;
  overflow: hidden;
  background-color: #f3f5f7;
}
</style>
