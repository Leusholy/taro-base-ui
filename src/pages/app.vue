<template>
  <nut-config-provider :theme-vars="themeVars">
    <RouterView :class="$style.app_page" />
  </nut-config-provider>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const themeVars = reactive({
  primaryColor: "#e32b6b",
});
</script>

<style lang="scss" module>
.app_page {
  height: 100vh;
  background-color: $help-color;
}
</style>
