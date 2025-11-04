export type FormGeneratorData = Record<string, string | boolean>

export type FormGeneratorField = FormGeneratorInput | FormGeneratorSelect | FormGeneratorCheckbox

type FormGeneratorFieldBase = {
  model: string
  required?: boolean
}

type FormGeneratorInput = FormGeneratorFieldBase & {
  type: 'text' | 'email' | 'password'
  label?: string
  placeholder?: string
  minLength?: number
  maxLength?: number
  pattern?: string
}

type FormGeneratorSelect = FormGeneratorFieldBase & {
  type: 'select'
  options: string[]
  label?: string
  placeholder?: string
}

type FormGeneratorCheckbox = FormGeneratorFieldBase & {
  type: 'checkbox'
  label: string
}
