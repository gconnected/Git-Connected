import React, { useState } from "react";
import axios from "axios";

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
    axios
      .post("/createUser", profile)
      .then(() =>
        alert(
          "You are now connected!! \r\n You can now search for connections!!"
        )
      )
      .then(() => console.log("success!"))
      .catch((err) => console.error(err));
    // Setting form back to empty values
    setProfile({
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
  };

  return (
    <div id="createProfileContainer">
			<div id="createProfileHeader">
			<span id="createProfileIntro">Tell us a little more about yourself...</span>
			</div>
      <div>
			<form id="createProfileForm">
						{/* First Name */}
							<input
								type="firstName"
								id="firstName"
								placeholder="First Name"
								value={profile.firstName}
								onChange={handleChange}
							/>
						{/* Last Name */}
							<input
								type="lastName"
								id="lastName"
								placeholder="Last Name"
								value={profile.lastName}
								onChange={handleChange}
							/>
						{/* Birth Date */}
							<input
								type="birthDate"
								id="birthDate"
								placeholder="Birth Date"
								value={profile.birthDate}
								onChange={handleChange}
							/>
						{/* City */}
							<input
								type="city"
								id="city"
								placeholder="City"
								value={profile.city}
								onChange={handleChange}
							/>
						{/* State */}
							<input
								type="state"
								className="form-control"
								id="state"
								placeholder="State"
								value={profile.state}
								onChange={handleChange}
							/>
						{/* Country */}
							<input
								type="country"
								id="country"
								placeholder="Country"
								value={profile.country}
								onChange={handleChange}
							/>
						{/* Company */}
							<input
								type="company_name"
								id="company_name"
								placeholder="Company"
								value={profile.company_name}
								onChange={handleChange}
							/>
						{/* Past Company */}
							<input
								type="past_companies"
								id="past_companies"
								placeholder="Past Company"
								value={profile.past_companies}
								onChange={handleChange}
							/>
						{/* Job */}
							<input
								type="job"
								id="job"
								placeholder="Job"
								value={profile.job}
								onChange={handleChange}
							/>
						{/* Years Experience */}
							<input
								type="years_exp"
								id="years_exp"
								placeholder="Years Experience"
								value={profile.years_exp}
								onChange={handleChange}
							/>
						{/* Stack */}
							<input
								type="techstack"
								id="techstack"
								placeholder="Stack"
								value={profile.techstack}
								onChange={handleChange}
							/>
						{/* Profile Picture */}
							<input
								type="profile_pic"
								id="profile_pic"
								placeholder="Profile Picture"
								value={profile.profile_pic}
								onChange={handleChange}
							/>
				</form>
			</div>
			<div id="createButtonContainer">
				<button
					type="submit"
					onClick={handleSubmit}
					id="createButton"
					form="createProfileForm"
				>
					Git Connected!
				</button>
			</div>
				{console.log(profile)}
			</div>
  );
};

export default UserProfile;
