import { useMemo } from 'react'

import { useGetDevices } from '@api/devices/query'
import { Skeleton } from '@components/Skeleton'
import { Typography } from '@components/Typography'
import { Box } from '@mui/material'
import { DeviceItem } from '@pages/DeviceList/components/Devices/components/Item'
import tokens from '@theme/tokens'

export const Devices = () => {
  const { data, isLoading, isFetching } = useGetDevices()
  const renderItems = useMemo(() => {
    if (data?.length)
      return data.map((val) => <DeviceItem data={val} key={val.id} />)

    return null
  }, [data])

  return isLoading || isFetching ? (
    <Skeleton />
  ) : (
    <Box display={`grid`}>
      <Box
        borderBottom={`solid 1px ${tokens.colors.grey.GRAY_400}`}
        paddingY={tokens.SPACINGS.spacing8}
      >
        <Typography variant="quaternary">Devices</Typography>
      </Box>
      <Box display={`grid`}>{renderItems}</Box>
    </Box>
  )
}
