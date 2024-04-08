import { create } from 'zustand'

type GlobalFilterProps = {
  deviceName: string
  setDeviceName: (name: string) => void
  deviceType: string | null
  setDeviceType: (device: string) => void
  storageFilter: 'asc' | 'desc' | boolean
  setStorageFilter: (storage: 'asc' | 'desc' | boolean) => void
}

export const useGlobalFilter = create<GlobalFilterProps>((set) => ({
  deviceName: ``,
  setDeviceName: (name) => set({ deviceName: name }),
  deviceType: null,
  setDeviceType: (device) => set({ deviceType: device }),
  storageFilter: `asc`,
  setStorageFilter: (storage) => set({ storageFilter: storage }),
}))
