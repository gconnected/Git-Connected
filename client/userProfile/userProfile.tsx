import React, { useState } from "react";

/**Setting type of state and its components.
 * Set to the same shape as the state.
 */
interface profileInfo {
  firstName: string;
  lastName: string;
  birthDate: string;
  city: string;
  state: string;
  country: string;
	company_name: string;
	// past_companies: array
  past_companies: string;
  job: string;
	years_exp: number;
	// techstack: array
  techstack: string;
	profile_pic: any;
}

/**Creating functional component in react.
 * This component uses profile as our state through react hooks
 */
const UserProfile: React.FC = () => {
  // React Hooks assigning signUpInfo as type to state
  const [profile, setProfile] = useState<profileInfo>({
    firstName: "",
    lastName: "",
    birthDate: "",
    city: "",
    state: "",
    country: "",
    company_name: "",
    past_companies: "",
    job: "",
    years_exp: 0,
    techstack: "",
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
    console.log("Profile successfully created");
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
            type="firstName"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            value={profile.firstName}
            onChange={handleChange}
          />
        </div>
        {/* Last Name */}
        <div className="form-group text-left">
          <input
            type="lastName"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            value={profile.lastName}
            onChange={handleChange}
          />
        </div>
        {/* Birth Date */}
        <div className="form-group text-left">
          <input
            type="birthDate"
            className="form-control"
            id="birthDate"
            placeholder="Birth Date"
            value={profile.birthDate}
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
        {/* Past Company */}
        <div className="form-group text-left">
          <input
            type="past_companies"
            className="form-control"
            id="past_companies"
            placeholder="Past Company"
            value={profile.past_companies}
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
        {/* Stack */}
        <div className="form-group text-left">
          <input
            type="techstack"
            className="form-control"
            id="techstack"
            placeholder="Stack"
            value={profile.techstack}
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
