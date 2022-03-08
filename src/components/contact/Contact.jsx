import "./contact.css";
import { useContext } from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let submitBtn;
  if (darkMode) {
    submitBtn = <button className="btn-dark">Submit</button>;
  } else {
    submitBtn = <button className="btn">Submit</button>;
  }
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2thhlld",
        "template_my04yly",
        formRef.current,
        "Hh8sqmW1YyF4_ksZZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  let styles;
  if (darkMode) {
    styles = {
      borderRadius: "6px",
      backgroundColor: "#333",
      color: "wheat",
      border: "transparent",
    };
  }

  return (
    <div className="c">
      <h1 className="c-title">Get In Touch</h1>
      <div className="c-wrapper">
        <div className="c-left">
          <div className="c-map">
            {/* Google map */}
            <div
              id="map-container-google-11"
              className="map-container"
              style={{ height: 420 }}
            >
              <iframe
                title="home location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116778.44079317349!2d78.00078456664333!3d30.308137724656344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1646749061892!5m2!1sen!2sin" 
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="c-right">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={styles}
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              style={styles}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={styles}
              type="text"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              rows="5"
              style={styles}
              placeholder="Message..."
              name="message"
              required
            />
            {submitBtn}
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
