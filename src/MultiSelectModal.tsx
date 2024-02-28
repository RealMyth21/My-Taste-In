import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

interface MultiSelectModalProps {
  open: boolean;
  onClose: (selectedOptions: string[]) => void;
}

const options: string[] = ['music', 'movies', 'tv shows', 'video games', 'books'];

export default function MultiSelectModal({ open, onClose }: MultiSelectModalProps): JSX.Element {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionToggle = (option: string) => () => {
    const currentIndex = selectedOptions.indexOf(option);
    const newSelectedOptions = [...selectedOptions];

    if (currentIndex === -1) {
      newSelectedOptions.push(option);
    } else {
      newSelectedOptions.splice(currentIndex, 1);
    }

    setSelectedOptions(newSelectedOptions);
  };

  const handleClose = () => {
    onClose(selectedOptions);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Select Options</DialogTitle>
      <DialogContent>
        <FormGroup>
          {options.map((option: string) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  checked={selectedOptions.indexOf(option) !== -1}
                  onChange={handleOptionToggle(option)}
                />
              }
              label={option}
            />
          ))}
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Done</Button>
      </DialogActions>
      <DialogContent>
        <div>Selected Options: {selectedOptions.join(', ')}</div>
      </DialogContent>
    </Dialog>
  );
}
