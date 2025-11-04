<script setup lang="ts">
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input/index'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  name: string
  placeholder?: string
  label?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <FormField v-slot="{ componentField }" :name>
    <FormItem>
      <FormLabel v-if="label" class="text-gray-600">
        {{ label }}
      </FormLabel>
      <FormControl>
        <Input
          type="text"
          autocomplete="off"
          :placeholder="placeholder || `Введтие ${label || name}`"
          v-bind="componentField"
          :class="props.class"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

<style scoped></style>
