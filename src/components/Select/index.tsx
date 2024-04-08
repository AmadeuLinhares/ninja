import { forwardRef } from 'react'

import { Typography } from '@components/Typography'
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectMui,
} from '@mui/material'
import tokens from '@theme/tokens'

import { SelectProps } from './types'

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ items, label, helperText, ...rest }, ref) => {
    return (
      <Box>
        <FormControl fullWidth>
          <InputLabel id="select-componente-label-id">{label}</InputLabel>
          <SelectMui
            labelId="select-componente-label-id"
            id="demo-simple-select"
            label={label}
            inputRef={ref}
            {...rest}
          >
            {items?.map((val) => (
              <MenuItem key={val.value} value={val.value}>
                {val.name}
              </MenuItem>
            ))}
          </SelectMui>
          <Box
            paddingLeft={tokens.SPACINGS.spacing16}
            paddingTop={tokens.SPACINGS.spacing8}
          >
            <Typography variant="error">{helperText}</Typography>
          </Box>
        </FormControl>
      </Box>
    )
  },
)
