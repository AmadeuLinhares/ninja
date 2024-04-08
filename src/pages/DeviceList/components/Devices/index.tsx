import { useMemo } from 'react'

import { useGetDevices } from '@api/devices/query'
import { Skeleton } from '@components/Skeleton'
import { Typography } from '@components/Typography'
import { Box } from '@mui/material'
import { DeviceItem } from '@pages/DeviceList/components/Devices/components/Item'
import { useGlobalFilter } from '@storage/globalFilters'
import tokens from '@theme/tokens'
import _ from 'lodash'
export const Devices = () => {
  const { data, isLoading, isFetching } = useGetDevices()
  const { deviceName, deviceType, storageFilter } = useGlobalFilter(
    (state) => state,
  )

  const formattedData = useMemo(() => {
    if (data?.length) {
      let result = data

      if (deviceName) {
        result = result.filter((item) =>
          item.system_name.toLowerCase().includes(deviceName.toLowerCase()),
        )
      }

      if (deviceType) {
        result = result.filter(
          (item) => item.type.toLowerCase() === deviceType.toLowerCase(),
        )
      }

      return _.orderBy(result, [`hdd_capacity`], [storageFilter])
    }
  }, [data, deviceName, deviceType, storageFilter])

  const renderItems = useMemo(() => {
    if (formattedData?.length)
      return formattedData.map((val) => <DeviceItem data={val} key={val.id} />)

    return null
  }, [formattedData])

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
