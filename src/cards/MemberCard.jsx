import React from "react";

const MemberCard = ({ member }) => {
  const { name, profilePhoto, designation, shortBio } = member;

  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl h-full">
      {/* Profile Picture */}
      <img
        src={profilePhoto}
        alt={`${name}'s profile`}
        className="w-24 h-24 object-cover rounded-full border-4 border-teal-500 shadow-md mb-4"
      />

      {/* Name */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">
        {name}
      </h2>

      {/* Designation */}
      <p className="text-sm text-teal-500 font-medium text-center">
        {designation}
      </p>

      {/* Bio */}
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center">
        {shortBio}
      </p>
    </div>
  );
};

export default MemberCard;
