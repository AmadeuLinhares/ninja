export enum DeviceType {
  WINDOWS = `WINDOWS`,
  MAC = `MAC`,
  LINUX = `LINUX`,
}

export type DeviceItemProps = {
  id: string
  system_name: string
  type: DeviceType
  hdd_capacity: string
}

export type AddNewDeviceProps = {
  system_name: string
  type: string
  hdd_capacity: string
}
