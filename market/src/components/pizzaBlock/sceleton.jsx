import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={290}
    height={500}
    viewBox="0 0 290 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="242" rx="10" ry="10" width="280" height="22" />
    <circle cx="142" cy="112" r="112" />
    <rect x="5" y="278" rx="10" ry="10" width="280" height="87" />
    <rect x="154" y="384" rx="22" ry="22" width="125" height="40" />
    <rect x="9" y="390" rx="10" ry="10" width="125" height="29" />
  </ContentLoader>
);

export default MyLoader;
