import { useCallback, useState } from 'react'

import { DeviceItemProps, DeviceType } from '@api/devices/types'
import { Dots } from '@assets/icons/Dots'
import { Linux } from '@assets/icons/Linux'
import { Mac } from '@assets/icons/Mac'
import { Windows } from '@assets/icons/Windows'
import { Typography } from '@components/Typography'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import { ConfirmAction } from '@pages/DeviceList/components/Modals/ConfirmAction'
import { ModalAddDevice } from '@pages/DeviceList/components/Modals/ModalAddDevice'
import tokens from '@theme/tokens'
type Props = {
  data: DeviceItemProps
}

export const DeviceItem = ({ data }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [onDeleteDevice, setOnDeleteDevice] = useState(false)
  const [onEditDevice, setOnEditDevice] = useState(false)
  const open = Boolean(anchorEl)
  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])
  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])
  const HandlePressEdit = useCallback(() => {
    setAnchorEl(null)
    setOnEditDevice(true)
    setOnDeleteDevice(false)
  }, [])
  const HandlePressDelete = useCallback(() => {
    setAnchorEl(null)
    setOnEditDevice(false)
    setOnDeleteDevice(true)
  }, [])
  const onCloseEditModal = useCallback(() => {
    setOnEditDevice(false)
  }, [])
  const onCloseDeleteModal = useCallback(() => {
    setOnDeleteDevice(false)
  }, [])

  const renderIcon = (icon: string) => {
    switch (icon) {
      case DeviceType.LINUX:
        return <Linux />
      case DeviceType.MAC:
        return <Mac />
      case DeviceType.WINDOWS:
        return <Windows />

      default:
        return <Windows />
    }
  }

  return (
    <Box
      key={data.system_name}
      paddingY={tokens.SPACINGS.spacing8}
      paddingX={tokens.SPACINGS.spacing8}
      borderBottom={`solid 1px ${tokens.colors.grey.GRAY_220}`}
      display={`flex`}
      justifyContent={`space-between`}
      alignItems={`center`}
      sx={{
        '&:hover': {
          backgroundColor: tokens.colors.grey.GRAY_50,
        },
      }}
    >
      <Box>
        <Box
          paddingBottom={tokens.SPACINGS.spacing4}
          display={`flex`}
          justifyContent={`flex-start`}
          alignItems={`center`}
        >
          <Box
            display={`flex`}
            justifyContent={`center`}
            alignItems={`center`}
            marginRight={tokens.SPACINGS.spacing4}
          >
            {renderIcon(data.type)}
          </Box>
          <Typography variant="quaternary">{data.system_name}</Typography>
        </Box>
        <Box>
          <Typography variant="secondary">
            {data.type} workstation - {data.hdd_capacity} GB
          </Typography>
        </Box>
      </Box>
      <Box>
        <IconButton onClick={handleClick}>
          <Dots />
        </IconButton>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: `top`,
            horizontal: `left`,
          }}
          transformOrigin={{
            vertical: `top`,
            horizontal: `left`,
          }}
        >
          <MenuItem onClick={HandlePressEdit}>
            <Typography variant="quaternary">Edit</Typography>
          </MenuItem>
          <MenuItem onClick={HandlePressDelete}>
            <Typography variant="warning">Delete</Typography>
          </MenuItem>
        </Menu>
      </Box>
      {onDeleteDevice && (
        <ConfirmAction
          deviceId={data.id}
          deviceName={data.system_name}
          onClose={onCloseDeleteModal}
          open={true}
        />
      )}

      {!!onEditDevice && (
        <ModalAddDevice
          onClose={onCloseEditModal}
          open={true}
          deviceId={data.id}
        />
      )}
    </Box>
  )
}
