<template>
  <card :color="node.view.color" class="node ma-1">
    <v-card-title class="node-title mt-2 ml-10">
      <v-select
        :items="node.models"
        @update:model-value="state.menu = true"
        density="compact"
        hide-details
        item-title="label"
        item-value="id"
        label="Node model"
        v-model="node.modelId"
        variant="outlined"
      >
        <template #prepend>
          <v-btn
            class="position-absolute"
            flat
            icon
            size="large"
            style="left: 8px; top: 8px"
          >
            <node-avatar
              :node="node"
              @click="node.state.select()"
              size="48px"
            />
          </v-btn>
        </template>

        <template #append>
          <div class="d-print-none menu">
            <v-menu :close-on-content-click="false" v-model="state.menu">
              <template #activator="{ props }">
                <v-btn
                  color="primary"
                  icon="mdi-order-bool-ascending-variant"
                  size="small"
                  v-bind="props"
                  variant="text"
                />
              </template>

              <v-card>
                <v-card-text>
                  <v-checkbox
                    :disabled="node.model.isRecorder"
                    :color="node.view.color"
                    density="compact"
                    hide-details
                    label="Population size"
                    v-model="node.view.state.showSize"
                  >
                    <template #append> n: {{ node.size }} </template>
                  </v-checkbox>
                  <template v-if="node.modelParams">
                    <v-checkbox
                      :color="node.view.color"
                      :key="index"
                      :label="param.label"
                      :value="param.id"
                      density="compact"
                      hide-details
                      v-for="(param, index) in Object.values(node.modelParams)"
                      v-model="node.paramsVisible"
                    >
                      <template #append>
                        {{ param.id }}: {{ param.value }}
                        {{ param.unit }}
                      </template>
                    </v-checkbox>
                  </template>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    @click.stop="() => node.showAllParams()"
                    size="small"
                    variant="outlined"
                  >
                    all
                  </v-btn>
                  <v-btn
                    @click.stop="() => node.hideAllParams()"
                    size="small"
                    variant="outlined"
                  >
                    none
                  </v-btn>
                  <v-spacer />
                  <v-btn
                    @click.stop="state.menu = false"
                    size="small"
                    variant="outlined"
                  >
                    close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>

            <node-menu :node="(node as NESTNode)" />
          </div>
        </template>
      </v-select>
    </v-card-title>

    <v-card-text class="pa-0">
      <v-list class="py-0" v-if="node.view.state.showSize">
        <v-list-item class="param pl-0 pr-1">
          <v-row no-gutters>
            <value-slider
              :color="node.view.color"
              @update:model-value="node.changes()"
              id="n"
              inputLabel="n"
              label="population size"
              v-model="node.size"
            />

            <v-menu :close-on-content-click="false">
              <template #activator="{ props }">
                <v-btn
                  color="primary"
                  class="d-print-none menu align-center justify-center my-auto"
                  icon="mdi-dots-vertical"
                  size="x-small"
                  v-bind="props"
                  variant="text"
                />
              </template>

              <v-list density="compact">
                <v-list-item
                  :key="index"
                  :icon="item.icon"
                  v-for="(item, index) in items"
                >
                  <template #prepend>
                    <v-icon :icon="item.icon" />
                  </template>
                  {{ item.title }}
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </v-list-item>
      </v-list>

      <v-list class="py-0" v-if="node.paramsVisible.length > 0">
        <node-param-editor
          :key="index"
          :param="node.params[paramId]"
          v-for="(paramId, index) in node.paramsVisible"
        />
      </v-list>
    </v-card-text>

    <v-card-actions style="min-height: 40px" v-if="node.connections.length > 0">
      <v-row>
        <v-expansion-panels
          :key="node.connections.length"
          v-model="node.state.connectionPanelIdx"
          variant="accordion"
        >
          <connection-editor
            :style="{
              opacity: connection.view.opacity ? 1 : 0.3,
            }"
            :key="index"
            :connection="(connection as NESTConnection)"
            @mouseenter="connection.state.focus()"
            @mouseleave="connection.connections.unfocusConnection()"
            v-for="(connection, index) in node.connections"
          />
        </v-expansion-panels>
      </v-row>
    </v-card-actions>
  </card>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue";

import Card from "@/components/common/Card.vue";
import NodeAvatar from "@/components/node/avatar/NodeAvatar.vue";
import NodeParamEditor from "@/components/node/NodeParamEditor.vue";
import ValueSlider from "@/components/controls/ValueSlider.vue";
import { Node, NodePropTypes } from "@/types/nodeTypes";

import ConnectionEditor from "../connection/ConnectionEditor.vue";
import NodeMenu from "./NodeMenu.vue";
import { NESTConnection } from "../../helpers/connection/connection";
import { NESTNode } from "../../helpers/node/node";

const props = defineProps({
  node: NodePropTypes,
});

const node = computed(() => props.node as Node);

const state = reactive({
  menu: false,
  panelIdx: null,
});

const admins = [
  {
    title: "Management",
    icon: "mdi-account-multiple-outline",
    value: "management",
  },
  { title: "Settings", icon: "mdi-cog-outline", value: "settings" },
];

const cruds = [
  { title: "Create", icon: "mdi-plus-outline", value: "create" },
  { title: "Read", icon: "mdi-file-outline", value: "read" },
  { title: "Update", icon: "mdi-update", value: "update" },
  { title: "Delete", icon: "mdi-delete", value: "delete" },
];

const clickMe = [
  { value: "1", title: "Click Me", icon: "mdi-numeric-1" },
  { value: "2", title: "Click Me", icon: "mdi-numeric-2" },
  { value: "3", title: "Click Me", icon: "mdi-numeric-3" },
  { value: "4", title: "Click Me", icon: "mdi-numeric-4" },
];

const items = [
  {
    value: "parameter",
    title: "parameter",
    icon: "mdi-account-circle",
    items: admins,
  },
  {
    value: "actions",
    title: "actions",
    icon: "mdi-database-cog-outline",
    items: cruds,
  },
  {
    value: "clickMe",
    title: "clickMe",
    icon: "mdi-information",
    items: clickMe,
  },
];
</script>

<style lang="scss">
.node {
  .node-title {
    .menu {
      opacity: 0;
    }
  }

  .node-title:hover {
    .menu {
      opacity: 1;
    }
  }

  .v-list {
    overflow: visible;

    .v-list-item__content {
      overflow: visible;
    }
  }

  .v-input__prepend,
  .v-input__append {
    padding-top: 0 !important;
  }
}
</style>
