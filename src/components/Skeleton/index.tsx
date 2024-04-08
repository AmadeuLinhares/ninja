import { Box } from '@mui/material'
import SkeletonMui from '@mui/material/Skeleton'
import tokens from '@theme/tokens'

export const Skeleton = () => {
  return (
    <Box display={`grid`} rowGap={tokens.SPACINGS.spacing32}>
      <Box display={`grid`} gridTemplateColumns={`100%`}>
        <SkeletonMui variant="rounded" width={`100%`} height={60} />
      </Box>
      <Box display={`grid`} rowGap={tokens.SPACINGS.spacing24}>
        <SkeletonMui variant="rectangular" width={`100%`} height={40} />
        <SkeletonMui variant="rounded" width={`100%`} height={40} />
        <SkeletonMui variant="rectangular" width={`100%`} height={40} />
        <SkeletonMui variant="rounded" width={`100%`} height={40} />
        <SkeletonMui variant="rectangular" width={`100%`} height={40} />
        <SkeletonMui variant="rounded" width={`100%`} height={40} />
      </Box>
    </Box>
  )
}
