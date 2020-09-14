import React, { useState } from "react";
import axios from "axios";

/**Setting type of state and its components.
 * Set to the same shape as the state.
 */
interface profileInfo {
  firstname: string;
  lastname: string;
  birthdate: string;
  city: string;
  state: string;
  country: string;
  company_name: string;
  job: string;
  years_exp: number;
  profile_pic: any;
}

/**Creating functional component in react.
 * This component uses profile as our state through react hooks
 */
const UserProfile: React.FC = () => {
  // React Hooks assigning signUpInfo as type to state
  const [profile, setProfile] = useState<profileInfo>({
    firstname: "",
    lastname: "",
    birthdate: "",
    city: "",
    state: "",
    country: "",
    company_name: "",
    job: "",
    years_exp: 0,
    profile_pic: "",
  });

  /**
   * Function to handle event changes in text boxes.
   * @param e: needs to be declared with React.ChangeEvent type pointed at HTMLInputElement.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  /**
   * Function to handle mouse events for submitting the form.
   * @param event: TypeScript will not allow onClick events to be tied to the e parameter.
   * Specified with event and declared with React.MouseEvent type pointed at HTMLElement.
   */
  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // INSERT AXIOS REQUEST
    axios
      .post("/api/createUser", profile)
      .then(() => console.log("success!"))
      .catch((err) => console.error(err));
    // Setting form back to empty values
    setProfile({
      firstname: "",
      lastname: "",
      birthdate: "",
      city: "",
      state: "",
      country: "",
      company_name: "",
      job: "",
      years_exp: 0,
      profile_pic: "",
    });
  };

  return (
    <div className="container col-20 justify-item-center mt-5">
      <div className="row col-12 d-flex justify-content-center text-grey">
        <span className="h3">Create Profile</span>
      </div>
      <form>
        {/* First Name */}
        <div className="form-group text-left">
          <input
            type="firstname"
            className="form-control"
            id="firstname"
            placeholder="First Name"
            value={profile.firstname}
            onChange={handleChange}
          />
        </div>
        {/* Last Name */}
        <div className="form-group text-left">
          <input
            type="lastname"
            className="form-control"
            id="lastname"
            placeholder="Last Name"
            value={profile.lastname}
            onChange={handleChange}
          />
        </div>
        {/* Birth Date */}
        <div className="form-group text-left">
          <input
            type="birthdate"
            className="form-control"
            id="birthdate"
            placeholder="Month Day, Year"
            value={profile.birthdate}
            onChange={handleChange}
          />
        </div>
        {/* City */}
        <div className="form-group text-left">
          <input
            type="city"
            className="form-control"
            id="city"
            placeholder="City"
            value={profile.city}
            onChange={handleChange}
          />
        </div>
        {/* State */}
        <div className="form-group text-left">
          <input
            type="state"
            className="form-control"
            id="state"
            placeholder="State"
            value={profile.state}
            onChange={handleChange}
          />
        </div>
        {/* Country */}
        <div className="form-group text-left">
          <input
            type="country"
            className="form-control"
            id="country"
            placeholder="Country"
            value={profile.country}
            onChange={handleChange}
          />
        </div>
        {/* Company */}
        <div className="form-group text-left">
          <input
            type="company_name"
            className="form-control"
            id="company_name"
            placeholder="Company"
            value={profile.company_name}
            onChange={handleChange}
          />
        </div>
        {/* Job */}
        <div className="form-group text-left">
          <input
            type="job"
            className="form-control"
            id="job"
            placeholder="Job"
            value={profile.job}
            onChange={handleChange}
          />
        </div>
        {/* Years Experience */}
        <div className="form-group text-left">
          <input
            type="years_exp"
            className="form-control"
            id="years_exp"
            placeholder="Years Experience"
            value={profile.years_exp}
            onChange={handleChange}
          />
        </div>
        {/* Profile Picture */}
        <div className="form-group text-left">
          <input
            type="profile_pic"
            className="form-control"
            id="profile_pic"
            placeholder="Profile Picture"
            value={profile.profile_pic}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn mb-5 btn-success"
          onClick={handleSubmit}
        >
          Git Connected!
        </button>
      </form>
      {console.log(profile)}
    </div>
  );
};

export default UserProfile;
