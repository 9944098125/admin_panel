import { Avatar, Box, Typography } from "@mui/material";

export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar
            sx={{ width: "32px", height: "32px" }}
            src={
              params.row.profilePicture ||
              "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
            }
          />
          {params.row.username}
        </Box>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 70,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 130,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return params.row.status === "Active" ? (
        <Typography
          sx={{
            p: "5px",
            borderRadius: "5px",
            backgroundColor: "lightgreen",
            color: "darkgreen",
          }}
        >
          {params.row.status}
        </Typography>
      ) : (
        <Typography
          sx={{
            p: "5px",
            borderRadius: "5px",
            backgroundColor: "yellow",
            color: "goldenrod",
          }}
        >
          {params.row.status}
        </Typography>
      );
    },
  },
  // {
  //   field: "phone",
  //   headerName: "Phone",
  //   width: 100,
  // },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 300 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 130,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
