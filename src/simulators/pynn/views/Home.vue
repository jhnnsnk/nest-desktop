<template>
  <v-container>
    <v-row>
      <v-col md="6">
        <v-card>
          <v-card-title>
            <v-img class="mx-10" :src="pynnLogo" max-height="400" />
          </v-card-title>

          <v-card-subtitle>
            An integration layer for neural simulation
          </v-card-subtitle>

          <v-card-text>
            <p>
              PyNN (pronounced 'pine') is a simulator-independent language for
              building spiking neuronal network models. A PyNN script runs
              without modification on any simulator or neuromorphic hardware
              platform that PyNN supports (currently NEURON, NEST, PCSIM, MOOSE,
              Brian, the BrainScaleS platform and the SpiNNaker platform).
            </p>
            <p>
              PyNN provides a library of standard neuron, synapse and synaptic
              plasticity models, which have been verified to work the same on
              the different supported simulators. PyNN also provides a set of
              commonly-used connectivity algorithms (e.g. all-to-all, random,
              distance-dependent, small-world) but makes it easy to provide your
              own connectivity in a simulator-independent way.
            </p>
            <p>
              Even if you don't wish to run simulations on multiple simulators,
              you may benefit from writing your simulation code using PyNN's
              powerful, high-level interface. In this case, you can use any
              neuron or synapse model supported by your simulator, and are not
              restricted to the standard models.
            </p>
          </v-card-text>
        </v-card>

        <v-card class="mt-2">
          <v-card-title> References </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                append-icon="mdi-open-in-new"
                href="http://neuralensemble.org/PyNN/"
                prepend-icon="mdi-home"
                target="_blank"
              >
                http://neuralensemble.org/PyNN/
              </v-list-item>
              <v-list-item
                append-icon="mdi-open-in-new"
                href="https://github.com/NeuralEnsemble/PyNN/"
                prepend-icon="mdi-github"
                target="_blank"
              >
                https://github.com/NeuralEnsemble/PyNN/
              </v-list-item>
              <v-list-item
                append-icon="mdi-open-in-new"
                href="http://neuralensemble.org/docs/PyNN/"
                prepend-icon="mdi-book-open"
                target="_blank"
              >
                http://neuralensemble.org/docs/PyNN/
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col md="6">
        <v-expansion-panels>
          <v-expansion-panel title="Backend settings">
            <v-expansion-panel-text>
              <backend-settings :store="pynnSimulatorStore" />
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <store-list :stores="stores" simulator="pynn"  />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import BackendSettings from "@/components/BackendSettings.vue";
import StoreList from "@/components/StoreList.vue";
import pynnLogo from "@/assets/img/logo/pynn-logo.png";

import { usePyNNModelDBStore } from "../store/model/modelDBStore";
const modelDBStore = usePyNNModelDBStore();

import { usePyNNModelStore } from "../store/model/modelStore";
const modelStore = usePyNNModelStore();

import { usePyNNProjectDBStore } from "../store/project/projectDBStore";
const projectDBStore = usePyNNProjectDBStore();

import { usePyNNProjectStore } from "../store/project/projectStore";
const projectStore = usePyNNProjectStore();

import { usePyNNSimulatorStore } from "../store/backends/pynnSimulatorStore";
const pynnSimulatorStore = usePyNNSimulatorStore();

const stores = { modelDBStore, modelStore, projectStore, projectDBStore };

</script>
