// appStore.ts

import { defineStore } from "pinia";

export const simulatorItems: {
  [key: string]: {
    color?: string;
    databases: string[];
    icon: string;
    id: string;
    routerName: string;
    title: string;
  };
} = {
  nest: {
    id: "nest",
    title: "NEST",
    routerName: "nestHome",
    icon: "simulator:nest",
    color: "nest",
    databases: ["NEST_MODEL_STORE", "NEST_PROJECT_STORE"],
  },
  norse: {
    id: "norse",
    title: "Norse",
    routerName: "norseHome",
    icon: "simulator:norse",
    databases: ["NORSE_MODEL_STORE", "NORSE_PROJECT_STORE"],
  },
  // pynn: {
  //   id: "pynn",
  //   title: "PyNN",
  //   icon: "simulator:pynn",
  //   databases: ["PYNN_MODEL_STORE", "PYNN_PROJECT_STORE"],
  // },
  // arbor: { id: "arbor", title: "Arbor", icon: "simulator:arbor" }
};

export const useAppStore = defineStore("nest-desktop-app-store", {
  state: () => ({
    darkMode: false,
    devMode: false,
    simulator: "nest",
    webGL: false,
  }),
  getters: {
    currentSimulator: (state) => simulatorItems[state.simulator],
  },
  persist: true,
});
