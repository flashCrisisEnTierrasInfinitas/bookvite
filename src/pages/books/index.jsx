import Conted from "./conted";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import { TabList, TabPanel } from '@mui/lab';
import { useState } from "react";

export default function Books() {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <h2 className="color-gray bottom-50">Libros</h2>
      <div className="margin-90">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Libros" value="1" />
                <Tab label="Actividades" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1"><Conted /></TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
          </TabContext>
        </Box>
      </div>

    </>
  );
}
