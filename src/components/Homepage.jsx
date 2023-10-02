import React, { useEffect, useState } from "react";
// import axios from 'axios'
import axios from "axios";
import logo from "../assets/Frame 249.png";
import logo2 from "../assets/logo2.png";
import camera from "../assets/camera.svg";
import screen from "../assets/mirroring-screen.png";
import audio from "../assets/microphone-2.svg";
import record from "../assets/record.png";
import arrowRight from "../assets/arrow-right.png";
import img1 from "../assets/AdobeStock_400053098 1.png";
import img2 from "../assets/AdobeStock_362497671 2.png";
import img3 from "../assets/woman-using-smartphone-technology 3.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import video from "../assets/Video Repository.png";
import rec1 from "../assets/rec1.png";
import no1 from "../assets/no1.png";
import no2 from "../assets/no2.png";
import no3 from "../assets/no3.png";
import { Link } from "react-router-dom";
const Homepage = () => {
  const [recording, setRecording] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchRecording() {
      try {
        const response = await axios.get(
          "https://extension-server-tg8x.onrender.com/uploads/uploaded-undefined-record.webm"
        );
        console.log(response.data.results);
        setRecording(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top movies:", error);
        setLoading(false);
      }
    }
    fetchRecording();
  }, []);

  return (
    <div className="container">
      <nav className="hidden md:flex justify-between items-center p-8">
        <img src={logo} alt="" />
        <div className="flex gap-4 font-bold">
          <h2>Features</h2>
          <h2>How it works</h2>
        </div>
        <Link to="/getstarted">
          <h2 className="text-bluee font-bold">Get Started</h2>
        </Link>
      </nav>
      <div className="block p-8 md:hidden">
        <h1 className="text-4xl font-bold">Show Them Don’t Just Tell</h1>
        <p className="text-bluee my-5">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <div className="flex flex-col gap-5 mt-5">
          <div className="border py-2 px-2 rounded-md flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src={camera} alt="" />
              <p className="mb-1">Show Camera</p>
            </div>
            <label className="switch">
              <input type="checkbox" id="toggleSwitch" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="border py-2 px-2 rounded-md flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src={screen} alt="" />
              <p className="mb-1">Record Screen</p>
            </div>
            <label className="switch">
              <input type="checkbox" id="toggleSwitch" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="border py-2 px-2 rounded-md flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src={audio} alt="" />
              <p className="mb-1">Record Audio</p>
            </div>
            <label className="switch">
              <input type="checkbox" id="toggleSwitch" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <p className="text-vsm my-3">
          Who would you like to send recording to?
        </p>
        <div className="border p-2 rounded-lg">
          <input type="text" placeholder="Johnmark@gmail.com" />
        </div>
        <div className="bg-bluee flex items-end gap-4 w-3/5 border rounded-lg p-2 mt-20 ms-32">
          <img src={record} alt="" />
          <p className="text-white">Start recording</p>
        </div>
      </div>
      {/* ============================================================================== */}
      <div className="hidden md:block">
        <div className="hidden md:flex justify-between items-center p-8">
          <div className="w-1/3 mr-5">
            <h1 className="text-5xl font-bold">
              Show Them <br /> Don’t Just Tell
            </h1>
            <p className="text-bluee mt-6">
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
            <div className="bg-bluee flex items-end gap-4 border rounded-lg w-3/5 p-4 mt-10">
              <p className="text-white">Install Helpmeout</p>
              <img src={arrowRight} alt="" />
            </div>
          </div>
          <div className="flex gap-4 w-1/2 mt-20 me-10">
            <div className="flex flex-col gap-14">
              <img className="rounded-md" src={img1} alt="" />
              <img className="rounded-md" src={img2} alt="" />
            </div>
            <img className="rounded-md" src={img3} alt="" />
          </div>
        </div>
        <div className="p-8">
          <div className="text-center mt-10">
            <h1 className="text-4xl font-bold">Features</h1>
            <p className="text-grayy pt-5">Key Highlights of Our Extension</p>
          </div>
          <div className="flex justify-between items-center my-14">
            <div className="flex flex-col gap-20">
              {" "}
              <div className="flex gap-3 items-center ">
                <img className="mb-10" src={icon1} alt="" />
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold text-purplee">
                    Simple Screen Recording
                  </h2>
                  <p className="text-grayy">
                    Effortless screen recording for everyone. Record with ease,
                    no tech expertise required.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center ">
                <img className="mb-10" src={icon2} alt="" />
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold text-purplee">
                    Easy-to-Share URL
                  </h2>
                  <p className="text-grayy">
                    Share your recordings instantly with a single link. No
                    attachments, no downloads.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center ">
                <img className="mb-10" src={icon3} alt="" />
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold text-purplee">
                    Revisit Recordings
                  </h2>
                  <p className="text-grayy">
                    Access and review your past content effortlessly. Your
                    recordings, always at your fingertips.
                  </p>
                </div>
              </div>
            </div>
            <img src={video} alt="" />
          </div>
        </div>

        <section className="p-2">
          <h1 className="text-4xl font-bold text-center">How it works</h1>
          <div className="flex justify-between items-center gap-10 mt-10">
            <div className="flex flex-col justify-between items-center gap-5">
              <img src={no1} alt="" />
              <h2 className="text-bluee text-2xl font-semibold">
                Record Screen
              </h2>
              <p className="text-grayy text-center">
                Click the "Start Recording" button in our extension. choose
                which part of your screen to capture and who you want to send it
                to.
              </p>
              <img src={rec1} alt="" />
            </div>
            <div className="flex flex-col justify-between items-center gap-5">
              <img src={no2} alt="" />
              <h2 className="text-bluee text-2xl font-semibold">
                Share Your Recording
              </h2>
              <p className="text-grayy text-center">
                We generate a shareable link for your video. Simply send it to
                your audience via email or copy the link to send via any
                platform.
              </p>
              <img src={rec1} alt="" />
            </div>
            <div className="flex flex-col justify-between items-center gap-5">
              <img src={no3} alt="" />
              <h2 className="text-bluee text-2xl font-semibold">
                Learn Effortlessly
              </h2>
              <p className="text-grayy text-center">
                Recipients can access your video effortlessly through the
                provided link, with our user-friendly interface suitable for
                everyone.
              </p>
              <img src={rec1} alt="" />
            </div>
          </div>
        </section>
        <footer className="bg-bluee flex justify-between items-center w-full p-10 mt-10 ">
          <img className="mb-24" src={logo2} alt="" />
          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-semibold">Menu</h2>
            <p>Home</p>
            <p>Converter</p>
            <p>How it works</p>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-semibold">About Us</h2>
            <p>About</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-semibold">Screen Record</h2>
            <p>Browser Window</p>
            <p>Desktop</p>
            <p>Application</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
