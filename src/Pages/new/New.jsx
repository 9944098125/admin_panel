import "./new.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { register } from "../../Redux/Actions/register";
import { useDispatch, useSelector } from "react-redux";
import AlertModal from "../../Components/AlertModal";
import { CircularProgress } from "@mui/material";

const New = ({ inputs, title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const darkMode = useSelector((state) => state.toggleTheme.darkMode);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/lamadev/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newUser = {
        ...info,
        profilePicture: url,
      };

      // await axios.post("/auth/register", newUser);
      dispatch(register(newUser));
    } catch (err) {
      console.log(err);
    }
  };

  const Alert = useSelector((state) => state.alert);
  const Register = useSelector((state) => state.register);

  useEffect(() => {
    if (Alert.type === "success") {
      setTimeout(() => {
        navigate("/users");
      }, 3000);
    }
  }, [Alert, navigate]);

  // console.log(info);
  return (
    <div className={darkMode ? "darkNew" : "new"}>
      {Alert.message && <AlertModal show={true} />}
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
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
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button onClick={handleClick}>
                {Register.loading && (
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

export default New;
