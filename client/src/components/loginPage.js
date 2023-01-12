import React, { useState } from "react";
import { useNavigate } from "react-router";
import { GoogleLogin } from "react-google-login";

const clientId =
  "481177281196-328pt1uq43p4ijtffn7rlc78mj4o3r2q.apps.googleusercontent.com";

export default function LoginPage() {
  const [form, setForm] = useState({
    username: "",
    position: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm(prev => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    navigate("/");
  }

  return (
    <div>
      <GoogleLogin clientId={clientId} />

      {/* <h3>Login</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={e => updateForm({ username: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Password</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            onChange={e => updateForm({ position: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="login" className="btn btn-primary" />
        </div>
      </form> */}
    </div>
  );
}
