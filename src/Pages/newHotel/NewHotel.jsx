import "./newHotel.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useContext, useEffect } from "react";
import { hotelInputs } from "../../formSource";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createHotel } from "../../Redux/Actions/createHotel";
import { getRooms } from "../../Redux/Actions/getRooms";
import AlertModal from "../../Components/AlertModal";
import { CircularProgress } from "@mui/material";

const NewHotel = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.toggleTheme.darkMode);
  const navigate = useNavigate();
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  const data = useSelector((state) => state.getRooms.data);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  // console.log(files);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/lamadev/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newhotel = {
        ...info,
        rooms,
        photos: list,
      };

      dispatch(createHotel(newhotel));

      // await axios.post("/hotels/createHotel", newhotel);
    } catch (err) {
      console.log(err);
    }
  };

  const Alert = useSelector((state) => state.alert);
  const Hotel = useSelector((state) => state.createHotel);

  useEffect(() => {
    if (Alert.type === "success") {
      setTimeout(() => {
        navigate("/hotels");
      }, 3000);
    }
  }, [Alert, navigate]);

  return (
    <div className={darkMode ? "darkNew" : "new"}>
      {Alert.message && <AlertModal show={true} />}
      <div className="newContainer">
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {data &&
                    data.map((room) => (
                      <option key={room._id} value={room._id}>
                        {room.title}
                      </option>
                    ))}
                </select>
              </div>
              <button onClick={handleClick}>
                {Hotel.loading && (
                  <CircularProgress sx={{ fontSize: "15px" }} />
                )}
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
