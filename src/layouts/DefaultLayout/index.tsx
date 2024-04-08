import { SideBar } from '@components/SideBar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <Box display={`grid`}>
      <SideBar />
      <Outlet />
    </Box>
  )
}
