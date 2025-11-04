<script setup lang="ts">
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  name: string
  options: string[]
  placeholder?: string
  label?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem>
      <FormLabel v-if="label">{{ label }}</FormLabel>
      <Select v-bind="componentField" :class="props.class">
        <FormControl>
          <SelectTrigger class="w-full">
            <SelectValue :placeholder="placeholder || `Выберите ${label}`" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectGroup>
            <SelectItem v-for="option in options" :key="option" :value="option">
              {{ option }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
