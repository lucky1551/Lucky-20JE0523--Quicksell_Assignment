import React from "react";
import { useSelector } from "react-redux";
import { BsReception4, BsPlusLg } from "react-icons/bs"; //BsReception4
import "../styles/Dashboard.css";
import Card from "../components/Card";
import img1 from "../images/img1.jpeg"
import img2 from "../images/img2.png"
import img3 from "../images/img3.jpeg"
import img4 from "../images/img4.jpeg"


const randomImages = [
  img1,
  img2,
  img3,
  img4,
];

const Dashboard = () => {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);

  // Function to select a random image from the array
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };
  return (
    dataSelected && (
      <div className="container" id="section" style={{ justifyContent: "space-evenly" }}>
        {dataSelected.map((element, index) => {
          return (
            <>
              <div
                key={index}
                className="dashboard"

              >
                <div className="cardHeading1">
                  <div
                    className="sideView1"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {!user ? (
                      <BsReception4 />
                    ) : (
                      <>
                        <div className="image">
                        <img src={getRandomImage()} alt="Random User Image" />
                        </div>
                      </>
                    )}
                    <span>
                      {element[index]?.title} {element[index]?.value?.length}
                    </span>
                  </div>
                  <div className="sideView2">
                    <BsPlusLg />
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="selectList ">
                  {element[index]?.value?.map((element, ind) => {
                    return (
                      <Card
                        id={element.id}
                        title={element.title}
                        tags={element.tag}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

 export default Dashboard;
