import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material'
import { useState } from 'react'
import { transLetters2Roman } from '../../utils/letters'

type Props = {
  onChange?: (value: string) => void
}

const DegreeSelector = ({ ...props }: Props) => {
  const [state, setState] = useState({ note: 'โ ', accidental: '' })
  const [open, setOpen] = useState({ note: false, accidental: false })
  const notes = [1, 2, 3, 4, 5, 6, 7].map((item) => {
    return { label: transLetters2Roman(item.toString()), value: item.toString() }
  })
  const accidentals = [
    { label: '๐ฎ', value: '' },
    { label: '๐ฌ', value: 'b' },
    { label: 'โฏ', value: '#' },
  ]
  const output = ({ note, accidental }: { note: string; accidental: string }) => {
    props.onChange ??= () => {}
    return props.onChange(note + accidental)
  }
  const handleChangeNote = (e: SelectChangeEvent) => {
    // FIXME ใใฃใจใใๆธใๆนใใใ ใใ
    setState({ ...state, note: e.target.value })
    output({ ...state, note: e.target.value })
  }
  const handleChangeAccidental = (e: SelectChangeEvent) => {
    // FIXME ใใฃใจใใๆธใๆนใใใ ใใ
    setState({ ...state, accidental: e.target.value })
    output({ ...state, accidental: e.target.value })
  }

  return (
    <Stack direction={'row'}>
      <FormControl sx={{ width: '4rem' }}>
        <InputLabel>note</InputLabel>
        <Select size={'small'} label={'note'} onChange={handleChangeNote} onClose={() => setOpen({ ...open, accidental: true })}>
          {notes.map((note) => (
            <MenuItem key={note.label} value={note.value}>
              {note.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: '4rem' }}>
        <InputLabel>๐ฌ/โฏ</InputLabel>
        <Select
          size={'small'}
          label={'๐ฌ/โฏ'}
          open={open.accidental}
          onOpen={() => setOpen({ ...open, accidental: true })}
          // renderValue={(item) => <>{item == '' ? '' : item}</>}
          onChange={handleChangeAccidental}
          onClose={() => setOpen({ ...open, accidental: false })}
        >
          {accidentals.map((accidental) => (
            <MenuItem key={accidental.label} value={accidental.value}>
              {accidental.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  )
}

export default DegreeSelector
