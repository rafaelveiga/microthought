import React from "react";

const Title = (props: React.PropsWithChildren) => (
  <h2 className="text-2xl font-extrabold text-gray-800">{props.children}</h2>
);

export default Title;
