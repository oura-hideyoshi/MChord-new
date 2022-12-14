import { Box, TextField, Typography, Grid } from '@mui/material'
import { NextPage } from 'next'
import { useState } from 'react'
import { transLetters2Upper, lettersTranslatable2Upper, transLetters2Lower, lettersTranslatable2Lower } from '../utils/letters'

export const translate: NextPage = () => {
  const [uppers, setUppers] = useState('')
  const [lowers, setLowers] = useState('')
  return (
    <Box>
      <Typography variant={'h2'}>translate letters</Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography>You can translate letters to upper chars.</Typography>
          <Typography>Only these letters : {lettersTranslatable2Upper}</Typography>
          <Grid container>
            <Grid item xs={12} md={6}>
              <TextField label={'please input here'} onChange={(event) => setUppers(transLetters2Upper(event.target.value))} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField disabled value={uppers} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>You can translate letters to lower chars.</Typography>
          <Typography>Only these letters : {lettersTranslatable2Lower}</Typography>
          <Grid container>
            <Grid item xs={12} md={6}>
              <TextField label={'please input here'} onChange={(event) => setLowers(transLetters2Lower(event.target.value))} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField disabled value={lowers} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default translate
