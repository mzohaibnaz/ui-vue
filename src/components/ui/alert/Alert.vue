<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn, type VariantProps } from '@mzohaibnaz/ui-core/utils'
import { alertVariants } from "@mzohaibnaz/ui-core/components/alert";

type AlertVariants = VariantProps<typeof alertVariants>;
const props = defineProps<{
  class?: HTMLAttributes["class"]
  variant?: AlertVariants["variant"]
}>()
</script>

<template>
  <div
    data-slot="alert"
    :class="cn(alertVariants({ variant }), props.class)"
    role="alert"
  >
    <slot />
  </div>
</template>
