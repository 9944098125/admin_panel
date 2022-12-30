import React, { Fragment, useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function New({ inputs, title }) {
  const [image, setImage] = useState("");
  const changeImage = (photo) => {};

  const submitSuccess = (values) => {};

  return (
    <Fragment>
      <Box sx={{ p: 2 }}>
        {/* top part */}
        <Box sx={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)", p: 2, mb: 2 }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
            {title}
          </Typography>
        </Box>
        {/* bottom part */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            p: 2,
          }}
        >
          {/* left part */}
          <Box sx={{ flex: "1", display: "flex", justifyContent: "center" }}>
            <Avatar
              src={image ? URL.createObjectURL(image) : ""}
              sx={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
              }}
            />
          </Box>
          {/* right part */}
          <Box sx={{ flex: "4", p: 2 }}>
            <Formik onSubmit={(values) => submitSuccess(values)}>
              {({ errors, touched }) => (
                <Form>
                  <Box sx={{ display: "flex", flexWrap: "wrap", p: 1 }}>
                    {inputs.map((input) => (
                      <Field
                        key={input.id}
                        type={input.type}
                        placeholder={input.placeholder}
                        className="primary-input-field"
                      />
                    ))}

                    <input
                      name="image"
                      onChange={(e) => setImage(e.target.files[0])}
                      type="file"
                      style={{ cursor: "pointer" }}
                    />
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", pt: 2 }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "secondary.bg",
                        color: "secondary.dark",
                        p: 0.7,
                        borderRadius: "9px",
                        width: "100%",
                        "&:hover": {
                          backgroundColor: "primary.bg",
                          color: "primary.main",
                        },
                      }}
                    >
                      Send
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default New;
