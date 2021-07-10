import { useState } from "react";

const DialogFun = () => {
  const [purchaseDialog, setPurchaseDialog] = useState(false);
  const [bidDialog, setBidDialog] = useState(false);
  const [shareDialog, setShareDialog] = useState(false);
  const [reportDialog, setReportDialog] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [createCollDialog, setCreateCollDialog] = useState(false);
  const [confCollectionDialog, setConfCollectionDialog] = useState(false);
  const [thanksDialog, setThanksDialog] = useState(false);

  const togglePurchaseDialog = () => {
    setPurchaseDialog(!purchaseDialog);
  };

  const toggleBidDialog = () => {
    setBidDialog(!bidDialog);
  };

  const toggleShareDialog = () => {
    setShareDialog(!shareDialog);
  };

  const toggleReportDialog = () => {
    setReportDialog(!reportDialog);
  };

  const toggleConfirmDialog = () => {
    setConfirmDialog(!confirmDialog);
  };

  const toggleCreateCollDialog = () => {
    setCreateCollDialog(!createCollDialog);
  };

  const toggleConfCollDialog = () => {
    setConfCollectionDialog(!confCollectionDialog);
  };

  const toggleThanksDialog = () => {
    setThanksDialog(!thanksDialog);
  };

  return {
    togglePurchaseDialog,
    purchaseDialog,
    toggleBidDialog,
    bidDialog,
    shareDialog,
    createCollDialog,
    toggleThanksDialog,
    thanksDialog,
    toggleConfCollDialog,
    confCollectionDialog,
    toggleCreateCollDialog,
    toggleConfirmDialog,
    confirmDialog,
    toggleShareDialog,
    toggleReportDialog,
    reportDialog,
  };
};

export default DialogFun;
