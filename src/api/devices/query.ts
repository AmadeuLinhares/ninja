import { GetDevicesKey } from '@api/devices/keys'
import { DeviceItemProps } from '@api/devices/types'
import { api } from '@axios/index'
import { AxiosError } from 'axios'
import { UseQueryOptions, useQuery } from 'react-query'
export const useGetDevices = (
  options?: UseQueryOptions<DeviceItemProps[], AxiosError>,
) => {
  return useQuery({
    queryKey: GetDevicesKey(),
    queryFn: () =>
      api.get<DeviceItemProps[]>(`devices`).then((response) => {
        const { data } = response
        return data
      }),
    ...options,
  })
}
