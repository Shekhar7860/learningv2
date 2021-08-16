import { Carousel } from "antd";
import React from "react";
import CollectionCard from "../../Cards/CollectionCard";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import FireIcon from "../../../assets/svg/fire.svg";
import CollectionFun from "../../../functions/CollectionFun";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      <CaretRightOutlined style={{ color: "white" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      <CaretLeftOutlined style={{ color: "white" }} />
    </div>
  );
}

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CollectionList = () => {
  const { items } = CollectionFun();

  return (
    <div>
      <div className="hotbid-list">
        <h1>
          Hot Collections{" "}
          {/* <span>
            <img src={FireIcon} alt="fire icon" />
          </span> */}
        </h1>
        {items.length > 0 ? (
          <div className="hotbid-item-list">
            <Carousel {...settings}>
              {items.map((item, index) => (
                <CollectionCard card={item} key={index + item.cover} />
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="no-record-found">No Record Found</div>
        )}
      </div>
    </div>
  );
};

export default CollectionList;
