<script setup lang="ts">
import { Eye, EyeOff } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { type HTMLAttributes, ref } from 'vue'

const { name = 'password', placeholder = 'Ваш пароль' } = defineProps<{
  name?: string
  placeholder?: string
  label?: string
  class?: HTMLAttributes['class']
}>()

const isActive = ref(false)
</script>

<template>
  <FormField v-slot="{ componentField }" :name>
    <FormItem>
      <FormLabel v-if="label" class="text-gray-600">
        {{ label }}
      </FormLabel>
      <div class="relative w-full max-w-sm items-center">
        <FormControl>
          <Input
            :type="isActive ? 'text' : 'password'"
            v-bind="componentField"
            autocomplete="off"
            :placeholder
            :class="$props['class']"
          />
        </FormControl>
        <button
          type="button"
          tabindex="-1"
          class="absolute end-0 inset-y-0 flex items-center justify-center px-2 pointer-events-auto"
          @mousedown.prevent
          @click="isActive = !isActive"
        >
          <Eye v-if="!isActive" class="size-5 text-muted-foreground" />
          <EyeOff v-else class="size-5 text-muted-foreground" />
        </button>
      </div>

      <FormMessage />
    </FormItem>
  </FormField>
</template>
