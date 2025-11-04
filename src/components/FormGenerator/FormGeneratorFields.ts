import { z } from 'zod'
import type { FormGeneratorField } from '@/components/FormGenerator/types.ts'
import { toTypedSchema } from '@vee-validate/zod'

export function buildFormSchema(fields: FormGeneratorField[]) {
  function buildFieldSchema(item: FormGeneratorField): z.ZodSchema {
    if (!item.required) return z.any().optional()

    if (item.type === 'select') return z.string().min(1, 'Обязательное поле')

    if (item.type === 'checkbox')
      return z.literal(true, { errorMap: () => ({ message: 'Необходимо согласие' }) })

    let inputSchema = z.string({ message: 'Обязательное поле' })

    if (item.type === 'email') inputSchema = inputSchema.email('Некорректный email адрес')

    if (item.minLength)
      inputSchema = inputSchema.min(item.minLength, `Минимум ${item.minLength} символов`)

    if (item.maxLength)
      inputSchema = inputSchema.max(item.maxLength, `Максимум ${item.maxLength} символов`)

    if (item.pattern)
      inputSchema = inputSchema.regex(new RegExp(item.pattern), 'Некорректный формат')

    return inputSchema
  }

  return toTypedSchema(
    z.object(Object.fromEntries(fields.map((item) => [item.model, buildFieldSchema(item)]))),
  )
}
