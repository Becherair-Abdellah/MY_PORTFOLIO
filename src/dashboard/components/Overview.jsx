import React from "react";
import Card from "./Card";
import { FaUsers } from "react-icons/fa";
import { RiArticleLine,RiCalendarEventLine,RiMessageLine } from "react-icons/ri";
function Overview() {
  return (
    <div className=" py-4 w-full">
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full gap-5">
        <Card
          icon={<FaUsers size={50} />}
          color="bg-gradient-to-r from-red-500 to-[#0058ff]"
          title="Users visites"
          nbr="40"
        />
      <Card
          icon={<FaUsers size={50} />}
          color="bg-gradient-to-r from-red-500 to-[#0058ff]"
          title="Articles"
          nbr="4"
        />
      </div>

    </div>
  );
}

export default Overview;
