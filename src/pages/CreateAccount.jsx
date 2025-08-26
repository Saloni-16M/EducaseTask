import React from "react";
import "./CreateAccount.css";

function CreateAccount() {
  return (
    <div className="mobile-screen">
      <div className="form-container">
        <h2>Create your PopX account</h2>

        <form>
          <div className="form-group">
            <label>
              Full Name<span>*</span>
            </label>
            <input type="text" placeholder="Marry Doe" required />
          </div>

          <div className="form-group">
            <label>
              Phone number<span>*</span>
            </label>
            <input type="text" placeholder="Marry Doe" required />
          </div>

          <div className="form-group">
            <label>
              Email address<span>*</span>
            </label>
            <input type="email" placeholder="Marry Doe" required />
          </div>

          <div className="form-group">
            <label>
              Password <span>*</span>
            </label>
            <input type="password" placeholder="Marry Doe" required />
          </div>

          <div className="form-group">
            <label>Company name</label>
            <input type="text" placeholder="Marry Doe" />
          </div>

          <div className="form-group">
            <label>
              Are you an Agency?<span>*</span>
            </label>
            <div className="radio-group">
              <label>
                <input type="radio" name="agency" value="yes" required /> Yes
              </label>
              <label>
                <input type="radio" name="agency" value="no" /> No
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
