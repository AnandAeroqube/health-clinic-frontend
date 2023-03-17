import React from "react";
import { connect } from "react-redux";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Button } from "@mui/material";
import DoctorCard from "../../components/DoctorCard";

const doctor = {
  photo: 'placeholder.jpg',
  name: "Dr. Jena Doe",
  type: "Dentist",
  experience: "12",
  location: "Park Street, Canada",
  clinics: ['John Dental Clinic', 'Jena Dental Clinic'],
  fee: '150',
  availableToday: true
};

export const Home = (props) => {
  const [searchText, setSearchText] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");

  return (
    <>
      <section className="home-section">
        <div className="home-section-1">
          <div className="headline">
            <p>Sleep Better.</p>
            <p>Breathe Better.</p>
            <p>Live Better.</p>
          </div>
          <div className="image">
            <img src="placeholder.jpg" alt="placeholder" />
          </div>
        </div>
        <div class="home-section-2">
          <p>We care, over 3000+ Doctors available</p>
          <div className="searchbar">
            <SearchIcon className="icon searchIcon" />
            <input
              id="searchtext"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Doctors, Clinics, Hospitals, etc."
            ></input>
            <span id="vl"></span>
            <LocationOnOutlinedIcon className="icon zipIcon" />
            <input
              id="zip"
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Zip Code"
            ></input>
            <Button id="search" variant="contained" disableElevation>
              Search
            </Button>
          </div>
        </div>
      </section>
      <section className="home-section">
        <h2>Suggested Doctors</h2>
        <div className="suggested-doctors">
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        </div>
      </section>
      <section className="home-section">
        <h2>Suggested Clinics</h2>
        <div className="suggested-doctors">
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        <DoctorCard doctor={doctor} style={{margin: '10px'}} />
        </div>
      </section>
      <section className="home-section home-section-1" style={{height: "auto"}}>
      <div id="home-jumbotron">
          <div className="headline">
            <p>Consult top doctors online for any health concern</p>
          </div>
          <div className="image">
            <img src="placeholder.jpg" alt="placeholder" />
          </div>
      </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
