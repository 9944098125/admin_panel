import "./newRoom.css";
import { useState, useContext } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../Hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";

const NewRoom = () => {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  console.log(hotelId);
  const { data, loading } = useFetch("/hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
      await axios.post(`/rooms/createRoom/${hotelId}`, {
        ...info,
        roomNumbers,
      });
      navigate("/rooms");
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(info);
  return (
    <div className={darkMode ? "darkNew" : "new"}>
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
                  {loading
                    ? "loading"
                    : data &&
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
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
