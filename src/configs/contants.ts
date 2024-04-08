import { DeviceType } from '@api/devices/types'

export const deviceTypeList = [
  {
    name: DeviceType.LINUX,
    value: DeviceType.LINUX,
  },
  {
    name: DeviceType.MAC,
    value: DeviceType.MAC,
  },
  {
    name: DeviceType.WINDOWS,
    value: DeviceType.WINDOWS,
  },
]
export enum sortOptions {
  HDD_Descending = `desc`,
  HDD_Ascending = `asc`,
}

export const sortByItems = [
  {
    name: `HDD Capacity (Descending)`,
    value: `asc`,
  },
  {
    name: `HDD Capacity (Ascending)`,
    value: `desc`,
  },
]

export const sortDeviceType = [
  {
    name: `Windows`,
    value: DeviceType.WINDOWS,
  },
  {
    name: `Mac`,
    value: DeviceType.MAC,
  },
  {
    name: `Linux`,
    value: DeviceType.LINUX,
  },
]
