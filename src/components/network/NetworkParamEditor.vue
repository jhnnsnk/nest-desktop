<template>
  <div class="networkParamEditor">
    <v-toolbar color="transparent" density="compact">
      <v-btn-toggle
        class="mx-1"
        mandatory
        v-model="network.nodes.state.elementTypeIdx"
      >
        <icon-btn
          :icon="item.icon"
          :key="index"
          size="x-small"
          v-for="(item, index) in network.nodes.nodeTypes"
        >
          {{ item.title }}
        </icon-btn>
      </v-btn-toggle>
      <v-spacer />
      <v-btn icon="mdi-dots-vertical" size="small" />
    </v-toolbar>

    <slot name="nodes">
      <div :key="network.nodes.length">
        <div :key="index" v-for="(node, index) in network.nodes.all">
          <node-editor
            :node="node"
            @mouseenter="node.state.focus()"
            @mouseleave="node.nodes.unfocusNode()"
            v-if="node.state.show"
          />
        </div>
      </div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import IconBtn from "@/components/common/IconBtn.vue";

import NodeEditor from "@/components/node/NodeEditor.vue";
import { Network, NetworkPropTypes } from "@/types/networkTypes";

const props = defineProps({
  network: NetworkPropTypes,
});
const network = computed(() => props.network as Network);
</script>
