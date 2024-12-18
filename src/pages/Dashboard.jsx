import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      {/* Dashboard Header */}
      <header className="py-12 bg-primary text-secondary text-xl font-bold shadow-md">
        <h1 className="text-center">Admin Dahsboard</h1>
      </header>

      {/* Dashboard Content */}
      <main className="flex-1 p-6 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
          {/* Button Pair 1: Members and Add Member */}
          <button className="btn btn-primary w-full">Members</button>
          <Link to="/add-member" className="btn btn-outline btn-primary w-full">
            Add Member
          </Link>

          {/* Button Pair 2: Blogs and Create Blog */}
          <button className="btn btn-primary w-full">Blogs</button>
          <button className="btn btn-outline btn-primary w-full">
            Create Blog
          </button>

          {/* Button Pair 3: Events and New Event */}
          <button className="btn btn-primary w-full">Events</button>
          <button className="btn btn-outline btn-primary w-full">
            New Event
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
