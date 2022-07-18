import { QueryResult, useQuery } from "@apollo/client";
import { GET_MICROS } from "../shared/queries";
import { Micro, MicroList } from "../structs/micros";
import MicroPreview from "./MicroPreview";

const MicroPreviewList = () => {
  const micros: QueryResult<MicroList> = useQuery(GET_MICROS);

  console.log(micros);

  return (
    <div className="container grid grid-cols-3 gap-x-5">
      {micros.loading && "Loading..."}

      {!micros.loading &&
        micros.data?.micros.map((micro: Micro) => (
          <MicroPreview data={micro} />
        ))}
    </div>
  );
};

export default MicroPreviewList;
