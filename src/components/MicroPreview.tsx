import { Link } from "react-router-dom";
import { Micro } from "../structs/micros";

interface MicroPreviewProps {
  data: Micro;
}

const MicroPreview = (props: MicroPreviewProps) => (
  <div className="shadow-md px-6 py-6 mt-2 mb-3 bg-white rounded-md">
    <h3 className="text-lg font-bold text-gray-700">{props.data.title}</h3>
    <p className="text-sm text-gray-500 mt-2 leading-6">
      {props.data.content}...
      <Link to="/123/slug" className="font-bold text-blue-500">
        Read More
      </Link>
    </p>

    <small className="text-xs mt-2 block text-gray-400">
      published on 12/12/2020 - 12:33PM
    </small>
  </div>
);

export default MicroPreview;
