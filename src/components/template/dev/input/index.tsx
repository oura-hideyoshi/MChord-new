import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import ChordTypeSelectorView from './chord-type-selector'
import NoteSelectorView from './note-selector'

type Props = {}

const InputPage = ({ ...props }: Props) => {
  return (
    <Box>
      <Link href={'/'}>back to home</Link>
      <Typography variant={'h2'}>input components</Typography>
      <NoteSelectorView />
      <ChordTypeSelectorView />
    </Box>
  )
}

export default InputPage
