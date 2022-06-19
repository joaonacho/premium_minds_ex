import React, { useState } from "react";

export const UserType = () => {
  // Display/Hide form containers
  const [checkBoxes, setCheckBoxes] = useState(false);
  const [contact, setContact] = useState(false);
  // Grabs ckecked values from checkboxes
  const [pmChecked, setpmChecked] = useState(false);
  const [devChecked, setdevChecked] = useState(false);
  const [archChecked, setarchChecked] = useState(false);
  const [userinfo, setUserInfo] = useState({
    userType: [],
  });
  // Grabs input values from contacts
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
    setUserInfo({ userType: [] });
    setpmChecked(false);
    setdevChecked(false);
    setarchChecked(false);
    setEmail("");
    setPassword("");
    setTelephone("");
  };

  //Cancel form
  const handleCancel = (e) => {
    e.preventDefault();
    setUserInfo({ userType: [] });
    setpmChecked(false);
    setdevChecked(false);
    setarchChecked(false);
    setEmail("");
    setPassword("");
    setTelephone("");
  };

  return (
    <form className="form-container">
      <div className="form-header">
        <h3 className="form-header-left">Tipo de utilizador</h3>
        <h3
          className="form-header-right"
          onClick={() => setCheckBoxes(!checkBoxes)}
        >
          {checkBoxes ? "-" : "+"}
        </h3>
      </div>

      {checkBoxes && (
        <div
          className="input-container"
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              value="project-manager"
              name="userType"
              onChange={(e) => {
                handleChange(e);
                setpmChecked(!pmChecked);
              }}
              checked={pmChecked}
            />
            <label className={pmChecked ? "input-label" : ""}>
              Project Manager
            </label>
          </div>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              value="developer"
              name="userType"
              onChange={(e) => {
                handleChange(e);
                setdevChecked(!devChecked);
              }}
              checked={devChecked}
            />
            <label className={devChecked ? "input-label" : ""}>Developer</label>
          </div>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              value="architect"
              name="userType"
              onChange={(e) => {
                handleChange(e);
                setarchChecked(!archChecked);
              }}
              checked={archChecked}
            />
            <label className={archChecked ? "input-label" : ""}>
              Architect
            </label>
          </div>
        </div>
      )}

      <div className="form-header">
        <h3 className="form-header-left">Contacto</h3>
        <h3 className="form-header-right" onClick={() => setContact(!contact)}>
          {contact ? "-" : "+"}
        </h3>
      </div>

      {contact && (
        <div
          className="input-container"
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="input-wrapper">
              <label className="input-label">Email</label>
              <input
                value={email}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>

            <div
              className="input-wrapper"
              style={{
                marginTop: "30px",
              }}
            >
              <label className="input-label">Telefone</label>
              <input
                value={telephone}
                type="tel"
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="+351"
                className="form-input"
              />
            </div>
          </div>

          <div
            className="input-wrapper"
            style={{
              marginLeft: "50px",
            }}
          >
            <label className="input-label">Palavra-passe</label>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Palavra-passe"
              className="form-input"
            />
          </div>
        </div>
      )}
      <div className="btn-wrapper">
        <button className="btn-cancel" onClick={handleCancel}>
          Cancelar
        </button>
        <button className="btn-save" onClick={handleSubmit}>
          GUARDAR
        </button>
      </div>
    </form>
  );
};
