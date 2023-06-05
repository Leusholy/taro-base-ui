<template>
  <view :class="$style.login_page">
    <view :class="$style.login_page_head">
      <RouterLink to="/">
        <img :src="LogoImage" :class="$style.login_page_head_logo" />
      </RouterLink>
    </view>
    <view :class="$style.login_page_form">
      <nut-form ref="refModelForm" :model-value="modelForm" :rules="modelRules">
        <nut-form-item prop="username">
          <nut-input
            v-model="modelForm.username"
            placeholder="请输入用户名"
            :border="false"
          />
        </nut-form-item>
        <nut-form-item prop="password">
          <nut-input
            v-model="modelForm.password"
            placeholder="请输入密码"
            type="password"
            :border="false"
          />
        </nut-form-item>
        <nut-cell>
          <nut-button type="primary" block @click="onSubmit">提交</nut-button>
        </nut-cell>
      </nut-form>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store";

import LogoImage from "@/assets/logo.svg";

const router = useRouter();
const userStore = useUserStore();

const refModelForm = ref();
const modelForm = reactive({
  username: "admin",
  password: "admin123",
});
const modelRules = {
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
};

const onSubmit = async () => {
  const { valid } = await refModelForm.value.validate();
  if (!valid) return false;
  await userStore.userLogin(modelForm);
  router.replace("/");
};
</script>

<style lang="scss" module>
.login_page {
  min-height: 100vh;
}

.login_page_head {
  padding: 24px 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login_page_head_logo {
  width: 80px;
  height: 90px;
}

.login_page_form {
  padding: 0 32px;

  :global(.nut-cell-group__wrap) {
    margin: 0;
    border-radius: 16px;
    border: $button-border-width solid $button-default-border-color;
  }
}
</style>
