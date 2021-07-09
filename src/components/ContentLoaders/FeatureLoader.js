import React from "react";
import ContentLoader from "react-content-loader";
import '../../utils/Colors.css'

const FeatureLoader = (props) => {
  return (
    <ContentLoader
      viewBox="0 0 100% 100%"
      height="100%"
      width={"100%"}
      backgroundColor="var(--backgroundLoaderColor)"
      foregroundColor="var(--foregroundColor)"
      {...props}
    >
      <rect x="0" y="0" rx="5" ry="5" width="100%" height="200" />
    </ContentLoader>
  );
};

export default FeatureLoader;
