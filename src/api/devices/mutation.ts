import { AddNewDeviceProps } from '@api/devices/types'
import { api } from '@axios/index'
import { AxiosError } from 'axios'
import { UseMutationOptions, useMutation } from 'react-query'

export const useAddNewDevice = (
  options?: UseMutationOptions<void, AxiosError, AddNewDeviceProps>,
) =>
  useMutation<void, AxiosError, AddNewDeviceProps>({
    mutationFn: (body) => api.post(`/devices`, body),
    ...options,
  })
export const useEditDevice = (
  deviceId: string,
  options?: UseMutationOptions<void, AxiosError, AddNewDeviceProps>,
) =>
  useMutation<void, AxiosError, AddNewDeviceProps>({
    mutationFn: (body) => api.post(`/devices/${deviceId}`, body),
    ...options,
  })
export const useDeleteDevice = (
  deviceId: string,
  options?: UseMutationOptions<void, AxiosError, void>,
) =>
  useMutation<void, AxiosError, void>({
    mutationFn: () => api.delete(`/devices/${deviceId}`),
    ...options,
  })
