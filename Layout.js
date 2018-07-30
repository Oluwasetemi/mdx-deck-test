import React from 'react'
import Box from 'superbox'

export default ({ children }) =>
  <Box
    p={2}
    bg='purple'
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '90vh',
      '& a': {
        display: 'block',
        fontWeight: 'bold',
        color: 'white'
      }
    }}>
    {children}
  </Box>