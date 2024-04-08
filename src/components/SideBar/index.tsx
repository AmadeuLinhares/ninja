import Logo from '@assets/NinjaOneLogo.png'
import { Box } from '@mui/material'
import tokens from '@theme/tokens'

export const SideBar = () => {
  return (
    <Box
      bgcolor={tokens.colors.blue.BLUE_700}
      paddingX={`24px`}
      paddingY={`12.5px`}
      data-testid="sideBar-component-id"
    >
      <Box>
        <img src={Logo} width={`120px`} height={`25.91px`} />
      </Box>
    </Box>
  )
}
