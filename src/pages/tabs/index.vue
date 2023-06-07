<template>
  <view>
    <RouterView />

    <nut-tabbar
      v-model="activeTab"
      bottom
      safe-area-inset-bottom
      @tab-switch="onTabSwitch"
    >
      <nut-tabbar-item
        v-for="tab in tabbarItem"
        :key="tab.name"
        :tab-title="tab.title"
        :name="tab.name"
        :href="tab.href"
        :icon="tab.icon"
      />
    </nut-tabbar>
  </view>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Home, My } from "@nutui/icons-vue-taro";

const route = useRoute();
const router = useRouter();

const activeTab = ref("TabHome");
const tabbarItem = [
  {
    title: "首页",
    name: "TabHome",
    href: "/tabs/home",
    icon: Home,
  },
  {
    title: "我的",
    name: "TabUser",
    href: "/tabs/user",
    icon: My,
  },
];

const onTabSwitch = (item) => {
  router.replace(item.href);
};

onMounted(() => {
  activeTab.value = route.name as string;
});
</script>
