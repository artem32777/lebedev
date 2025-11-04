<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils.ts'

const props = defineProps<{
  name: string
  label: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <FormField v-slot="{ value, handleChange }" type="checkbox" :name="name">
    <FormItem>
      <div :class="cn('flex flex-row items-center gap-x-3 space-y-0', props.class)">
        <FormControl>
          <Checkbox :model-value="value" @update:model-value="handleChange" class="size-5" />
        </FormControl>
        <FormLabel class="cursor-pointer">{{ label }}</FormLabel>
      </div>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
