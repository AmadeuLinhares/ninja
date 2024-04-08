import { RouteNames } from '@configs/routes'
import { DefaultLayout } from '@layouts/DefaultLayout'
import { DeviceList } from '@pages/DeviceList'
import { Routes, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={RouteNames.home} element={<DeviceList />} />
      </Route>
    </Routes>
  )
}
