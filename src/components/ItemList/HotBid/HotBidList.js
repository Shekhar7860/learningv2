import React from "react";
import "./HotBidList.css";
import { Carousel } from "antd";
import CollectibleCard from "../../Cards/CollectibleCard";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

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

const items = [
  {
    url: "https://static.toiimg.com/photo/76420840.cms",
    multiple: false,
    image: true,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/fourth.mp4?alt=media&token=57c7c033-5d32-4a6d-ae2b-aefb630aea2e",
    multiple: false,
    image: false,
  },
  {
    url: "https://www.smartertravel.com/wp-content/uploads/2019/02/woman-traveling-norway-sightseeing.jpg",
    multiple: true,
    image: true,
  },
  {
    url: "https://res.cloudinary.com/grohealth/image/upload/q_30/v1581674833/DCUK/Content/Plane-3.jpg",
    multiple: true,
    image: true,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/nine.mp4?alt=media&token=b5761092-da9a-4fa6-83c7-e7149e108bf3",
    multiple: false,
    image: false,
  },
  {
    url: "https://thumbs-prod.si-cdn.com/B5OaOzzqS9RKPTgEUwAFYOc-Pc4=/fit-in/1600x0/https://public-media.si-cdn.com/filer/8f/fb/8ffb5e01-ef25-4a77-9cc9-3b0a37379ca3/sydney_opera_house.jpg",
    multiple: true,
    image: true,
  },
  {
    url: "https://prod-virtuoso.dotcmscloud.com/dA/e17624af-d351-448c-bd26-56081432fc58/partner2Image/NorwegianCruiseLine.jpg",
    multiple: true,
    image: true,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/second.mp4?alt=media&token=cb07a5f9-a433-4055-bf81-3bc0d28255ce",
    multiple: true,
    image: false,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/seventh.mp4?alt=media&token=839f3214-0a9e-4d84-bbcd-967b0635d9cc",
    multiple: true,
    image: false,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/eight.mp4?alt=media&token=23b2334d-93ab-4de5-b1c0-c6089e4cff8b",
    multiple: false,
    image: false,
  },
  {
    url: "https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://cf-images.us-east-1.prod.boltdns.net/v1/static/3281700261001/34221862-1c45-4f5a-9a6a-76576125b2f4/623ccbeb-a2cd-447e-ae4d-7158f70c8324/1280x720/match/image.jpg&w=1280&h=720&q=90&c=cc",
    multiple: false,
    image: true,
  },
  {
    url: "https://www.india-briefing.com/news/wp-content/uploads/2020/08/What-are-India%E2%80%99s-Latest-Rules-on-International-Air-Travel-.jpg",
    multiple: false,
    image: true,
  },
  {
    url: "https://www.thenewsminute.com/sites/default/files/styles/slideshow_image_size/public/Flight-service_1200-Picxy.com-teachingdoc.jpg?itok=ExNAvxyw",
    multiple: false,
    image: true,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/third.mp4?alt=media&token=94097315-214f-4dc5-bc65-d333ae9f35e6",
    multiple: false,
    image: false,
  },
  {
    url: "https://theblondeabroad.com/wp-content/uploads/2020/08/Favorite-Hats-Homepage-Icon.jpg",
    multiple: true,
    image: true,
  },
  {
    url: "https://images.news18.com/ibnlive/uploads/2021/02/1613989650_mumbai-7.jpg?impolicy=website&width=534&height=356",
    multiple: true,
    image: true,
  },
];

const HotBidList = () => {
  return (
    <div className="hotbid-list">
      <h1>
        Hot bids{" "}
        {/* <span>
          <img src={FireIcon} alt="fire icon" />
        </span> */}
      </h1>

      <div className="hotbid-item-list">
        <Carousel {...settings}>
          {items.map((item, index) => (
            <CollectibleCard card={item} key={item.url + index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HotBidList;
