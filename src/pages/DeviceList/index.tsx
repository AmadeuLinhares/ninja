import { Box } from '@mui/material'
import { AddDevice } from '@pages/DeviceList/components/AddDevice'
import { Devices } from '@pages/DeviceList/components/Devices'
import { Filters } from '@pages/DeviceList/components/Fiters'
import tokens from '@theme/tokens'

export const DeviceList = () => {
  return (
    <Box
      paddingX={tokens.SPACINGS.spacing24}
      paddingY={tokens.SPACINGS.spacing32}
    >
      <Box
        display={`grid`}
        rowGap={tokens.SPACINGS.spacing24}
        component={`form`}
      >
        <Box>
          <AddDevice />
        </Box>
        <Box>
          <Filters />
        </Box>
        <Box>
          <Devices />
        </Box>
      </Box>
    </Box>
  )
}
