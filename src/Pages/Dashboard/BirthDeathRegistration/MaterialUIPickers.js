import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(new Date('2021-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
    console.log(value);
  return (
    <>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                  <DesktopDatePicker
                      label="জন্ম তারিখ সিলেক্ট করুন "
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                  />
                  
              </Stack>
          </LocalizationProvider>
          {/* <h1>{value}</h1> */}
    </>
  );
}
