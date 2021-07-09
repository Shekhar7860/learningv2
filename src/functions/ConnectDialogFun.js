import { useState } from "react";

const ConnectDialogFun = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [walletDialog, setWalletDialog] = useState(false);
  const [socialDialog, setSocialDialog] = useState(false);

  const showConnectDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  const toggleWalletDialog = () => {
    setWalletDialog(!walletDialog);
  };

  const toggleSocialDialog = () => {
    setSocialDialog(!socialDialog);
  };

  return { dialogVisible, showConnectDialog, toggleWalletDialog, walletDialog, toggleSocialDialog, socialDialog };
};

export default ConnectDialogFun;
