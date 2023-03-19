import React, {useState} from 'react'
import PropTypes from 'prop-types'

import DoctorCardBig from '../../components/DoctorCardBig'
import './index.css'
import {Tabs, Tab, Box, Typography} from '@mui/material'
import DoctorClinicCard from '../../components/DoctorClinicCard'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import ReviewCard from '../../components/ReviewCard.jsx'

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
              <DoctorClinicCard /> <hr></hr>
              <DoctorClinicCard /> <hr></hr>
              <DoctorClinicCard /> <hr></hr>
              <DoctorClinicCard /> 
            </div>
          </div>
        </TabPanel>
        <TabPanel className="dp-tabarea" value={tab} index={1}>
          <div className="dp-addinfo">
            <div className="dp-addinfo__headline">Patient Reviews for Dr. John Doe</div>
            <div className="dp-addinfo__sub">These are patient’s opinions and do not necessarily reflect the doctor’s medical capabilities.</div>
            <br></br>
            <div>53 results</div>
            <div className="dp-addinfo__body">
              <hr></hr>
              <ReviewCard />
              <hr></hr>
              <ReviewCard />
              <hr></hr>
              <ReviewCard />
              <hr></hr>
              <ReviewCard />
            </div>
          </div>
        </TabPanel>
        <TabPanel className="dp-tabarea" value={tab} index={2}>
          <div className="dp-addinfo">
            <div className="dp-addinfo__headline">Additional Info for Dr. John Doe</div>
            <div className="dp-addinfo__sub">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
            <hr></hr>
            <div className="dp-addinfo__body">
              <div className="dp-addinfo__h"><SchoolOutlinedIcon /> Educational Qualifications</div>
              <div className="dp-addinfo__c">
                Lorem Ipsum has been the industry's standard dummy text.<br></br>
                Lorem Ipsum has been the industry's standard dummy text.<br></br>
                Lorem Ipsum has been the industry's standard dummy text.<br></br>
                Lorem Ipsum has been the industry's standard dummy text.
              </div>
            </div>
            <hr></hr>
            <div className="dp-addinfo__body">
              <div className="dp-addinfo__h"><EmojiEventsOutlinedIcon /> Other Achievements</div>
              <div className="dp-addinfo__c">
                Lorem Ipsum has been the industry's standard dummy text.<br></br>
                Lorem Ipsum has been the industry's standard dummy text.<br></br>
                Lorem Ipsum has been the industry's standard dummy text.<br></br>
                Lorem Ipsum has been the industry's standard dummy text.
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="dp-tabarea" value={tab} index={3}>
        <div className="dp-addinfo">
            <div className="dp-addinfo__headline">Videos from Dr. John Doe</div>
            <div className="dp-addinfo__sub">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>

            <hr></hr>
        </div>
        </TabPanel>
        </div>
      </div>

      <div className="dp-faqs">
        <div className="dp-faq-headline">Frequently Asked Questions</div>
          <div className="dp-faq-body">
          <div className="dp-faq">
            <div className="dp-faqq">Q: Where does Dr. John Doe practice?</div>
            <div className="dp-faqa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, unde labore est similique eaque, incidunt dicta quasi veritatis beatae harum amet ipsum neque dignissimos earum repudiandae? Odio sit voluptatibus dolore.</div>
          </div>
          <hr></hr>
          <div className="dp-faq">
            <div className="dp-faqq">Q: Where does Dr. John Doe practice?</div>
            <div className="dp-faqa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, unde labore est similique eaque, incidunt dicta quasi veritatis beatae harum amet ipsum neque dignissimos earum repudiandae? Odio sit voluptatibus dolore.</div>
          </div>
          <hr></hr>
          <div className="dp-faq">
            <div className="dp-faqq">Q: Where does Dr. John Doe practice?</div>
            <div className="dp-faqa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, unde labore est similique eaque, incidunt dicta quasi veritatis beatae harum amet ipsum neque dignissimos earum repudiandae? Odio sit voluptatibus dolore.</div>
          </div>
          <hr></hr>
          <div className="dp-faq">
            <div className="dp-faqq">Q: Where does Dr. John Doe practice?</div>
            <div className="dp-faqa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, unde labore est similique eaque, incidunt dicta quasi veritatis beatae harum amet ipsum neque dignissimos earum repudiandae? Odio sit voluptatibus dolore.</div>
          </div>
          <hr></hr>
          <div className="dp-faq">
            <div className="dp-faqq">Q: Where does Dr. John Doe practice?</div>
            <div className="dp-faqa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, unde labore est similique eaque, incidunt dicta quasi veritatis beatae harum amet ipsum neque dignissimos earum repudiandae? Odio sit voluptatibus dolore.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile