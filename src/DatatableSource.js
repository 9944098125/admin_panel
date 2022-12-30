import { Avatar, Box, Typography } from "@mui/material";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar
            sx={{ width: "32px", height: "32px" }}
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
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
    field: "age",
    headerName: "Age",
    width: 70,
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
  { field: "_id", headerName: "ID", width: 250 },
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
    width: 230,
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

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Sarah Anderson",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLJvUxnYBk5AK2Bz6fD3tW8ZPAmNFu0AZmg&usqp=CAU",
    status: "Active",
    email: "sarah@yp.com",
    age: 25,
  },
  {
    id: 2,
    username: "Nottoriah Smith",
    img: "https://newsmeter.in/h-upload/2021/11/15/308409-turkey-beautiful-women.webp",
    status: "Pending",
    email: "nottoriah@yopmail.com",
    age: 32,
  },
  {
    id: 3,
    username: "Veena swarna",
    img: "https://i.pinimg.com/originals/67/2f/82/672f82e899487ce5b214d9c1a749f9fa.jpg",
    status: "Active",
    email: "veena@gmail.com",
    age: 22,
  },
  {
    id: 4,
    username: "Sarah Anderson",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLJvUxnYBk5AK2Bz6fD3tW8ZPAmNFu0AZmg&usqp=CAU",
    status: "Active",
    email: "sarah@yp.com",
    age: 25,
  },
  {
    id: 5,
    username: "Nottoriah Smith",
    img: "https://newsmeter.in/h-upload/2021/11/15/308409-turkey-beautiful-women.webp",
    status: "Pending",
    email: "nottoriah@yopmail.com",
    age: 32,
  },
  {
    id: 6,
    username: "Veena swarna",
    img: "https://i.pinimg.com/originals/67/2f/82/672f82e899487ce5b214d9c1a749f9fa.jpg",
    status: "Active",
    email: "veena@gmail.com",
    age: 22,
  },
  {
    id: 7,
    username: "Sarah Anderson",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLJvUxnYBk5AK2Bz6fD3tW8ZPAmNFu0AZmg&usqp=CAU",
    status: "Active",
    email: "sarah@yp.com",
    age: 25,
  },
  {
    id: 8,
    username: "Nottoriah Smith",
    img: "https://newsmeter.in/h-upload/2021/11/15/308409-turkey-beautiful-women.webp",
    status: "Pending",
    email: "nottoriah@yopmail.com",
    age: 32,
  },
  {
    id: 9,
    username: "Veena swarna",
    img: "https://i.pinimg.com/originals/67/2f/82/672f82e899487ce5b214d9c1a749f9fa.jpg",
    status: "Active",
    email: "veena@gmail.com",
    age: 22,
  },
];
