import { useState } from 'react';
import MultiSelectModal from './MultiSelectModal';
import { Typography } from '@mui/material';

export default function AddMediaType(): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = (selectedOptions: string[]) => {
    setOpenModal(false);
    setSelectedOptions(selectedOptions);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <MultiSelectModal open={openModal} onClose={handleCloseModal} />
      {selectedOptions.map((item, index) => (
        <Typography key={index} variant="h6">
          {item}
        </Typography>
      ))}
    </div>
  );
}
