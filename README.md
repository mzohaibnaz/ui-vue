# @mzohaibnaz/ui-vue

Vue adapter for **ui-core**.

This package:
- Renders Vue components
- Uses Tailwind tokens from ui-core
- Provides AnimatorMotion for motion tokens

Core repo:
https://github.com/mzohaibnaz/ui-core

---

## Ecosystem

| Package | Description |
|---|---|
| [ui-core](https://github.com/mzohaibnaz/ui-core) | Design tokens & motion |
| [ui-react](https://github.com/mzohaibnaz/ui-react) | React adapter |
| [ui-vue](https://github.com/mzohaibnaz/ui-vue) | Vue components |

---

## How ui-core is used

Vue components import Tailwind tokens and utilities:

```ts
import { buttonVariants } from "@mzohaibnaz/ui-core/components/button"
import { cn } from "@mzohaibnaz/ui-core/utils"
```

The Vue layer handles rendering while styles come from ui-core.

---

## Usage

```vue
<script setup>
import { Button } from "@mzohaibnaz/ui-vue"
</script>

<template>
  <Button variant="primary">
    Click me
  </Button>
</template>
```

---

# Motion

```vue
<script setup>
import { AnimatorMotion } from "@mzohaibnaz/ui-vue"
import { hover, press } from "@mzohaibnaz/ui-core/animations/motion/interactions"
</script>

<template>
  <AnimatorMotion :animation="[hover.lift, press.base]">
    <Button>Toggle Mode</Button>
  </AnimatorMotion>
</template>
```

Works with:
- ui-vue components
- custom components
- native elements

---

## Installation

```
npm install @mzohaibnaz/ui-vue @mzohaibnaz/ui-core
```

---

## Related Repositories

- https://github.com/mzohaibnaz/ui-core
- https://github.com/mzohaibnaz/ui-react

---

## License

MIT
