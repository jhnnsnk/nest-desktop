<template>
  <v-container>
    <v-layout
      class="networkGraphLayout"
      id="networkGraphLayout"
      style="height: 300px"
    >
      <network-graph :network="(network as NorseNetwork)" />
    </v-layout>

    <v-row no-gutters>
      <v-col class="pa-1" cols="12" md="4" sm="6">
        <div class="text-button">Stimulator</div>
        <node-viewer
          :node="(node as NorseNode)"
          :key="index"
          v-for="(node, index) in network.nodes.stimulators"
        />
      </v-col>

      <v-col class="pa-1" cols="12" md="4" sm="6">
        <div class="text-button">Neuron</div>
        <node-viewer
          :node="(node as NorseNode)"
          :key="index"
          v-for="(node, index) in network.nodes.neurons"
        />
      </v-col>

      <v-col class="pa-1" cols="12" md="4" sm="6">
        <div class="text-button">Recorder</div>
        <node-viewer
          :node="(node as NorseNode)"
          :key="index"
          v-for="(node, index) in network.nodes.recorders"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import NetworkGraph from "@/components/network/NetworkGraph.vue";
import NodeViewer from "@/components/node/NodeViewer.vue";

import { NorseNetwork } from "../helpers/network/network";
import { NorseNode } from "../helpers/node/node";

import { useNorseProjectStore } from "../store/project/projectStore";
const projectStore = useNorseProjectStore();

const network = computed(() => projectStore.project.network as NorseNetwork);
</script>
