<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { PrimitiveProps } from "reka-ui"
import { Primitive } from "reka-ui"
import { cn, type VariantProps } from "@mzohaibnaz/ui-core/utils"
import { headerVariants } from "@mzohaibnaz/ui-core/components/header";

type HeaderVariants = VariantProps<typeof headerVariants>;
interface Props extends PrimitiveProps {
  class?: HTMLAttributes["class"]
  variant?: HeaderVariants["variant"]
  size?: HeaderVariants["size"]
  bordered?: HeaderVariants["bordered"]
  elevated?: HeaderVariants["elevated"]
  sticky?: HeaderVariants["sticky"]
  as?: PrimitiveProps["as"]
  asChild?: PrimitiveProps["asChild"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
  asChild: false,
})
</script>

<template>
  <Primitive
    data-slot="header"
    :as="as"
    :as-child="asChild"
    :class="cn(headerVariants({ variant, size, bordered, elevated, sticky }), props.class)"
  >
    <slot name="logo" />
    <slot name="actions" />
  </Primitive>
</template>
