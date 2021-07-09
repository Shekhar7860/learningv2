import React from "react";
import CollectibleCard from "../Cards/CollectibleCard";
import "./AllItemList.css";
import girl from '../../assets/girl.jpg'


const items = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/eight.mp4?alt=media&token=23b2334d-93ab-4de5-b1c0-c6089e4cff8b",
    multiple: false,
    image: false,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/fifth.mp4?alt=media&token=042f16e3-78b4-43a5-a643-8be7cbd0f38e",
    multiple: true,
    image: false
  },
  {
    url: "https://image.freepik.com/free-photo/young-beautiful-woman-standing-yacht-luxury-travel-boat-cruise-vacation_146377-4040.jpg",
    multiple: false,
    image: true

  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/first.mp4?alt=media&token=b5c52878-6837-467a-9571-727f6053de52",
    multiple: true,
    image: false

  },
  {
    url: "https://static.toiimg.com/photo/76420840.cms",
    multiple: false,
    image: true

  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/fourth.mp4?alt=media&token=57c7c033-5d32-4a6d-ae2b-aefb630aea2e",
    multiple: false,
    image: false

  },
  {
    url: "https://www.smartertravel.com/wp-content/uploads/2019/02/woman-traveling-norway-sightseeing.jpg",
    multiple: true,
    image: true

  },
  {
    url: girl,
    multiple: true,
    image: true

  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/nine.mp4?alt=media&token=b5761092-da9a-4fa6-83c7-e7149e108bf3",
    multiple: false,
    image: false

  },
  {
    url: "https://thumbs-prod.si-cdn.com/B5OaOzzqS9RKPTgEUwAFYOc-Pc4=/fit-in/1600x0/https://public-media.si-cdn.com/filer/8f/fb/8ffb5e01-ef25-4a77-9cc9-3b0a37379ca3/sydney_opera_house.jpg",
    multiple: true,
    image: true

  },
  {
    url: "https://prod-virtuoso.dotcmscloud.com/dA/e17624af-d351-448c-bd26-56081432fc58/partner2Image/NorwegianCruiseLine.jpg",
    multiple: true,
    image: true

  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/second.mp4?alt=media&token=cb07a5f9-a433-4055-bf81-3bc0d28255ce",
    multiple: true,
    image: false

  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/seventh.mp4?alt=media&token=839f3214-0a9e-4d84-bbcd-967b0635d9cc",
    multiple: true,
    image: false

  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/eight.mp4?alt=media&token=23b2334d-93ab-4de5-b1c0-c6089e4cff8b",
    multiple: false,
    image: false

  },
  {
    url: "https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://cf-images.us-east-1.prod.boltdns.net/v1/static/3281700261001/34221862-1c45-4f5a-9a6a-76576125b2f4/623ccbeb-a2cd-447e-ae4d-7158f70c8324/1280x720/match/image.jpg&w=1280&h=720&q=90&c=cc",
    multiple: false,
    image: true

  },
  {
    url: "https://www.india-briefing.com/news/wp-content/uploads/2020/08/What-are-India%E2%80%99s-Latest-Rules-on-International-Air-Travel-.jpg",
    multiple: false,
    image: true

  },
  {
    url: "https://www.thenewsminute.com/sites/default/files/styles/slideshow_image_size/public/Flight-service_1200-Picxy.com-teachingdoc.jpg?itok=ExNAvxyw",
    multiple: false,
    image: true

  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/third.mp4?alt=media&token=94097315-214f-4dc5-bc65-d333ae9f35e6",
    multiple: false,
    image: false

  },
  {
    url: "https://theblondeabroad.com/wp-content/uploads/2020/08/Favorite-Hats-Homepage-Icon.jpg",
    multiple: true,
    image: true

  },
  {
    url: "https://images.news18.com/ibnlive/uploads/2021/02/1613989650_mumbai-7.jpg?impolicy=website&width=534&height=356",
    multiple: true,
    image: true

  },
];

const AllItemList = () => {
  return (
    <div className="all-items">
      {items.map((card, index) => (
        <CollectibleCard card={card} key={index + card.url} />
      ))}
    </div>
  );
};

export default AllItemList;
