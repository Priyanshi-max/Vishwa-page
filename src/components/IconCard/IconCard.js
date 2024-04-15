import React, { useEffect, useState } from "react";
import IconImg from "../../assets/IconImg.svg";
import "./IconCard.css";
import ModalForm from "../Modal/ModalForm";

const IconCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.0.108:8000/api/logos");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleModalClick = () => {
    setShowModal(true);
  };

  return (
    <div className="card">
      {data.map((each) => (
        <div className="icon-card-container" onClick={handleModalClick}>
          <div className="icon-card">
            <div
              className="icon-image"
              dangerouslySetInnerHTML={{
                __html: each.data,
              }}
            />
            <div className="icon-text-container">
              <p className="icon-text">{each.title}</p>
            </div>
          </div>
        </div>
      ))}

      <ModalForm showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default IconCard;
