import { auctionContract } from "../contractDetails/auction";
import React, { useEffect, useState } from "react";
import { web3 } from "../constants/constants";
import { contents } from "./ipfsContents";
const CollectionFun = () => {
  const [collections, setCollections] = useState([]);
  const [hotBids, setHotBids] = useState([]);
  useEffect(() => {
    const getCollections = async () => {
      let collectionsList = [...collections];
      const auction = await auctionContract();
      const accounts = await web3.eth.getAccounts();
      await auction.methods
        .getCount()
        .call()
        .then(async (value) => {
          for (let i = 0; i < value; i++) {
            const auction2 = await auction.methods
              .auctions(i)
              .call()
              .then(async (auctions) => {
                const ipfsData = await contents(auctions.metadata);
                const jsonData = JSON.parse(ipfsData);
                collectionsList.push({
                  owner: auctions.owner,
                  tokenId: auctions.id,
                  sale: jsonData.sale,
                  url: jsonData.file,
                  cover: jsonData.file,
                  multiple: false,
                  image: true,
                  name: jsonData.username,
                  eth: jsonData.royalties,
                  time: jsonData.properties,
                  category: "LISTING",
                  userThumb:
                    "https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmV4Z22SMcfg1qHvuBMyAG3qwrxyCLRwiqQsdXBConUQeW&w=100",
                  userId: accounts[0],
                  fileType: jsonData.fileType,
                  tokenType: jsonData.tokenType,
                  sub: jsonData.description,
                });
              });
          }
          setCollections(collectionsList);
        });
      const getHotAuctions = await auction.methods.getHotAuctions().call();
      let bids = collectionsList.filter((el) => {
        return getHotAuctions.find((element) => {
          return element === el.tokenId;
        });
      });
      setHotBids(bids);
    };
    getCollections();
    return () => {};
  }, []);
  const items = [
    {
      cover:
        "https://lh3.googleusercontent.com/XYDO5Ooz284XS3ReQnQkITu15v7wHMI3vKv1wJzpo-LsF4_2oCvYgKRq_NKSmEQuyBt-uzd6V8JpVg6Qc2r9TuZhJ_UZjx7rSuU-z5M=s250",
      profile:
        "https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg",
      name: "selenagomez",
      sub: "Travel",
    },
    {
      cover:
        "https://lh3.googleusercontent.com/5SG0YZi7vGw5JhmyNar6rO0HBRcKA4wJulbxSLj5aRbDkWi63_FeAj43CESSiM2ON3EfOxwqmaoq8Wr8hSVro02OQ6IDlslR_gAaiw=s250",
      profile:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5NjIyODM0ODM2ODc0Mzc3/dwayne-the-rock-johnson-gettyimages-1061959920.jpg",
      name: "therock",
      sub: "Architecture",
    },
    {
      cover:
        "https://lh3.googleusercontent.com/vl4uEeuAIL9igNnb2G_8L7kj-PM0bLiU3HH9l4kRPtdh-_LpojFY3VtrOo1unH7jUzUEJL4m_N6L7BEVM6CHN-cEpTNUyDboCgug3m8=s250",
      profile:
        "https://famouspeople.wiki/wp-content/uploads/2020/05/elon-musk-650x486.jpg",
      name: "elonrmuskk",
      sub: "Style",
    },
    {
      cover:
        "https://lh3.googleusercontent.com/gkL-adfztN7yseuDyNGoQoy6jUW0lMXu-P-QfsHLY65oZtnvWpU21d6eh5WD9e_J9N6hUtXIJJF3aczXsSymH8dEf7IBFhlVvO72zjE=s250",
      profile:
        "https://img.etimg.com/thumb/msid-55498280,width-480,height-360,imgsize-314769,resizemode-4/us-president-barack-obama-scooped-ice-cream.jpg",
      name: "barackobama",
      sub: "Sport",
    },
    {
      cover:
        "https://lh3.googleusercontent.com/Z2x9X-i8QWaHC6YYSlAfhDDfvaI5KxWz7Lvee28Y6pfsb_TX0h6b8KTYFbdx1jbDc4gkN_na0y14isB8K9gNOd4JkZig-YPonW3PrQ=s250",
      profile:
        "https://mostfamousbirthdays.com/profile/mark-zuckerberg-1393.jpg",
      name: "zuck",
      sub: "Food",
    },
    {
      cover:
        "https://lh3.googleusercontent.com/vl4uEeuAIL9igNnb2G_8L7kj-PM0bLiU3HH9l4kRPtdh-_LpojFY3VtrOo1unH7jUzUEJL4m_N6L7BEVM6CHN-cEpTNUyDboCgug3m8=s250",
      profile:
        "https://i.insider.com/5669c95b2340f817008b4ba7?width=1000&format=jpeg&auto=webp",
      name: "robertdowneyjr",
      sub: "Art",
    },
    {
      cover:
        "https://lh3.googleusercontent.com/gkL-adfztN7yseuDyNGoQoy6jUW0lMXu-P-QfsHLY65oZtnvWpU21d6eh5WD9e_J9N6hUtXIJJF3aczXsSymH8dEf7IBFhlVvO72zjE=s250",
      profile:
        "https://images.thestar.com/M_HICQRBPMFeaS0Ow6-k9b9H2WE=/1280x1024/smart/filters:cb(1568038861082)/https://www.thestar.com/content/dam/thestar/news/insight/2009/06/07/is_oprah_winfrey_giving_us_bad_medicine/oprahwinfrey.jpeg",
      name: "oprah",
      sub: "Beauty",
    },
    {
      cover:
        "https://lh3.googleusercontent.com/Z2x9X-i8QWaHC6YYSlAfhDDfvaI5KxWz7Lvee28Y6pfsb_TX0h6b8KTYFbdx1jbDc4gkN_na0y14isB8K9gNOd4JkZig-YPonW3PrQ=s250",
      profile:
        "https://www.simplemost.com/wp-content/uploads/2017/01/1057587356_Bill-Gates.jpg",
      name: "thisisbillgates",
      sub: "Music",
    },
    {
      cover:
        "https://lh3.googleusercontent.com/vl4uEeuAIL9igNnb2G_8L7kj-PM0bLiU3HH9l4kRPtdh-_LpojFY3VtrOo1unH7jUzUEJL4m_N6L7BEVM6CHN-cEpTNUyDboCgug3m8=s250",
      profile:
        "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg",
      name: "jeffbezos",
      sub: "Humor",
    },
    {
      cover:
        "https://lh3.googleusercontent.com/gkL-adfztN7yseuDyNGoQoy6jUW0lMXu-P-QfsHLY65oZtnvWpU21d6eh5WD9e_J9N6hUtXIJJF3aczXsSymH8dEf7IBFhlVvO72zjE=s250",
      profile:
        "https://assets.vogue.com/photos/5e738f594fc08a00086af5ee/master/pass/GettyImages-1206321276.jpg",
      name: "gal_gadot",
      sub: "Fitness",
    },
    {
      cover:
        "https://lh3.googleusercontent.com/Z2x9X-i8QWaHC6YYSlAfhDDfvaI5KxWz7Lvee28Y6pfsb_TX0h6b8KTYFbdx1jbDc4gkN_na0y14isB8K9gNOd4JkZig-YPonW3PrQ=s250",
      profile:
        "https://i2.wp.com/securityaffairs.co/wordpress/wp-content/uploads/2017/03/cda4a74458cc9c3337ff3a4a9ac0762e1.jpg?resize=300300",
      name: "emmawatson",
      sub: "Sport",
    },
  ];

  return { items: collections, hotBids };
};

export default CollectionFun;
