import React, {useState} from 'react'
import PropTypes from 'prop-types'

import DoctorCardBig from '../../components/DoctorCardBig'
import './index.css'
import {Tabs, Tab, Box, Typography} from '@mui/material'
import DoctorClinicCard from '../../components/DoctorClinicCard'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className='dp-tabarea'
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function DoctorProfile() {
  const [tab, setTab] = useState(0);

  return (
    <div className='dp'>
      <div className="dp-dcb">
        <DoctorCardBig />
      </div>
      <div className="dp-tabs">
        <div className="dp-tabpanelarea">
        <Tabs className='dp-tabpanel' value={tab} onChange={(e, n) => setTab(n)}>
          <Tab className='dp-tab' label='Information' {...a11yProps(0)} />
          <Tab className='dp-tab' label='Reviews' {...a11yProps(1)} />
          <Tab className='dp-tab' label='Additional Info' {...a11yProps(2)} />
          <Tab className='dp-tab' label='Video' {...a11yProps(3)} />
        </Tabs>
        </div>
        <div>
        <TabPanel className="dp-tabarea" value={tab} index={0}>
          <div className="dp-info">
            <div className="dp-dcc">
              <DoctorClinicCard />
            </div>
          </div>
        </TabPanel>
        <TabPanel className="dp-tabarea" value={tab} index={1}>
          Item Two
        </TabPanel>
        <TabPanel className="dp-tabarea" value={tab} index={2}>
          Item Three
        </TabPanel>
        <TabPanel className="dp-tabarea" value={tab} index={3}>
          Item Four
        </TabPanel>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile