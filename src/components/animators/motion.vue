<script lang="ts">
import { defineComponent, h, type VNode, type PropType } from 'vue'
import { motion, type MotionProps } from "motion-v"
import { AnimationPropType, MotionConfig, type MotionChannel } from "@mzohaibnaz/ui-core/animations/motion/types"
import { mergeMotionProps } from "@mzohaibnaz/ui-core/utils"

/**
 * Normalize cross-framework interaction props
 * React: whileTap
 * Vue (motion-v): whilePress
 */
function normalizeInteractionProps(props: MotionConfig): MotionConfig {
  // clone to avoid mutating user object
  const normalized: MotionConfig = { ...props }
  // React → Vue mapping
  if (normalized.whileTap && !normalized.whilePress) {
    ;normalized.whilePress = normalized.whileTap
    delete normalized.whileTap
  }

  return normalized
}


type ChannelGroups = Record<MotionChannel, MotionProps[]>

const channelOrder: MotionChannel[] = [
  "passive",
  "lifecycle",
  "layout",
  "interaction",
]

export default defineComponent({
  props: {
    animation: {
      type: [Object, Array] as PropType<AnimationPropType>,
      default: undefined
    }
  },
  render() {
    let node: VNode[] = this.$slots.default?.() || []

    if (this.animation) {
      const list = Array.isArray(this.animation) ? this.animation : [this.animation]

      const groups: ChannelGroups = {
        passive: [],
        lifecycle: [],
        interaction: [],
        layout: [],
      }

      for (const token of list) {
        let config = token.config

        // Normalize only interaction channel
        if (token.channel === "interaction") {
          config = normalizeInteractionProps(config)
        }
        groups[token.channel].push(config)
      }

      for (const channel of channelOrder) {
        if (groups[channel].length) {
          const props = mergeMotionProps<MotionProps>(groups[channel])
          const innerNode = node
          node = [h(motion.div, props, { default: () => innerNode })]
        }
      }
    }

    return h('div', {}, node)
  }
})
</script>
