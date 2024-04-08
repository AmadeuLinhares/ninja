import { useCallback } from 'react'

import { GetDevicesKey } from '@api/devices/keys'
import { Refresh } from '@assets/icons/Refresh'
import { Search } from '@assets/icons/Search'
import { Input } from '@components/Input'
import { Select } from '@components/Select'
import { SelectItem } from '@components/Select/types'
import { Box, IconButton, InputAdornment } from '@mui/material'
import tokens from '@theme/tokens'
import { useQueryClient } from 'react-query'

const MOCK: SelectItem[] = [
  {
    name: `testeee`,
    value: 1,
  },
]

export const Filters = () => {
  const queryClient = useQueryClient()

  const onRefreshQuery = useCallback(() => {
    queryClient.invalidateQueries(GetDevicesKey())
  }, [queryClient])
  return (
    <Box
      display={`flex`}
      justifyContent={`space-between`}
      alignItems={`center`}
    >
      <Box display={`flex`}>
        <Box minWidth={`270px`} marginRight={tokens.SPACINGS.spacing8}>
          <Input
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box minWidth={`155px`} marginRight={tokens.SPACINGS.spacing8}>
          <Select
            items={MOCK}
            native={false}
            autoWidth={false}
            multiple={false}
            label="1"
          />
        </Box>
        <Box minWidth={`290px`}>
          <Select
            items={MOCK}
            native={false}
            autoWidth={false}
            multiple={false}
            label="2"
          />
        </Box>
      </Box>
      <Box>
        <IconButton onClick={onRefreshQuery}>
          <Refresh />
        </IconButton>
      </Box>
    </Box>
  )
}
