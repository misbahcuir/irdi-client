import axios from "axios";
import React, { useEffect } from "react";

const AddMember = () => {
  const handleAddMember = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(e.target);
    const memberData = {
      name: formData.get("name"),
      designation: formData.get("designation"),
      shortBio: formData.get("shortBio"),
      profilePhoto: formData.get("profilePhoto"),
    };

    // Log or send the memberData object to an API
    axios
      .post(`${import.meta.env.VITE_serverUrl}/members`, memberData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content">
      <div className="w-full max-w-lg p-6 bg-neutral shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-primary text-center mb-6">
          Add New Member
        </h1>
        <form onSubmit={handleAddMember} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter member name"
              className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Designation Field */}
          <div>
            <label
              htmlFor="designation"
              className="block text-sm font-medium mb-2 "
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              placeholder="Enter designation"
              className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Profile Photo Link Field */}
          <div>
            <label
              htmlFor="profilePhoto"
              className="block text-sm font-medium mb-2 "
            >
              Profile Photo Link
            </label>
            <input
              type="url"
              id="profilePhoto"
              name="profilePhoto"
              placeholder="Enter profile photo URL"
              className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Short Bio Field */}
          <div>
            <label
              htmlFor="shortBio"
              className="block text-sm font-medium mb-2 "
            >
              Short Bio
            </label>
            <textarea
              id="shortBio"
              name="shortBio"
              rows="4"
              placeholder="Enter a short bio"
              className="textarea textarea-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-secondary hover:bg-opacity-90"
          >
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
