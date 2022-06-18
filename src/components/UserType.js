import React, { useState } from "react";

export const UserType = () => {
  const [checkBoxes, setCheckBoxes] = useState(false);
  const [contact, setContact] = useState(false);
  const [userinfo, setUserInfo] = useState({
    userType: [],
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  //Checkboxes
  const handleChange = (e) => {
    // Destructuring target
    const { value, checked } = e.target;
    const { userType } = userinfo;

    //The user checks the box
    if (checked) {
      setUserInfo({
        userType: [...userType, value],
      });
    }

    //The user unchecks the box
    else {
      setUserInfo({
        userType: userType.filter((e) => e !== value),
      });
    }
  };

  //Submit form
  const handleSubmit = (e) => {
    //prevents page refresh
    e.preventDefault();
    //cleans the input fields
    setEmail("");
    setPassword("");
    setTelephone("");
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
    setTelephone("");
  };

  return (
    <form
      style={{
        width: "90%",
        marginTop: "50px",
      }}
    >
      {checkBoxes ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: "50px",
              backgroundColor: "lightgrey",
            }}
          >
            <h3 style={{ paddingLeft: "20px" }}>Tipo de utilizador</h3>
            <h3
              style={{ paddingRight: "20px", fontSize: "1.5rem" }}
              onClick={() => setCheckBoxes(false)}
            >
              -
            </h3>
          </div>
          <div
            style={{
              backgroundColor: "white",
              height: "180px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              paddingLeft: "20px",
              paddingTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "50px",
                width: "200px",
              }}
            >
              <input
                type="checkbox"
                value="project-manager"
                name="userType"
                onChange={handleChange}
              />
              <label>Project Manager</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "50px",
                width: "200px",
              }}
            >
              <input
                type="checkbox"
                value="developer"
                name="userType"
                onChange={handleChange}
              />
              <label>Developer</label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "50px",
                width: "200px",
              }}
            >
              <input
                type="checkbox"
                value="architect"
                name="userType"
                onChange={handleChange}
              />
              <label>Architect</label>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: "50px",
              backgroundColor: "lightgrey",
            }}
          >
            <h3 style={{ paddingLeft: "20px" }}>Tipo de utilizador</h3>
            <h3
              style={{ paddingRight: "20px", fontSize: "1.5rem" }}
              onClick={() => setCheckBoxes(true)}
            >
              +
            </h3>
          </div>
        </>
      )}

      {contact ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: "50px",
              backgroundColor: "lightgrey",
            }}
          >
            <h3 style={{ paddingLeft: "20px" }}>Contacto</h3>
            <h3
              style={{ paddingRight: "20px", fontSize: "1.5rem" }}
              onClick={() => setContact(false)}
            >
              -
            </h3>
          </div>

          <div
            style={{
              backgroundColor: "white",
              height: "180px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingLeft: "20px",
              paddingTop: "20px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  width: "300px",
                }}
              >
                <label>Email</label>
                <input
                  value={email}
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    marginTop: "15px",
                    backgroundColor: "white",
                    border: "none",
                    borderBottom: "2px solid lightgrey",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  marginTop: "30px",
                  width: "300px",
                }}
              >
                <label>Telefone</label>
                <input
                  value={telephone}
                  type="tel"
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder="+351"
                  style={{
                    marginTop: "15px",
                    backgroundColor: "white",
                    border: "none",
                    borderBottom: "2px solid lightgrey",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                marginLeft: "50px",
                width: "300px",
              }}
            >
              <label>Palavra-passe</label>
              <input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Palavra-passe"
                style={{
                  marginTop: "15px",
                  backgroundColor: "white",
                  border: "none",
                  borderBottom: "2px solid lightgrey",
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: "50px",
              backgroundColor: "lightgrey",
            }}
          >
            <h3 style={{ paddingLeft: "20px" }}>Contacto</h3>
            <h3
              style={{ paddingRight: "20px", fontSize: "1.5rem" }}
              onClick={() => setContact(true)}
            >
              +
            </h3>
          </div>
        </>
      )}
      <div style={{ textAlign: "right", marginTop: "30px" }}>
        <button
          style={{
            width: "200px",
            marginRight: "20px",
            backgroundColor: "white",
            border: "1px solid grey",
            borderRadius: "30px",
            padding: "10px 0",
          }}
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button
          style={{
            width: "200px",
            border: "none",
            backgroundColor: "lightblue",
            borderRadius: "30px",
            padding: "10px 0",
            color: "white",
          }}
          onClick={handleSubmit}
        >
          GUARDAR
        </button>
      </div>
    </form>
  );
};
