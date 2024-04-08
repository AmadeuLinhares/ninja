import { useCallback, useState } from 'react'

import { Plus } from '@assets/icons/Plus'
import { Typography } from '@components/Typography'
import { Box, Button } from '@mui/material'
import { ModalAddDevice } from '@pages/DeviceList/components/Modals/ModalAddDevice'
import tokens from '@theme/tokens'

export const AddDevice = () => {
  const [openAddDeviceModal, setOpenAddDeviceModal] = useState(false)
  const onCloseModal = useCallback(() => {
    setOpenAddDeviceModal(false)
  }, [])
  const onOpenModal = useCallback(() => {
    setOpenAddDeviceModal(true)
  }, [])
  return (
    <Box
      display={`flex`}
      justifyContent={`space-between`}
      alignItems={`center`}
    >
      <Box>
        <Typography>Devices</Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          startIcon={
            <Plus color={tokens.colors.grey.WHITE} width="13" height="14" />
          }
          onClick={onOpenModal}
        >
          Add device
        </Button>
      </Box>
      {openAddDeviceModal && (
        <ModalAddDevice open={true} onClose={onCloseModal} />
      )}
    </Box>
  )
}
