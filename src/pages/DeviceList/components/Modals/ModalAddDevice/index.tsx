import { useEffect, useMemo } from 'react'

import { GetDevicesKey } from '@api/devices/keys'
import { useAddNewDevice, useEditDevice } from '@api/devices/mutation'
import { DeviceItemProps } from '@api/devices/types'
import { Close } from '@assets/icons/Close'
import { Input } from '@components/Input'
import { Select } from '@components/Select'
import { Typography } from '@components/Typography'
import { deviceTypeList } from '@configs/contants'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, CircularProgress, IconButton, Modal } from '@mui/material'
import { ModalStyle } from '@pages/DeviceList/components/Modals/style'
import { ModalAddDeviceProps } from '@pages/DeviceList/components/Modals/types'
import { Form, cosentCollectionFormSchema } from '@pages/DeviceList/types'
import tokens from '@theme/tokens'
import { Controller, useForm } from 'react-hook-form'
import { useQueryClient } from 'react-query'

export const ModalAddDevice = ({
  open,
  onClose,
  deviceId,
}: ModalAddDeviceProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(cosentCollectionFormSchema),
    defaultValues: {
      device_type: `WINDOWS`,
    },
  })

  const queryClient = useQueryClient()

  useEffect(() => {
    if (deviceId) {
      const cachedData = queryClient.getQueryData<DeviceItemProps[] | []>(
        GetDevicesKey(),
      )
      const item = cachedData?.find((val) => val.id === deviceId)
      if (item) {
        setValue(`device_type`, item.type)
        setValue(`hdd_capacity`, item.hdd_capacity)
        setValue(`system_name`, item.system_name)
      }
    }
  }, [deviceId])

  const { isLoading, mutate } = useAddNewDevice({
    onError: () => {
      alert(`Error to add new device. Try again`)
      reset()
    },
    onSuccess: () => {
      alert(`Success to add device`)
      queryClient.invalidateQueries(GetDevicesKey())
      reset()
      onClose()
    },
  })

  const { isLoading: isLoadingEdit, mutate: editMutate } = useEditDevice(
    deviceId ?? ``,
    {
      onError: () => {
        alert(`Error to edit device. Try again`)
        reset()
      },
      onSuccess: () => {
        alert(`Success to edit device`)
        queryClient.invalidateQueries(GetDevicesKey())
        reset()
        onClose()
      },
    },
  )

  const header = useMemo(() => {
    return (
      <Box
        display={`flex`}
        justifyContent={`space-between`}
        alignItems={`center`}
        paddingBottom={tokens.SPACINGS.spacing24}
      >
        <Box>
          <Typography variant="modalTitle">
            {deviceId ? `Edit` : `Add`} Device
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </Box>
    )
  }, [deviceId, onClose])

  const submit = (dataForm: Form) => {
    if (deviceId) {
      editMutate({
        hdd_capacity: dataForm.hdd_capacity,
        system_name: dataForm.system_name,
        type: dataForm.device_type,
      })
    } else {
      mutate({
        hdd_capacity: dataForm.hdd_capacity,
        system_name: dataForm.system_name,
        type: dataForm.device_type,
      })
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={ModalStyle}>
        {header}
        <Box
          display={`grid`}
          component={`form`}
          onSubmit={handleSubmit(submit)}
          rowGap={tokens.SPACINGS.spacing12}
        >
          <Input
            placeholder="System Name"
            {...register(`system_name`)}
            error={!!errors.system_name}
            type="text"
            helperText={errors.system_name?.message}
          />

          <Controller
            control={control}
            name="device_type"
            // eslint-disable-next-line react/jsx-no-bind
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                items={deviceTypeList}
                native={false}
                autoWidth={false}
                multiple={false}
                label="Device Type"
                error={!!errors.device_type}
                helperText={errors.device_type?.message}
                ref={ref}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            )}
          />

          <Input
            placeholder="HDD capacity (GB)"
            {...register(`hdd_capacity`)}
            error={!!errors.hdd_capacity}
            type="text"
            helperText={errors.hdd_capacity?.message}
          />
          <Box
            display={`flex`}
            justifyContent={`flex-end`}
            alignItems={`center`}
            paddingTop={tokens.SPACINGS.spacing12}
          >
            {isLoading || isLoadingEdit ? (
              <CircularProgress size={`15px`} color={`inherit`} />
            ) : (
              <Button variant="contained" type="submit">
                submit
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
