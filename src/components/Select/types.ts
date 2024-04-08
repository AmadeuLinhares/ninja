import { SelectInputProps } from '@mui/material/Select/SelectInput'

export type SelectItem = {
  name: string
  value: string | number
}

export interface SelectProps extends SelectInputProps {
  items: SelectItem[]
  label: string
  helperText?: string
  defaultValue?: string | number
}
