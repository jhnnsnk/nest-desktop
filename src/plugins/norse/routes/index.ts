/**
 * router/index.ts
 *
 * router documentation: https://router.vuejs.org/guide/
 */

// Composables
import { RouteRecordRaw } from "vue-router";

import modelRoutes from "./modelRoute";
import projectRoutes from "./projectRoute";

export default [
  {
    path: "",
    name: "NorseHome",
    component: () => import("@norse/layouts/NorseHome.vue"),
  },
  {
    path: "model",
    name: "NorseModelLayout",
    component: () => import("@norse/layouts/model/ModelLayout.vue"),
    children: modelRoutes as RouteRecordRaw[],
  },
  {
    path: "project",
    name: "NorseProjectLayout",
    component: () => import("@norse/layouts/project/ProjectLayout.vue"),
    children: projectRoutes as RouteRecordRaw[],
  },
];

