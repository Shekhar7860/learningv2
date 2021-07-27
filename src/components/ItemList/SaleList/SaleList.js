import React, { useEffect, useState } from "react";
import CollectibleCard from "../../Cards/CollectibleCard";
import { postContract } from "../../../contractDetails/item";
import { postCollectible } from "../../../contractDetails/erc1155";
import "./SaleList.css";
import { web3 } from "../../../constants/constants";
import ipfs from "../../../functions/Ipfs";
import { contents } from "../../../functions/ipfsContents";
import { Spin } from "antd";
import { auctionContract } from "../../../contractDetails/auction";
const itemsold = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/eight.mp4?alt=media&token=23b2334d-93ab-4de5-b1c0-c6089e4cff8b",
    multiple: false,
    image: false,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/fifth.mp4?alt=media&token=042f16e3-78b4-43a5-a643-8be7cbd0f38e",
    multiple: true,
    image: false,
  },
  {
    url: "https://image.freepik.com/free-photo/young-beautiful-woman-standing-yacht-luxury-travel-boat-cruise-vacation_146377-4040.jpg",
    multiple: false,
    image: true,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/learnings-fde29.appspot.com/o/first.mp4?alt=media&token=b5c52878-6837-467a-9571-727f6053de52",
    multiple: true,
    image: false,
  },
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

const SaleList = ({ onCallBack, sale }) => {
  const [items, setItems] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let auctionItems = [...auctions];
    const auction = await auctionContract();
    const accounts3 = await web3.eth.getAccounts();
    await auction.methods
      .getCount()
      .call()
      .then(async (value) => {
        for (let i = 0; i < value; i++) {
          //  this.auctionListLoaderArray = Array(value - i);
          const auction2 = await auction.methods
            .auctions(i)
            .call()
            .then(async (auctions) => {
              // console.log("auctions", auctions);
              const ipfsData = await contents(auctions.metadata);
              const jsonData = JSON.parse(ipfsData);
              // console.log('js', )
              auctionItems.push({
                owner: auctions.owner,
                tokenId: auctions.id,
                sale: jsonData.sale,
                url: jsonData.file,
                multiple: false,
                image: true,
                title: jsonData.username,
                eth: jsonData.royalties,
                time: jsonData.properties,
                category: "LISTING",
                userThumb:
                  "https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmV4Z22SMcfg1qHvuBMyAG3qwrxyCLRwiqQsdXBConUQeW&w=100",
                userId: accounts3[0],
                fileType: jsonData.fileType,
                tokenType: "erc721",
              });
            });
          // });
        }
      });
    setAuctions(auctionItems);
    setLoading(false);
    onCallBack(auctionItems, "sale");

    let totalCreatedProducts = 0;
    const accounts = await web3.eth.getAccounts();
    let listItems = [...items];
    // communicating with ethereum blockchain database
    const contract = await postContract();
    const collectTableContract = await postCollectible();
    await contract.methods
      .getTokensOf(accounts[0])
      .call()
      .then(async (value) => {
        //  console.log("tokens value", value);
        for (let i = 0; i < value.length; i++) {
          const product = await contract.methods
            .products(value[i])
            .call()
            .then(async (products) => {
              totalCreatedProducts += 1;
              var uri = await contract.methods
                .tokenURI(value[i])
                .call()
                .then(async (data) => {
                  const ipfsData = await contents(data);
                  const jsonData = JSON.parse(ipfsData);

                  listItems.push({
                    sale: jsonData.sale,
                    url: jsonData.file,
                    multiple: false,
                    image: true,
                    title: jsonData.username,
                    eth: jsonData.royalties,
                    time: jsonData.properties,
                    category: "LISTING",
                    userThumb:
                      "https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmV4Z22SMcfg1qHvuBMyAG3qwrxyCLRwiqQsdXBConUQeW&w=100",
                    userId: accounts[0],
                    fileType: jsonData.fileType,
                    tokenType: "erc721",
                  });
                });
            });
        }
      });

    await collectTableContract.methods
      .getTokensOfERC1155(accounts[0])
      .call()
      .then(async (tokens) => {
        for (var i = 0; i < tokens.length; i++) {
          await collectTableContract.methods
            .ercTokens(tokens[i])
            .call()
            .then(async (result) => {
              const remainingBalance = await collectTableContract.methods
                .balanceOf(accounts[0], tokens[i])
                .call();
              const ipfsData = await contents(result.metaData);
              const jsonData = JSON.parse(ipfsData);
              if (result.owner == accounts[0]) {
                listItems.push({
                  sale: jsonData.sale,
                  balance: remainingBalance,
                  totalSupply: result.totalSupply,
                  url: jsonData.file,
                  multiple: true,
                  image: true,
                  title: jsonData.username,
                  eth: jsonData.royalties,
                  properties: jsonData.properties,
                  category: "LISTING",
                  userThumb:
                    "https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmV4Z22SMcfg1qHvuBMyAG3qwrxyCLRwiqQsdXBConUQeW&w=100",
                  userId: accounts[0],
                  fileType: jsonData.fileType,
                  tokenType: "erc1155",
                });
              }
            });
        }
      });

    setItems(listItems);
    onCallBack(listItems, "created");
  };
  return (
    <>
      {sale == true ? (
        <>
          {auctions.length > 0 ? (
            <div className="sale-list">
              {auctions.map((card, index) => (
                <CollectibleCard card={card} key={index + card.url} />
              ))}
            </div>
          ) : (
            <div className="center-align">
              <Spin size={"large"} spinning={loading} />
            </div>
          )}
        </>
      ) : (
        <>
          {items.length > 0 ? (
            <div className="sale-list">
              {items.map((card, index) => (
                <CollectibleCard card={card} key={index + card.url} />
              ))}
            </div>
          ) : (
            <div className="center-align">
              <Spin size={"large"} spinning={loading} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SaleList;
