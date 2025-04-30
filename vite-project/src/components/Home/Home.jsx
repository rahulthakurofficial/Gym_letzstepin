import { useState, useRef } from "react";
import { useCart } from "../CartContext";
import "./Home.scss";
import logo from "../../assets/gymlogo.jpg";
import whatdo from "../../assets/whatdo.png";
import Airfilteration from "../../assets/Airfilteration.png";
import cardio from "../../assets/cardio.png";
import Disinfected from "../../assets/Disinfected.png";
import Fire from "../../assets/Fire.png";
import lifting from "../../assets/lifting.png";
import PersonalTrainer from "../../assets/PersonalTrainer.png";
import Swimming from "../../assets/Swimming.png";
import Trainer from "../../assets/Trainer.png";
import wifi from "../../assets/wifi.png";
// import workout from "../../assets/workout.jpg";
import yoga from "../../assets/yoga.png";
import crossfit from "../../assets/crossfit.png";
import Weightlifting from "../../assets/Weightlifting.png";
import ThreadCrossfit from "../../assets/ThreadCrossfit.png";
import Steam from "../../assets/Steam.png";
import shower from "../../assets/shower.png";
import Parking from "../../assets/Parking.png";
import Sanitizers from "../../assets/Sanitizers.png";
import Touchfree from "../../assets/Touchfree.png";
import deepCleaning from "../../assets/deepCleaning.png";
import Emergency from "../../assets/Emergency.png";
import buy from "../../assets/buy.png";
import cart from "../../assets/cart.png";
import location from "../../assets/location.png";
import bookplans from "../../assets/bookplans.png";
import amenities from "../../assets/amenities.png";
import safetyHygiene from "../../assets/safetyHygiene.png";
import cctv from "../../assets/cctv.png";
import timeIcon from "../../assets/time.png";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const { addToCart } = useCart();
  const [users, setUsers] = useState([
    { name: "", email: "", phone: "", address: "" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [names, setNames] = useState([""]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (index, value) => {
    const updatedNames = [...names];
    updatedNames[index] = value;
    setNames(updatedNames);
  };

  const handleAddName = () => {
    setNames([...names, ""]);
  };

  const handleRemoveName = (index) => {
    const updatedNames = names.filter((_, i) => i !== index);
    setNames(updatedNames);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = names.map((name) => ({
      name,
      email,
      phone,
      address,
    }));

    console.log("User Data Submitted:", userData);

    setNames([""]);
    setEmail("");
    setPhone("");
    setAddress("");
    setShowForm(false);
  };

  const gyms = [
    { name: "Gym 1", address: "Pune", distance: "1.2 km" },
    { name: "Gym 2", address: "Pune", distance: "2.0 km" },
    { name: "Gym 3", address: "Pune", distance: "3.5 km" },
    { name: "Gym 4", address: "Pune", distance: "4.0 km" },
    { name: "Gym 5", address: "Pune", distance: "5.0 km" },
    { name: "Gym 6", address: "Pune", distance: "6.2 km" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const scrollToSection = (index) => {
    const container = containerRef.current;
    const totalScrollWidth = container.scrollWidth;
    const visibleWidth = container.clientWidth;

    const maxScrollLeft = totalScrollWidth - visibleWidth;
    const scrollLeft = (maxScrollLeft / 2) * index;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const faqs = [
    {
      question: "What are your gym operating hours?",
      answer:
        "We are open from 5:00 AM to 11:00 PM every day, including weekends.",
    },
    {
      question: "Do you offer personal training sessions?",
      answer:
        "Yes, we have certified personal trainers available for one-on-one sessions.",
    },
    {
      question: "Are there any trial memberships?",
      answer: "Absolutely! We offer a 3-day free trial for all new members.",
    },
    {
      question: "Is there a parking facility available?",
      answer: "Yes, we offer free parking for all our members.",
    },
    {
      question: "What amenities are available at the gym?",
      answer:
        "We provide lockers, showers, sauna, protein bar, cardio and strength zones, and more.",
    },
    {
      question: "Do you provide diet or nutrition guidance?",
      answer:
        "Yes, our fitness experts offer personalized diet and nutrition plans to support your fitness goals.",
    },
  ];

  const leftFAQs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFAQs = faqs.slice(Math.ceil(faqs.length / 2));

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert("Submitted!");
  };

  const handleUserInfoSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting user data:", users);

    addToCart({
      users: users,
      plan: "Premium Plan",
    });

    alert("User info submitted successfully!");
    setShowForm(false);
  };

  return (
    <>
      <div className="container">
        <div className="left-section">
          <iframe
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!4v1726715106455!6m8!1m7!1sCAoSK0FGMVFpcFBlRlFfcG9fcnJvVDZfZjJXM2FEY0pYa1JyMDBMY21jTzFNTzA.!2m2!1d11.6217778!2d78.11513889999999!3f75.62686526110555!4f-5.441201564066674!5f0.4000000000000002"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Gym Location"
          ></iframe>
        </div>

        <div className="right-section">
          <h1 className="logo-title">
            <img src={logo} alt="Gym Logo" className="logo-icon" />
            MK Fitness Club – Pune
          </h1>

          <p className="address">
            <img src={location} alt="Location" className="location-icon" />
            In Zip Hotel, Opp. Alard College, Marunji-Hinjawadi Road, Marunji,
            Pune
          </p>

          <h2> About Us</h2>
          <p>
            At MK Fitness Club, we’re dedicated to helping you reach your health
            and fitness goals. Our state-of-the-art facility, expert trainers,
            and supportive environment make it easy to stay motivated and
            consistent.
          </p>
        </div>
      </div>

      <div className="second-container">
        <div className="second-left-section">
          <div className="workout-section">
            <h1 className="workout-logo-title">
              <img
                src={whatdo}
                alt="workout Gym Logo"
                className="workout-logo-icon"
              />
              What do we have ?
            </h1>
            <ul className="workout-row">
              <li>
                <img src={cardio} alt="Cardio" className="icon-img" />
                <span className="label">Cardio</span>
              </li>
              <li>
                <img src={lifting} alt="Lifting" className="icon-img" />
                <span className="label">Lifting</span>
              </li>
              <li>
                <img src={crossfit} alt="CrossFit" className="icon-img" />
                <span className="label">CrossFit</span>
              </li>
              <li>
                <img src={Trainer} alt="Trainer" className="icon-img" />
                <span className="label">Trainer</span>
              </li>
              <li>
                <img src={yoga} alt="Yoga" className="icon-img" />
                <span className="label">Yoga</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fourth-container">
        <div className="fourth-left-section">
          <div className="book-plans-section">
            <h1 className="bookplan-logo-title">
              <div className="logo-text-container">
                <img
                  src={bookplans}
                  alt="bookplans Gym Logo"
                  className="bookplans-logo-icon"
                />
                <span className="bookplans-logo-text">Book Plan</span>
              </div>
            </h1>

            <div className="plans-grid">
              <div className="plan-card basic">
                <div className="plan-row">
                  <h3>1 Day Plan</h3>
                  <p className="price">₹2,900/month</p>
                  <div className="icon-label" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faShoppingBag} className="icon" />
                    <span className="label">Buy Now</span>
                  </div>
                  <div
                    className="icon-label"
                    onClick={() =>
                      addToCart({ name: "1 Day Plan", price: 2900 })
                    }
                  >
                    <FontAwesomeIcon icon={faCartPlus} className="icon" />
                    <span className="label">Add to Cart</span>
                  </div>
                </div>
              </div>

              <div className="plan-card standard">
                <div className="plan-row">
                  <h3>1 Month Plan</h3>
                  <p className="price">₹4,900/month</p>
                  <div className="icon-label" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faShoppingBag} className="icon" />
                    <span className="label">Buy Now</span>
                  </div>
                  <div
                    className="icon-label"
                    onClick={() =>
                      addToCart({ name: "1 Month Plan", price: 4900 })
                    }
                  >
                    <FontAwesomeIcon icon={faCartPlus} className="icon" />
                    <span className="label">Add to Cart</span>
                  </div>
                </div>
              </div>

              <div className="plan-card premium">
                <div className="plan-row">
                  <h3>6 Months Plan</h3>
                  <p className="price">₹6,900/month</p>
                  <div className="icon-label" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faShoppingBag} className="icon" />
                    <span className="label">Buy Now</span>
                  </div>
                  <div
                    className="icon-label"
                    onClick={() =>
                      addToCart({ name: "6 Months Plan", price: 6900 })
                    }
                  >
                    <FontAwesomeIcon icon={faCartPlus} className="icon" />
                    <span className="label">Add to Cart</span>
                  </div>
                </div>
              </div>

              <div className="plan-card premium">
                <div className="plan-row">
                  <h3>1 Year Plan</h3>
                  <p className="price">₹6,900/month</p>
                  <div className="icon-label" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faShoppingBag} className="icon" />
                    <span className="label">Buy Now</span>
                  </div>
                  <div
                    className="icon-label"
                    onClick={() =>
                      addToCart({ name: "1 Year Plan", price: 6900 })
                    }
                  >
                    <FontAwesomeIcon icon={faCartPlus} className="icon" />
                    <span className="label">Add to Cart</span>
                  </div>
                </div>
              </div>
            </div>

            {showForm && (
              <div className="form-popup">
                <h2>Buy Plan - User Information</h2>
                <form onSubmit={handleSubmit}>
                  {names.map((name, index) => (
                    <div key={index} className="name-group">
                      <label>Name {index + 1}</label>
                      <input
                        type="text"
                        value={name}
                        placeholder="Enter Name"
                        onChange={(e) =>
                          handleNameChange(index, e.target.value)
                        }
                        required
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() => handleRemoveName(index)}
                        >
                          Remove
                        </button>
                      )}
                      {index === names.length - 1 && (
                        <button
                          type="button"
                          className="add-btn"
                          onClick={handleAddName}
                        >
                          + Add More Name
                        </button>
                      )}
                    </div>
                  ))}
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />

                  <button type="submit">Submit</button>
                </form>
              </div>
            )}
          </div>
        </div>

        <div className="fourth-right-section">
          <div className="timeTable-section">
            <div className="timetable-heading">
              <img src={timeIcon} alt="Time Icon" className="heading-icon" />
              <h1>Gym Time Table</h1>
            </div>

            <table className="gym-timetable">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Morning (6 AM - 9 AM)</th>

                  <th>Evening (5 PM - 9 PM)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Day">Monday</td>
                  <td data-label="Morning (6 - 9 AM)">Cardio</td>
                  <td data-label="Evening (5 - 9 PM)">Zumba</td>
                </tr>
                <tr>
                  <td data-label="Day">Tuesday</td>
                  <td data-label="Morning (6 - 9 AM)">Yoga</td>
                  <td data-label="Evening (5 - 9 PM)">HIIT</td>
                </tr>
                <tr>
                  <td data-label="Day">Wednesday</td>
                  <td data-label="Morning (6 - 9 AM)">Strength Training</td>
                  <td data-label="Evening (5 - 9 PM)">Boxing</td>
                </tr>
                <tr>
                  <td data-label="Day">Thursday</td>
                  <td data-label="Morning (6 - 9 AM)">Functional Training</td>
                  <td data-label="Evening (5 - 9 PM)">Dance Fitness</td>
                </tr>
                <tr>
                  <td data-label="Day">Friday</td>
                  <td data-label="Morning (6 - 9 AM)">Yoga</td>
                  <td data-label="Evening (5 - 9 PM)">Strength Training</td>
                </tr>
                <tr>
                  <td data-label="Day">Saturday</td>
                  <td data-label="Morning (6 - 9 AM)">Bootcamp</td>
                  <td data-label="Evening (5 - 9 PM)">Spinning</td>
                </tr>
                <tr>
                  <td data-label="Day">Sunday</td>
                  <td data-label="Morning (6 - 9 AM)">Stretching</td>
                  <td data-label="Evening (5 - 9 PM)">Open Gym</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="third-container">
        <div className="third-left-section">
          <div className="amenities-section">
            <div className="amenities-logo-text-container">
              <img
                src={amenities}
                alt="amenities Gym Logo"
                className="amenities-logo-icon"
              />
              <span className="amenities-logo-text">Amenities</span>
            </div>
            <ul className="amenities-list">
              <li>
                <img src={cardio} alt="Cardio Zone" className="facility-icon" />
                <span className="facility-label">Cardio Zone</span>
              </li>
              <li>
                <img
                  src={Weightlifting}
                  alt="Weight Lifting"
                  className="facility-icon"
                />
                <span className="facility-label">Weight Lifting</span>
              </li>
              <li>
                <img
                  src={ThreadCrossfit}
                  alt="CrossFit Area"
                  className="facility-icon"
                />
                <span className="facility-label">CrossFit Area</span>
              </li>
              <li>
                <img
                  src={PersonalTrainer}
                  alt="Personal Training"
                  className="facility-icon"
                />
                <span className="facility-label">Personal Training</span>
              </li>
              <li>
                <img
                  src={Steam}
                  alt="Steam & Sauna"
                  className="facility-icon"
                />
                <span className="facility-label">Steam & Sauna</span>
              </li>
              <li>
                <img
                  src={shower}
                  alt="Shower Facility"
                  className="facility-icon"
                />
                <span className="facility-label">Shower Facility</span>
              </li>
              <li>
                <img src={wifi} alt="Free Wi-Fi" className="facility-icon" />
                <span className="facility-label">Free Wi-Fi</span>
              </li>
              <li>
                <img
                  src={Swimming}
                  alt="Swimming Pool"
                  className="facility-icon"
                />
                <span className="facility-label">Swimming Pool</span>
              </li>
              {/* <li>
                <img
                  src={Parking}
                  alt="Swimming Pool"
                  className="facility-icon"
                />
                <span className="facility-label">Swimming Pool</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="third-right-section">
          <div className="safety-amenities">
            <div className="safetylogo-text-container">
              <img
                src={safetyHygiene}
                alt="safety Gym Logo"
                className="safety-logo-icon"
              />
              <span className="safety-logo-text">Safety & Hygiene</span>
            </div>
            <ul className="safety-amenities-list">
              <li>
                <img
                  src={deepCleaning}
                  alt="Daily Deep Cleaning"
                  className="safety-icon"
                />
                <span className="safety-label"> Deep Cleaning</span>
              </li>
              <li>
                <img
                  src={Disinfected}
                  alt="Air Filtration"
                  className="safety-icon"
                />
                <span className="safety-label">Air Filtration</span>
              </li>
              <li>
                <img
                  src={PersonalTrainer}
                  alt="Trained Staff"
                  className="safety-icon"
                />
                <span className="safety-label">Trained Staff</span>
              </li>
              <li>
                <img
                  src={Airfilteration}
                  alt="Air Purifiers"
                  className="safety-icon"
                />
                <span className="safety-label">Air Purifiers</span>
              </li>
              <li>
                <img
                  src={Touchfree}
                  alt="Touch-Free Entry"
                  className="safety-icon"
                />
                <span className="safety-label">Touch-Free Entry</span>
              </li>
              <li>
                <img src={Fire} alt="Fire Safety" className="safety-icon" />
                <span className="safety-label">Fire Safety</span>
              </li>
              <li>
                <img
                  src={Sanitizers}
                  alt="Disinfected Equipment"
                  className="safety-icon"
                />
                <span className="safety-label">Disinfected Equipment</span>
              </li>
              <li>
                <img
                  src={cctv}
                  alt="CCTV Surveillance"
                  className="safety-icon"
                />
                <span className="safety-label">CCTV Surveillance</span>
              </li>
              {/* <li>
                <img
                  src={Emergency}
                  alt="Emergency Exit"
                  className="safety-icon"
                />
                <span className="safety-label">Emergency Exit</span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="fourth-container">
        <div className="fourth-left-section">
          <div className="video-section">
            <h2> Our Location</h2>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15123.458675162818!2d73.7375571!3d18.6251558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbbba5e6d743%3A0xd24dd4b24e15973c!2sEmpire%20fitness%20club!5e0!3m2!1sen!2sin!4v1726715824116!5m2!1sen!2sin"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="fourth-right-section">
          <div className="video-section">
            <h2> 360° Motion Video Virtual Tour 5.7K Quality</h2>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/GtdFkGqIXgc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-columns">
          <div className="faq-column">
            {leftFAQs.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{item.question}</span>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-column">
            {rightFAQs.map((item, index) => (
              <div
                key={index + leftFAQs.length}
                className={`faq-item ${
                  openIndex === index + leftFAQs.length ? "open" : ""
                }`}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index + leftFAQs.length)}
                >
                  <span>{item.question}</span>
                  {openIndex === index + leftFAQs.length ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </div>
                {openIndex === index + leftFAQs.length && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gym-container">
        <h2>Explore More Gyms Near Me</h2>
        <div className="gym-list" ref={containerRef}>
          {gyms.map((gym, index) => (
            <div key={index} className="gym-card">
              <h3>{gym.name}</h3>
              <p>{gym.address}</p>
              <span>{gym.distance} away</span>

              {/* NEW Content */}
              <div className="gym-rating">⭐ 4.{index + 2} · (20+ reviews)</div>

              <div className="gym-pricing">₹{999 + index * 100}/month</div>

              <div className="gym-facilities">
                <span>🏋️‍♂️</span>
                <span>🚿</span>
                <span>📶</span>
                <span>🅿️</span>
              </div>

              <button className="join-btn">View Details</button>
            </div>
          ))}
        </div>

        {/* 3 Dots */}
        <div className="dot-navigation">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => scrollToSection(index)}
            />
          ))}
        </div>
      </div>

      <div className="feedback-form-container">
        <h2>We value your feedback</h2>
        <form onSubmit={handleFeedbackSubmit} className="feedback-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Rate Us</option>
            <option value="5">Excellent - 5 ⭐</option>
            <option value="4">Very Good - 4 ⭐</option>
            <option value="3">Good - 3 ⭐</option>
            <option value="2">Average - 2 ⭐</option>
            <option value="1">Poor - 1 ⭐</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Feedback"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </>
  );
};

export default Home;
