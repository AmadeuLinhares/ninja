import { useCallback, useMemo } from 'react'

import { GetDevicesKey } from '@api/devices/keys'
import { useDeleteDevice } from '@api/devices/mutation'
import { Typography } from '@components/Typography'
import { Close } from '@mui/icons-material'
import { Box, Button, CircularProgress, IconButton, Modal } from '@mui/material'
import { WarningModalStyle } from '@pages/DeviceList/components/Modals/style'
import { ModalWarningProps } from '@pages/DeviceList/components/Modals/types'
import tokens from '@theme/tokens'
import { useQueryClient } from 'react-query'

export const ConfirmAction = ({
  open,
  onClose,
  deviceId,
  deviceName,
}: ModalWarningProps) => {
  console.log(`===>`, deviceId, deviceName)
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useDeleteDevice(deviceId, {
    onError: () => {
      alert(`Error to delete device. Try again`)
      onClose()
    },
    onSuccess: () => {
      alert(`Success to delete device`)
      queryClient.invalidateQueries(GetDevicesKey())
      onClose()
    },
  })

  const header = useMemo(() => {
    return (
      <Box
        display={`flex`}
        justifyContent={`space-between`}
        alignItems={`center`}
        paddingBottom={tokens.SPACINGS.spacing24}
      >
        <Box>
          <Typography variant="modalTitle">Delete Device?</Typography>
        </Box>
        <Box>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </Box>
    )
  }, [onClose])

  const handleDelete = useCallback(() => {
    mutate()
  }, [mutate])

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={WarningModalStyle}>
        {header}
        <Box
          display={`grid`}
          component={`form`}
          rowGap={tokens.SPACINGS.spacing12}
        >
          <Box>
            <Typography variant="quaternary">
              You are about to delete the device {deviceName}. This action
              cannot be undone.
            </Typography>
          </Box>
          <Box
            display={`flex`}
            justifyContent={`flex-end`}
            alignItems={`center`}
            paddingTop={tokens.SPACINGS.spacing12}
          >
            <Box
              display={`flex`}
              justifyContent={`center`}
              alignItems={`center`}
            >
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleDelete}
                style={{
                  background: tokens.colors.red.RED,
                  marginLeft: tokens.SPACINGS.spacing4,
                }}
              >
                {isLoading ? (
                  <CircularProgress size={`15px`} color={`inherit`} />
                ) : (
                  `Delete`
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
