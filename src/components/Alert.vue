<script setup lang="ts">
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { alertVariants } from "@mzohaibnaz/ui-core/components/alert"
import { VariantProps } from '@mzohaibnaz/ui-core/utils';
import { Component, HTMLAttributes } from 'vue';

type AlertVariants = VariantProps<typeof alertVariants>;
interface Props {
  title: string,
  description: string,
  icon?: Component,
  variant?: AlertVariants["variant"]
  class?: HTMLAttributes["class"],
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <Alert :class="props.class" :variant="props.variant">
    <component :is="icon" v-if="icon" />
    <AlertTitle>{{ title }}</AlertTitle>
    <AlertDescription>
      {{ description }}
    </AlertDescription>
  </Alert>
</template>
