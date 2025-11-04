<script setup lang="ts">
import FormInput from '@/components/ui/input/FormInput.vue'
import FormPasswordInput from '@/components/ui/input/FormPasswordInput.vue'
import FormSelect from '@/components/ui/select/FormSelect.vue'
import { useForm } from 'vee-validate'
import FormCheckbox from '@/components/ui/checkbox/FormCheckbox.vue'
import { Button } from '@/components/ui/button'
import { buildFormSchema } from '@/components/FormGenerator/FormGeneratorFields.ts'
import type { FormGeneratorData, FormGeneratorField } from '@/components/FormGenerator/types.ts'

const { schema } = defineProps<{
  schema: FormGeneratorField[]
  pending?: boolean
  headerText?: string
  buttonText?: string
}>()

const formData = defineModel<FormGeneratorData | null>({ required: true })

const { handleSubmit, isFieldDirty, errors } = useForm({
  validationSchema: buildFormSchema(schema),
  initialValues: formData.value,
  validateOnMount: false,
})

const onSubmit = handleSubmit((values) => (formData.value = values))
</script>

<template>
  <form @submit="onSubmit" class="grid gap-5 p-5 w-100 border rounded-2xl bg-white">
    <slot name="header">
      <h2 class="text-xl text-center font-semibold">{{ headerText || 'Форма' }}</h2>
    </slot>
    <template v-for="(item, index) in schema" :key="index">
      <FormInput
        v-if="item.type === 'text' || item.type === 'email'"
        :name="item.model"
        :placeholder="item.placeholder"
        :label="item.label"
        :validate-on-blur="false"
        :validate-on-input="false"
        :validate-on-change="isFieldDirty(item.model)"
        :validate-on-model-update="!!errors[item.model]"
      />
      <FormPasswordInput
        v-else-if="item.type === 'password'"
        :name="item.model"
        :placeholder="item.placeholder"
        :label="item.label"
        :validate-on-blur="false"
        :validate-on-input="false"
        :validate-on-change="isFieldDirty(item.model)"
        :validate-on-model-update="!!errors[item.model]"
      />
      <FormSelect
        v-else-if="item.type === 'select'"
        :name="item.model"
        :options="item.options"
        :placeholder="item.placeholder"
        :label="item.label"
      />
      <FormCheckbox v-else-if="item.type === 'checkbox'" :name="item.model" :label="item.label" />
    </template>
    <slot name="buttons">
      <Button :disabled="pending" class="mt-5 mx-auto">{{ buttonText || 'Отравить' }}</Button>
    </slot>
  </form>
</template>
