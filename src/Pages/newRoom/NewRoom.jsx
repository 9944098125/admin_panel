import "./newRoom.css";
import { useState, useContext, useEffect } from "react";
import { roomInputs } from "../../formSource";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../Redux/Actions/getHotels";
import { createRoom } from "../../Redux/Actions/createRoom";
import AlertModal from "../../Components/AlertModal";
import { CircularProgress } from "@mui/material";

const NewRoom = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.toggleTheme.darkMode);

  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);

  const data = useSelector((state) => state.getHotels.data);

  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  console.log(hotelId);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    // try {
    //   await axios.post(`/rooms/createRoom/${hotelId}`, {
    //     ...info,
    //     roomNumbers,
    //   });
    //   navigate("/rooms");
    // } catch (err) {
    //   console.log(err);
    // }
    const information = {
      ...info,
      roomNumbers,
    };
    dispatch(createRoom(hotelId, information));
  };

  const Alert = useSelector((state) => state.alert);
  const Room = useSelector((state) => state.createRoom);

  useEffect(() => {
    if (Alert.type === "success") {
      setTimeout(() => {
        navigate("/rooms");
      }, 3000);
    }
  }, [Alert, navigate]);

  // console.log(info);
  return (
    <div className={darkMode ? "darkNew" : "new"}>
      {Alert.message && <AlertModal show={true} />}
      <div className="newContainer">
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="give comma between room numbers."
                />
              </div>
              <div className="formInput">
                <label>Choose a hotel</label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {data &&
                    data.map(
                      (hotel) =>
                        hotel && (
                          <option key={hotel._id} value={hotel._id}>
                            {hotel.name}
                          </option>
                        )
                    )}
                </select>
              </div>
              <button onClick={handleClick}>
                {Room.loading && <CircularProgress sx={{ fontSize: "15px" }} />}
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
