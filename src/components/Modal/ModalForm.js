import React, { useState } from "react";
import ReactModal from "react-modal";

import "./ModalForm.css";

const ModalForm = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    occasionDate: "",
    email: "",
    donatingForFamilyFriends: false,
    recipientName: "",
    recipientMobile: "",
    recipientEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData({
      ...formData,
      donatingForFamilyFriends: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://192.168.0.108:8000/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFormData({
          name: "",
          mobile: "",
          occasionDate: "",
          email: "",
          donatingForFamilyFriends: false,
          recipientName: "",
          recipientMobile: "",
          recipientEmail: "",
        });
      })

      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ReactModal
      className="form"
      isOpen={showModal}
      onRequestClose={setShowModal}
      preventScroll={false}
    >
      <div className="form-header">
        <h3>Before Proceeding To Celebrate !!</h3>
        <p>Fill the basic Information</p>
        <button className="close-button" onClick={handleCloseModal}>
          X
        </button>
      </div>

      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-half">
          <div className="form-column">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile No.:</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label htmlFor="occasionDate">Occasion Date:</label>
                <input
                  type="date"
                  id="occasionDate"
                  name="occasionDate"
                  value={formData.occasionDate}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                id="donatingForFamilyFriends"
                name="donatingForFamilyFriends"
                checked={formData.donatingForFamilyFriends}
                onChange={handleCheckboxChange}
                className="checkbox-field"
              />
              <label htmlFor="donatingForFamilyFriends">
                Donating for family/friends?
              </label>
            </div>
          </div>

          <div className="form-column">
            {formData.donatingForFamilyFriends && (
              <div className="recipient-info">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="recipientName">Recipient's Name:</label>
                    <input
                      type="text"
                      id="recipientName"
                      name="recipientName"
                      value={formData.recipientName}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipientMobile">
                      Recipient's Mobile No.:
                    </label>
                    <input
                      type="tel"
                      id="recipientMobile"
                      name="recipientMobile"
                      value={formData.recipientMobile}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="recipientEmail">Recipient's Email:</label>
                  <input
                    style={{ width: "40%" }}
                    type="email"
                    id="recipientEmail"
                    name="recipientEmail"
                    value={formData.recipientEmail}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <button type="submit" className="submit-button">
          Proceed
        </button>
      </form>
    </ReactModal>
  );
};

export default ModalForm;
