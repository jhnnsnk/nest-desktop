<template>
  <div class="activityChartPanelMenuPopover">
    <v-card>
      <v-list density="compact">
        <v-list-group fluid value="Analog signals">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Analog signals" />
          </template>
          <v-list-item
            :key="'analogPanel' + index"
            :prepend-icon="model.icon"
            @click="selectModel(model.id)"
            v-for="(model, index) in graph.modelsAnalog"
          >
            <v-list-item-title> {{ model.label }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group fluid value="Spike activity">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Spike activity" />
          </template>
          <v-list-item
            :key="'spikePanel' + index"
            :prepend-icon="model.icon"
            @click="selectModel(model.id)"
            v-for="(model, index) in graph.modelsSpike"
          >
            <v-list-item-title>{{ model.label }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import { ActivityChartGraph } from "@/helpers/activityChartGraph/activityChartGraph";

const props = defineProps({
   graph: ActivityChartGraph,
});

const graph = computed(() => props.graph as ActivityChartGraph);

const emit = defineEmits(["changed"]);

/**
 * Select panel model.
 */
const selectModel = (modelId: string) => {
  emit("changed", modelId);
};
</script>

<style lang="scss">
.activityChartPanelToolbar .icons {
  display: none;
  line-height: 36px;
  position: absolute;
  right: 4px;
  top: 0;
}
.activityChartPanelToolbar:hover .icons {
  display: block;
}
</style>
