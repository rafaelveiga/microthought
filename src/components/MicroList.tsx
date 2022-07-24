import { QueryResult, useQuery } from "@apollo/client";
import { GET_MICROS } from "../shared/queries";
import { Micro, MicroList } from "../structs/micros";
import MicroPreview from "./MicroPreview";

const MicroPreviewList = () => {
  const { data, loading, error }: QueryResult<MicroList> = useQuery(GET_MICROS);

  console.log(data);

  return (
    <div className="container grid grid-cols-3 gap-x-5">
      {loading && "Loading..."}

      {!loading &&
        data?.micros.map((micro: Micro) => <MicroPreview data={micro} />)}
    </div>
  );
};

export default MicroPreviewList;
