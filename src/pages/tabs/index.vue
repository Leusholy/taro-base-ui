<template>
  <view>
    <RouterView />

    <nut-tabbar
      v-model="activeTab"
      bottom
      safe-area-inset-bottom
      placeholder
      @tab-switch="onTabSwitch"
    >
      <nut-tabbar-item
        tab-title="首页"
        href="/tabs/home"
        name="TabHome"
        :icon="Home"
      />
      <nut-tabbar-item
        tab-title="我的"
        href="/tabs/user"
        name="TabUser"
        :icon="My"
      />
    </nut-tabbar>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Home, My } from "@nutui/icons-vue-taro";

const route = useRoute();
const router = useRouter();

const activeTab = ref("TabHome");

const onTabSwitch = (item: any) => {
  router.replace(item.href);
};

const queryRouteMeta = () => {
  activeTab.value = route.name as string;
};

queryRouteMeta();
</script>
