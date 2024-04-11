import React from "react";
import { Box } from "@mui/material";
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        width={size}
        height={size}
        loading="lazy"
        style={{ objectFit: "cover", borderRadius: "50%" }}
        alt="user_image"
        src={`http://localhost:something/${image}`}
        title="User profile image"
      />
    </Box>
  );
};

export default UserImage;
