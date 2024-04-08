export type ModalAddDeviceProps = {
  open: boolean
  onClose: () => void
  deviceId?: string
}
export type ModalWarningProps = Omit<ModalAddDeviceProps, 'deviceId'> & {
  deviceId: string
  deviceName: string
}
