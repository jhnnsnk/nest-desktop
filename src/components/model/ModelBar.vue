<template>
  <v-app-bar class="d-print-none" height="48" flat>
    <v-tabs stacked>
      <slot name="prependTabs"></slot>

      <v-tab
        :key="index"
        :to="tab.to"
        :title="tab.title"
        size="small"
        v-for="(tab, index) in tabItems"
      >
        <v-icon :icon="tab.icon" />
        <span class="text-no-wrap">{{ tab.label }}</span>
      </v-tab>

      <slot name="appendTabs"></slot>
    </v-tabs>

    <v-spacer />

    <v-app-bar-title> {{ model.id }} </v-app-bar-title>

    <v-spacer />

    <v-btn variant="outlined"> Simulate </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import { Model, ModelPropTypes } from "@/types/modelTypes";

import { useAppStore } from "@/store/appStore";
const appStore = useAppStore();

const props = defineProps({
  model: ModelPropTypes,
});

const model = computed(() => props.model as Model);

const tabItems = computed(() => [
  {
    icon: "mdi-chart-scatter-plot",
    id: "modelExplorer",
    label: "Explore",
    title: "Explore activity",
    to: {
      name: appStore.simulator + "ModelExplorer",
      params: { modelId: model.value.id },
    },
  },
  {
    icon: "mdi-pencil",
    id: "modelEditor",
    label: "Edit",
    title: "Edit activity",
    to: {
      name: appStore.simulator + "ModelEditor",
      params: { modelId: model.value.id },
    },
  },
]);
</script>
