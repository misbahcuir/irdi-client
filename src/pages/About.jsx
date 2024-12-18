import axios from "axios";
import React, { useEffect, useState } from "react";
import MemberCard from "../cards/MemberCard";

const About = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_serverUrl}/members`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setMembers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-2">
      {/* Members Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <MemberCard key={member._id} member={member}></MemberCard>
        ))}
      </div>
    </div>
  );
};

export default About;
