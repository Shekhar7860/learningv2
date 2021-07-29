import React, { useEffect, useState } from "react";
import "./SellPage.css";
import { HeartOutlined, MoreOutlined } from "@ant-design/icons";
import { Dropdown, Image, Menu, Tabs } from "antd";
import InfoList from "../../components/SellPage/InfoList";
import OwnerItem from "../../components/SellPage/Item/OwnerItem";
import OwnersList from "../../components/SellPage/OwnersList";
import HistoryList from "../../components/SellPage/HistoryList";
import BidList from "../../components/SellPage/BidList";
import BidDialog from "../../components/Dialogs/BidDialog";
import DialogFun from "../../functions/DialogFun";
import { useHistory } from "react-router";
import ShareDialog from "../../components/Dialogs/ShareDialog";
import ReportDialog from "../../components/Dialogs/ReportDialog";
import ThanksDialog from "../../components/Dialogs/ThanksDialog";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import { auctionContract } from "../../contractDetails/auction";
import { SettingsRemote, TrainRounded } from "@material-ui/icons";
import { web3 } from "../../constants/constants";
const { TabPane } = Tabs;

// const item = {
//   profile:
//     "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE2OSwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE2OSwxKTsgc3Ryb2tlLXdpZHRoOjAuMjsnPjxyZWN0ICB4PScxOCcgeT0nMTInIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMTgnIHk9JzE1JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzE4JyB5PScyNCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScxNScgeT0nMTInIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMjEnIHk9JzEyJyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzE1JyB5PScxOCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScyMScgeT0nMTgnIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMTUnIHk9JzI0JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzIxJyB5PScyNCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScxMicgeT0nMTUnIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMjQnIHk9JzE1JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PC9nPjwvc3ZnPg==",
//   tag: "Highest bid by 0x1160387a3...f8e5",
//   sub: "1 SNFT $2,414.45",
// };

const menu = (toggleShareDialog, toggleReportDialog) => (
  <Menu onClick={() => {}}>
    <Menu.Item key="1" onClick={toggleShareDialog}>
      Share
    </Menu.Item>
    <Menu.Item key="2" onClick={toggleReportDialog}>
      Report
    </Menu.Item>
  </Menu>
);

const SellPage = ({ match, data }) => {
  const history = useHistory();
  const [bidButton, showBidButton] = useState(false);
  const [card, setCard] = useState(null);
  const [item, setItem] = useState({
    profile:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE2OSwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE2OSwxKTsgc3Ryb2tlLXdpZHRoOjAuMjsnPjxyZWN0ICB4PScxOCcgeT0nMTInIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMTgnIHk9JzE1JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzE4JyB5PScyNCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScxNScgeT0nMTInIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMjEnIHk9JzEyJyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzE1JyB5PScxOCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScyMScgeT0nMTgnIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMTUnIHk9JzI0JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzIxJyB5PScyNCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScxMicgeT0nMTUnIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMjQnIHk9JzE1JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PC9nPjwvc3ZnPg==",
    tag: "Highest bid by 0x1160387a3...f8e5",
    sub: "1 SNFT $2,414.45",
  });

  useEffect(() => {
    const param = history.location;
    if (data.user.data != null) {
      if (data.user.data.account != param.state.owner) {
        showBidButton(true);
      }
    }
    setCard(param.state);
  }, [data]);

  const highestBidData = (highestBid) => {
    if (highestBid.length != 0) {
      const ether = web3.utils.fromWei(highestBid[0].amount, "ether");
      setItem({
        profile:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE2OSwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE2OSwxKTsgc3Ryb2tlLXdpZHRoOjAuMjsnPjxyZWN0ICB4PScxOCcgeT0nMTInIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMTgnIHk9JzE1JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzE4JyB5PScyNCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScxNScgeT0nMTInIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMjEnIHk9JzEyJyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzE1JyB5PScxOCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScyMScgeT0nMTgnIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMTUnIHk9JzI0JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzIxJyB5PScyNCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScxMicgeT0nMTUnIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMjQnIHk9JzE1JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PC9nPjwvc3ZnPg==",
        tag: `Highest bid by ${highestBid[0].from} ETH`,
        sub: `${ether} ETH`,
      });
    }
  };
  const {
    toggleBidDialog,
    bidDialog,
    shareDialog,
    toggleShareDialog,
    toggleReportDialog,
    reportDialog,
    thanksDialog,
    toggleThanksDialog,
  } = DialogFun();

  return (
    <div className="sell-page">
      <div className="sell-page-left">
        {card && card.fileType.type == "image" ? (
          <Image
            className="sell-page-left-preview"
            src={card && card.url}
            alt={card && card.url}
          />
        ) : (
          <ReactPlayer
            style={{ background: "black" }}
            playing
            controls
            loop
            playsinline
            url={card && card.url}
          />
        )}
      </div>
      <div className="sell-page-right">
        <div className="sell-page-right-header">
          <div>
            <h1>OROCHI-96</h1>
            <p>
              <span>1 SNFT</span> $2,414.45 1 of 1
            </p>
          </div>
          <div className="sell-page-header-action">
            <div className="sell-page-like">
              <HeartOutlined />
              <p>107</p>
            </div>
            <Dropdown
              onClick={() => {}}
              overlay={menu(toggleShareDialog, toggleReportDialog)}
              trigger={["click"]}
              placement="bottomCenter"
            >
              <MoreOutlined />
            </Dropdown>
          </div>
        </div>
        <div className="sell-page-right-content">
          <h3>Surrogate #96</h3>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Info" key="1">
              <InfoList />
            </TabPane>
            <TabPane tab="Owners" key="2">
              <OwnersList />
            </TabPane>
            <TabPane tab="History" key="3">
              <HistoryList />
            </TabPane>
            <TabPane tab="Bids" key="4">
              <BidList
                biddingData={card}
                callBack={highestBidData}
                productData={history.location.state}
              />
            </TabPane>
          </Tabs>
        </div>
        <div className="sell-page-right-footer">
          <OwnerItem item={item} />
          {bidButton == true ? (
            <>
              <button onClick={toggleBidDialog}>Place a bid</button>
              <p>Item is not on sale, but you can place a bid</p>
            </>
          ) : null}
        </div>
      </div>
      <BidDialog
        biddingData={card}
        check={false}
        modalVisible={bidDialog}
        toggleDialog={toggleBidDialog}
      />
      <ShareDialog
        modalVisible={shareDialog}
        toggleDialog={toggleShareDialog}
      />
      <ReportDialog
        modalVisible={reportDialog}
        toggleDialog={toggleReportDialog}
        toggleThanksDialog={toggleThanksDialog}
      />
      <ThanksDialog
        modalVisible={thanksDialog}
        toggleDialog={toggleThanksDialog}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, null)(SellPage);
