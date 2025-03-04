<template>
  <v-range-slider
    :step="props.step"
    class="py-2 range-slider align-center"
    hide-details
    strict
    style="position: relative"
    v-model="value"
  >
    <template #prepend>
      <v-text-field
        :label="(props.inputLabel[0] as string)"
        :step="props.step"
        :suffix="props.unit"
        density="compact"
        hide-details
        style="width: 80px"
        type="number"
        v-model="lower"
        variant="underlined"
      />
    </template>
    <template #append>
      <v-text-field
        :label="(props.inputLabel[1] as string)"
        :step="props.step"
        :suffix="props.unit"
        density="compact"
        hide-details
        style="width: 80px"
        type="number"
        v-model="upper"
        variant="underlined"
      />
    </template>
  </v-range-slider>
</template>

<script lang="ts" setup>
import { computed, reactive, UnwrapRef, watch } from "vue";

const props = defineProps({
  inputLabel: { default: ["lower", "upper"], type: Array<String> },
  modelValue: { default: [0, 100], type: Array<Number> },
  step: { default: 1, type: Number },
  unit: { default: "", type: String },
});
const emit = defineEmits(["update:modelValue"]);
const modelRef: UnwrapRef<{ lower: number; upper: number }> = reactive({
  lower: 0,
  upper: 1,
});

// @ts-ignore
const value = computed({
  get: () => [modelRef.lower, modelRef.upper],
  set: (value) => {
    modelRef.lower = value[0];
    modelRef.upper = value[1];
    emit("update:modelValue", [modelRef.lower, modelRef.upper]);
  },
});

const lower = computed({
  get: () => modelRef.lower,
  set: (value) => {
    modelRef.lower = typeof value === "string" ? parseFloat(value) : value;
    emit("update:modelValue", [modelRef.lower, modelRef.upper]);
  },
});

const upper = computed({
  get: () => modelRef.upper,
  set: (value) => {
    modelRef.upper = typeof value === "string" ? parseFloat(value) : value;
    emit("update:modelValue", [modelRef.lower, modelRef.upper]);
  },
});

watch(
  () => [props.modelValue],
  () => {
    modelRef.lower = props.modelValue[0] as number;
    modelRef.upper = props.modelValue[1] as number;
  }
);
</script>

<style lang="scss">
.range-slider {
  .v-slider__label {
    left: 92px;
    pointer-events: none;
    position: absolute;
    top: 0;
  }

  .v-slider-track__background {
    background-color: rgb(var(--v-theme-secondary)) !important;
  }
}
</style>
