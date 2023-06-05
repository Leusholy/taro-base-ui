<template>
  <nut-config-provider :theme-vars="themeVars">
    <RouterView :class="$style.app_page" />
  </nut-config-provider>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const themeVars = reactive({
  primaryColor: "#42b883",
});
</script>

<style lang="scss" module>
.app_page {
  height: calc(100vh - 104px);
  background-color: $help-color;
}
</style>
