import React from "react";
import ContentLoader from "react-content-loader";
import "../../utils/Colors.css";

const SellerLoader = (props) => (
  <ContentLoader
    // viewBox="0 0 100% 100%"
    width="200px"
    height="50px"
    backgroundColor="var(--backgroundLoaderColor)"
    foregroundColor="var(--foregroundColor)"
    {...props}
  >
    <rect x="30" y="11" rx="5" ry="5" width="100" height="12" />
    <rect x="30" y="34" rx="5" ry="5" width="50" height="12" />
    <circle cx="8" cy="28" r="8" />
    <circle cx="160" cy="27" r="24" />
  </ContentLoader>
);

export default SellerLoader;
