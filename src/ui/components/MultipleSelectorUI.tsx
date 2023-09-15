import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface MultipleSelectCheckmarksProps {
  tag: string;
  names: string[];
  checkedNames: string[];
  onCheckChange: (checkedNames: string[]) => void;
}

export default function MultipleSelectCheckmarks({ tag, names, onCheckChange, checkedNames }: MultipleSelectCheckmarksProps) {
  const [name, setName] = React.useState<string[]>(checkedNames);

  const handleChange = (event: SelectChangeEvent<typeof name>) => {
    const {
      target: { value },
    } = event;
    setName(
      typeof value === 'string' ? value.split(',') : value,
    );
    onCheckChange(event.target.value as string[])
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{tag}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={name}
          onChange={handleChange}
          input={<OutlinedInput label={tag} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((itemName) => (
            <MenuItem key={itemName} value={itemName}>
              <Checkbox checked={name.indexOf(itemName) > -1} />
              <ListItemText primary={itemName} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}