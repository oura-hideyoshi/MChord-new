import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material'
import { Scale } from '@tonaljs/tonal'
import { useState } from 'react'

type Props = {
  onChange?: (value: string) => void
}

const NoteSelector = ({ ...props }: Props) => {
  const [state, setState] = useState({ note: 'C', accidental: '' })
  const [open, setOpen] = useState({ note: false, accidental: false })
  const notes = Scale.get('C major').notes
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
            <MenuItem key={note} value={note}>
              {note}
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

export default NoteSelector
