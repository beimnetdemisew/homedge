import { Swiper, SwiperSlide } from "swiper/react";
import "./../App.css";
import photo2 from "./../images/r1.png";
import photo3 from "./../images/r2.png";
import photo4 from "./../images/r3.png";
import "swiper/css";
import { Slidesettings } from "./slidesettings";

export default function Bests() {
  return (
    <section>
      <div
        className="container"
        style={{ position: "relative" }}
        id="Residencies"
      >
        <h3 className="orange">Best Choices</h3>
        <h2
          className="primarytext"
          style={{ marginBottom: "40px", fontSize: "2rem" }}
        >
          Popular Residencies
        </h2>
        {/* <div style={{position:"absolute",top:"0px",right:"10px",backgroundColor:"yellow"}}>
                        <Sliderbuttons/> 

                    </div> */}
        <Swiper {...Slidesettings} className="swiperslide">
          <SwiperSlide>
            <div className="content" style={{ gap: "0.6rem" }}>
              <img src={photo2} alt="home" style={{ maxWidth: "15rem" }} />
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <span style={{ color: "orange" }}>$</span>
                <span style={{ color: "#777" }}>47,043</span>
              </div>
              <h4 className="primarytext">Aliva Priva Jardin</h4>
              <p className="secondarytext">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur,
                DKI Jakarta
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content" style={{ gap: "0.6rem" }}>
              <img src={photo3} alt="home" style={{ maxWidth: "15rem" }} />
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <span style={{ color: "orange" }}>$</span>
                <span style={{ color: "#777" }}>35,853</span>
              </div>
              <h3 className="primarytext">Asatti Garden City</h3>
              <p className="secondarytext">
                Pahlawan Street XVII No.215, Cinangka,Sawangan, Depok, Jawa
                Barat
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content" style={{ gap: "0.6rem" }}>
              <img src={photo4} alt="home" style={{ maxWidth: "15rem" }} />
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <span style={{ color: "orange" }}>$</span>
                <span style={{ color: "#777" }}>66,353</span>
              </div>
              <h3 className="primarytext">Citralan Puri Serang</h3>
              <p className="secondarytext">
                Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas,
                Serang, Banten
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content" style={{ gap: "0.6rem" }}>
              <img src={photo2} alt="home" style={{ maxWidth: "15rem" }} />
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <span style={{ color: "orange" }}>$</span>
                <span style={{ color: "#777" }}>47,043</span>
              </div>
              <h3 className="primarytext">Aliva Priva Jardin</h3>
              <p className="secondarytext">
                Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur,
                DKI Jakarta
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content" style={{ gap: "0.6rem" }}>
              <img src={photo3} alt="home" style={{ maxWidth: "15rem" }} />
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <span style={{ color: "orange" }}>$</span>
                <span style={{ color: "#777" }}>35,853</span>
              </div>
              <h3 className="primarytext">Asatti Garden City</h3>
              <p className="secondarytext">
                Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa
                Barat
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content" style={{ gap: "0.6rem" }}>
              <img src={photo4} alt="home" style={{ maxWidth: "15rem" }} />
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <span style={{ color: "orange" }}>$</span>
                <span style={{ color: "#777" }}>66,353</span>
              </div>
              <h3 className="primarytext">Citralan Puri Serang</h3>
              <p className="secondarytext">
                Ruko Puri Indah Residence Block A7,Lingkar Street, Ciracas,
                Serang, Banten
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
