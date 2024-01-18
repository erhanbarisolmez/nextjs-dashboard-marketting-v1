'use client'
import { Autocomplete, FormControl, FormHelperText, FormLabel } from '@mui/joy';
import { useState } from 'react';
import { TypographyCustom } from './TypographyCustom';

export const AutoCompleteTags = () => {
  const tags = ["React", "JavaScript", "Node.js", "Express"];

  const [selectedOptions, setSelectedOptions] = useState([]);

  
  const handleInputChange = (event, newValues) => {
    // Yeni değerleri bir Set'e dönüştürerek tekrarları kaldır
    const uniqueOptions = new Set(newValues);
    setSelectedOptions([...uniqueOptions]); // Dizi olarak güncelle

    // Aynı veriyi iki kez eklemesini engelle
    if (selectedOptions.includes(newValues)) {
      setSelectedOptions((prevOptions) => prevOptions.filter((option) => option !== newValues));
    }

    // Üst çizgiyle işaretle
    selectedOptions.forEach((option) => {
      if (option === newValues) {
          option.disabled = true;
      }
    });

  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === 'Tab') {
      if (event.target.value.trim() !== '') {
        setSelectedOptions((prevOptions) => [
          ...prevOptions,
          event.target.value.trim(),
        ]);
        event.target.value = '';
      } else if (selectedOptions.length > 0) {
        // Boş değerle güncelleme yerine sonuncuyu çıkar
        setSelectedOptions((prevOptions) => prevOptions.slice(0, -1));
      }
    }
  };

  return (
    <FormControl size="sm">
      <FormLabel>
        <TypographyCustom
          variant="subtitle2"
          text="Tags"
          fontWeight="600"
        />
      </FormLabel>

      <Autocomplete
        multiple
        placeholder="Select an option"
        options={tags}
        value={selectedOptions}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input
              type="text"
              {...params.inputProps}
              placeholder="Type and press Enter"
            />
          </div>
        )}
      />
      <FormHelperText style={{ opacity: 0.6 }}>
        Add product to a category.
      </FormHelperText>
    </FormControl>
  );
};
