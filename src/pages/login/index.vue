<template>
  <view :class="$style.page">
    <RouterLink to="/" :class="$style.page_head">
      <img :src="LogoImage" :class="$style.page_head_logo" />
    </RouterLink>

    <nut-empty>
      <template #image>
        <img :src="DeveloperImage" />
      </template>
      <template #description></template>
      <template #default>
        <nut-button type="primary" @click="onSubmit">立即登录</nut-button>
      </template>
    </nut-empty>
  </view>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/store";

import LogoImage from "@/assets/logo.svg";
import DeveloperImage from "@/assets/developer.svg";

const router = useRouter();
const userStore = useUserStore();

const onSubmit = async () => {
  await userStore.userLogin();
  router.replace("/");
};
</script>

<style lang="scss" module>
.page {
  height: 100vh;
}

.page_head {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page_head_logo {
  width: 2rem;
  height: 2rem;
}
</style>
