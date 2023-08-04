import CommonDropdown from "@/pages/CommonDropdown";
import Dropdown from "@/pages/Dropdown";
import { ArrowRightAltRounded, KeyboardBackspace } from "@mui/icons-material";
import React from "react";

const BlogPage = () => {
  return (
    <div className="Blog">
      <CommonDropdown title="Blogs" path="Blogs" />
      <div className="Blog-container">
        <div className="Blog-header">
          <h1>Blogs</h1>
          <span>
            Home
            <ArrowRightAltRounded />
            Blogs
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
