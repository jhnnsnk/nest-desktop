/**
 * router/modelRoute.ts
 *
 * router documentation: https://router.vuejs.org/guide/
 */

import { useNorseModelDBStore } from "@norse/store/model/norseModelDBStore";
import { useNorseModelStore } from "@norse/store/model/norseModelStore";

const modelBeforeEnter = (to: any) => {
  const modelStore = useNorseModelStore();

  const modelDBStore = useNorseModelDBStore();
  if (modelDBStore.models.length === 0) {
    setTimeout(() => modelBeforeEnter(to), 100);
    return;
  }

  if (to.params.modelId) {
    modelStore.modelId = to.params.modelId;
  }

  const path = to.path.split("/");
  modelStore.view = path[path.length - 1] || "edit";
};

const modelRedirect = (to: any) => {
  const modelStore = useNorseModelStore();

  if (to.params.modelId) {
    modelStore.modelId = to.params.modelId;
  }

  return { path: "/norse/model/" + modelStore.modelId + "/" + modelStore.view };
};

export default [
  {
    path: "",
    name: "NorseModelRoot",
    redirect: modelRedirect,
  },
  {
    path: ":modelId/",
    redirect: modelRedirect,
    children: [
      {
        path: "edit",
        name: "NorseModelEditor",
        components: {
          model: () => import("@norse/views/model/ModelEditor.vue"),
        },
        props: true,
        beforeEnter: modelBeforeEnter,
      },
      {
        path: "explore",
        name: "NorseModelExplorer",
        components: {
          model: () => import("@norse/views/model/ModelExplorer.vue"),
        },
        props: true,
        beforeEnter: modelBeforeEnter,
      },
      {
        path: "*",
        name: "NorseModel",
        props: true,
        redirect: modelRedirect,
      },
    ],
  },
];
