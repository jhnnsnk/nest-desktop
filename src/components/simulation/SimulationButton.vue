<template>
  <div class="simulationButton">
    <div class="btn-split text-no-wrap">
      <v-btn
        :disabled="disabled"
        :loading="loading"
        @click="projectStore?.startSimulation()"
        class="btn-main"
        variant="outlined"
        title="Simulate"
        prepend-icon="mdi-play"
        v-if="simulation"
      >
        <span v-if="simulation.code.runSimulation"> Simulate </span>
        <span v-else>Prepare</span>
      </v-btn>

      <v-btn class="btn-append" variant="outlined">
        <v-icon icon="mdi-menu-down" />

        <v-menu :close-on-content-click="false" activator="parent">
          <v-list density="compact">
            <v-list-item
              :key="index"
              @click="item.onClick"
              v-for="(item, index) in state.items"
            >
              <template #prepend="{ isActive }">
                <v-list-item-action start>
                  <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                </v-list-item-action>
              </template>

              <v-list-item-title> {{ item.title }} </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue";

import { Simulation, SimulationPropTypes } from "@/types/simulationTypes";

const props = defineProps({
  disabled: Boolean,
  projectStore: Object,
  simulation: SimulationPropTypes,
});

const simulation = computed(() => props.simulation as Simulation);
const disabled = computed(() => props.disabled || simulation.value.state.running || false);
const loading = computed(() => simulation.value.state.running)
const projectStore = computed(() => props.projectStore);

const state = reactive({
  items: [
    {
      id: "simulateAfterChange",
      variant: "checkbox",
      title: "Simulate after change",
      value: "simulateAfterChange",
      show: () => true,
      onClick: () => {
        // state.projectConfig.simulateAfterChange =
        //   !state.projectConfig.simulateAfterChange;
        // projectView.updateConfig(state.projectConfig);
      },
    },
    {
      id: "simulateAfterLoad",
      variant: "checkbox",
      title: "Simulate after load",
      value: "simulateAfterLoad",
      show: () => true,
      onClick: () => {
        // state.projectConfig.simulateAfterLoad =
        //   !state.projectConfig.simulateAfterLoad;
        // projectView.updateConfig(state.projectConfig);
      },
    },
    {
      id: "simulateAfterCheckout",
      variant: "checkbox",
      title: "Simulate after checkout",
      value: "simulateAfterCheckout",
      show: () => true,
      onClick: () => {
        // state.projectConfig.simulateAfterCheckout =
        //   !state.projectConfig.simulateAfterCheckout;
        // projectView.updateConfig(state.projectConfig);
      },
    },
  ],
  // project: props.project as Project,
  // projectConfig: projectView.config,
});
</script>

<style lang="scss">
.simulationButton {
  .btn-split {
    display: inline-block;

    .btn-main {
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .btn-prepend {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      min-width: 35px !important;
      padding: 0 !important;
    }

    .btn-append {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      min-width: 35px !important;
      padding: 0 !important;
    }
  }
}
</style>
