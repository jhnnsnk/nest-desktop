<template>
  <v-layout class="networkGraphLayout" full-height id="networkGraphLayout">
    <network-editor-toolbar />
    <network-graph :network="(network as NorseNetwork)" />
  </v-layout>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import NetworkGraph from "@/components/network/NetworkGraph.vue";
import NetworkEditorToolbar from "@/components/network/NetworkEditorToolbar.vue";

import { NorseNetwork } from "../helpers/network/network";

import { useNorseProjectStore } from "../store/project/projectStore";
const projectStore = useNorseProjectStore();

const network = computed(() => projectStore.project.network as NorseNetwork);
</script>
