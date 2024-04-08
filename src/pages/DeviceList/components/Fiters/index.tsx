import { useCallback, useMemo } from 'react'

import { GetDevicesKey } from '@api/devices/keys'
import { Refresh } from '@assets/icons/Refresh'
import { Search } from '@assets/icons/Search'
import { Input } from '@components/Input'
import { Select } from '@components/Select'
import { sortByItems, sortDeviceType } from '@configs/contants'
import { Box, IconButton, InputAdornment } from '@mui/material'
import { useGlobalFilter } from '@storage/globalFilters'
import tokens from '@theme/tokens'
import { Controller, useForm } from 'react-hook-form'
import { useQueryClient } from 'react-query'

type FilterForm = {
  search: string
  device_type: string
  sort_by: 'asc' | 'desc' | boolean
}

export const Filters = () => {
  const queryClient = useQueryClient()
  const { setDeviceName, setDeviceType, setStorageFilter } = useGlobalFilter(
    (state) => state,
  )
  const { register, watch, control } = useForm<FilterForm>({})

  const onRefreshQuery = useCallback(() => {
    queryClient.invalidateQueries(GetDevicesKey())
  }, [queryClient])

  const searchField = watch(`search`)
  const device = watch(`device_type`)
  const sort = watch(`sort_by`)

  useMemo(() => {
    setDeviceName(searchField)
  }, [searchField, setDeviceName])
  useMemo(() => {
    setDeviceType(device)
  }, [device, setDeviceType])
  useMemo(() => {
    setStorageFilter(sort)
  }, [setStorageFilter, sort])

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
            {...register(`search`)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box minWidth={`290px`}>
          <Controller
            control={control}
            name="device_type"
            // eslint-disable-next-line react/jsx-no-bind
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                items={sortDeviceType}
                native={false}
                autoWidth={false}
                multiple={false}
                label="Device Type"
                ref={ref}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
          />
        </Box>
        <Box minWidth={`155px`} marginRight={tokens.SPACINGS.spacing8}>
          <Controller
            control={control}
            name="sort_by"
            // eslint-disable-next-line react/jsx-no-bind
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                items={sortByItems}
                native={false}
                autoWidth={false}
                multiple={false}
                label="Sort by"
                ref={ref}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
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
