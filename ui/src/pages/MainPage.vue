<script setup lang="ts">
import { PlAlert, PlBlockPage, PlTextField } from '@platforma-sdk/ui-vue';
import { useApp } from '../app';

const app = useApp();

</script>

<template>
  <PlBlockPage>
  
    <PlTextField v-model="app.model.args.name" label="Enter your name" clearable />

    <PlAlert type="success" v-if="app.model.outputs.tengoMessage"> {{ app.model.outputs.tengoMessage }} </PlAlert>

  </PlBlockPage>
</template>
