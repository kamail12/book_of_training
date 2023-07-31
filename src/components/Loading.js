import React from 'react'
import { Stack } from '@mui/material'
import { BallTriangle } from 'react-loader-spinner'

const Loading = () => {
  return (
    <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
>
    <BallTriangle color="gray" />
</Stack>
  )
}

export default Loading