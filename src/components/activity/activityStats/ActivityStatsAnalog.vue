<template>
  <v-data-table-virtual
    :headers="(headers as any)"
    :items="state.items"
    :key="state.activityHash"
    :loading="state.loading"
    @update:model-value="updateGraph"
    class="activityStatsAnalog"
    density="compact"
    fixed-header
    loading-text="Loading... Please wait"
    show-select
    v-model="activity.state.selected"
  >
    <template #top>
      <v-select
        :items="activity.state.records"
        @update:model-value="selected"
        density="compact"
        hide-details
        item-title="selectTitle"
        item-value="id"
        v-model="state.selectedRecord" v-if="activity.recorder.model.isMultimeter"
      >
        <!-- <template #selection="{ item }">
      <v-list-item min-width="400px">
        <template #append>
          <node-record-chip :node-record="item.value" />
        </template>
        <span>{{ item.value.labelCapitalize }}</span>
        <span v-if="item.value.unit"> ({{ item.value.unit }})</span>
      </v-list-item>
    </template>

      <template #item="{ item, props: { onClick } }">
      <v-list-item :value="item.value" @click="onClick">
        <template #append>
          <node-record-chip :node-record="item.value" />
        </template>

        <span> {{ item.value.labelCapitalize }}</span>
        <span v-if="item.value.unit"> ({{ item.value.unit }}) </span>
      </v-list-item>
    </template> -->
      </v-select>
    </template>

    <template #item.mean="{ item }">
      {{ toFixed(Number(item.mean)) }}
    </template>
    <template #item.std="{ item }">
      {{ toFixed(Number(item.std)) }}
    </template>

    <template #bottom>
      <div class="wrapper-table">
        <table>
          <tr>
            <td :key="idx" v-for="(header, idx) in headers">
              <div v-if="header.key === 'id'">Total</div>
              <div v-else-if="['mean', 'std'].includes(header.key)">
                <span>&#956;</span>
                = {{ toFixed(colMean(header.key)) }}
              </div>
              <div v-else />
            </td>
          </tr>
        </table>
      </div>
    </template>
  </v-data-table-virtual>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, watch } from "vue";

// import NodeRecordChip from "@/components/node/NodeRecordChip.vue";
import { AnalogSignalActivity } from "@/helpers/activity/analogSignalActivity";
// import { NodeRecord } from "@/helpers/node/nodeRecord";
import { deviation, mean } from "@/helpers/common/array";
import { toFixed } from "@/utils/converter";

const props = defineProps({
  activity: AnalogSignalActivity,
});

const activity = computed(() => props.activity as AnalogSignalActivity);

const state = reactive({
  activityHash: "",
  items: [] as { [key: string]: number | string }[],
  loading: false,
  // @ts-ignore
  selectedRecord: "",
});

const headers = [
  {
    title: "ID",
    align: "start",
    key: "id",
  },
  { title: "Mean", key: "mean" },
  { title: "Std", key: "std" },
];

// const activeLineGraph = (nodeId?: number) => {
//   activity.state.activeNodeId =
//     activity.state.activeNodeId == nodeId ? undefined : nodeId;
//   activity.chartGraph?.panels.forEach((panel) =>
//     panel.model.updateActiveMarker(state.selectedRecord as NodeRecord)
//   );
//   activity.chartGraph?.react();
// };

// const isActive = (nodeId: number) => {
//   return activity.state.activeNodeId === nodeId;
// };

const selected = () => {
  setTimeout(() => update(), 1);
};

/**
 * Update stats of analog activity.
 */
const update = () => {
  state.loading = true;
  state.items = [];

  if (!state.selectedRecord && activity.value.state.records.length > 0) {
    state.selectedRecord = activity.value.state.records[0].id;
  }

  if (activity.value && state.selectedRecord) {
    const activityData: any[] = activity.value.events[state.selectedRecord];
    const data: any[] = Object.create(null);
    activity.value.nodeIds.forEach((id) => (data[id] = []));
    activity.value.events.senders.forEach((sender: number, idx: number) => {
      data[sender].push(activityData[idx]);
    });
    state.items = activity.value.nodeIds.map((id: number) => {
      const d: number[] = data[id];
      return {
        id,
        mean: d.length > 0 ? mean(d) : NaN,
        std: d.length > 0 ? deviation(d) : NaN,
      };
    });
  }
  state.activityHash = activity.value.state.hash;
  state.loading = false;
};

const updateGraph = () => {
  setTimeout(() => activity.value.chartGraph.update(), 1)
}

const colMean = (key: string) => {
  return mean(state.items.map((item) => item[key]) as number[]);
};

onMounted(() => {
  update();
});

watch(
  () => activity.value.state.hash,
  () => update()
);
</script>

<style lang="scss">
.wrapper-table {
  table {
    width: 100%;
  }
}
</style>
