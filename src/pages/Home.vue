<script setup lang="ts">
import type { FormGeneratorData, FormGeneratorField } from '@/components/FormGenerator/types.ts'
import FormGenerator from '@/components/FormGenerator/FormGenerator.vue'
import { ref } from 'vue'

const response: { fields: FormGeneratorField[] } = {
  fields: [
    { type: 'text', label: 'Имя', model: 'name', required: true },
    { type: 'email', label: 'Email', model: 'email', required: true },
    {
      type: 'password',
      label: 'Пароль',
      model: 'password',
      required: true,
      minLength: 6,
    },
    {
      type: 'select',
      label: 'Роль',
      model: 'role',
      options: ['Админ', 'Пользователь'],
      required: true,
    },
    {
      type: 'checkbox',
      label: 'Согласен с условиями',
      model: 'terms',
      required: true,
    },
  ],
}

const formData = ref<FormGeneratorData | null>(null)
</script>

<template>
  <div class="min-h-dvh p-10 flex flex-col gap-5 items-center justify-center bg-blue-100">
    <span v-show="formData" class="text-center text-xs"> Данные формы: <br />{{ formData }} </span>
    <FormGenerator :schema="response.fields" v-model="formData" />
  </div>
</template>
