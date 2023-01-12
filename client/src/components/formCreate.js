import React from "react";
import { useForm } from "react-hook-form";

export default function FormOne() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class={`form-control col-form-label-lg`}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
    // <form role="form" onSubmit={handleSubmit(FormData)}>
    //   <div class="form-group row" className="form-group">
    //     <h3 class="text-center">HT INTAKE FORM</h3>
    //     <input
    //       type="number"
    //       className="form-control"
    //       placeholder="CRG #:"
    //       {...register("CRG #:", { min: 1 })}
    //     />
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="Client Name:"
    //       {...register("Client Name:", { min: -47 })}
    //     />
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="Intake Date:"
    //       {...register("Intake Date:", { min: 1 })}
    //     />
    //   </div>

    //   <div class="form-check">
    //     <input
    //       class="form-check-input"
    //       type="checkbox"
    //       value="Adult"
    //       id="flexCheckDefault"
    //     />
    //     <label class="form-check-label" for="flexCheckDefault">
    //       Adult
    //     </label>
    //   </div>
    //   <div class="form-check">
    //     <input
    //       class="form-check-input"
    //       type="checkbox"
    //       value="Youth"
    //       id="flexCheckDefault"
    //     />
    //     <label class="form-check-label" for="flexCheckDefault">
    //       Youth
    //     </label>
    //   </div>
    //   <div class="form-group row">
    //     <input type="datetime" placeholder="DOB:" {...register("DOB:", {})} />
    //     <input type="number" placeholder="Age" {...register("Age", {})} />
    //     <input
    //       type="text"
    //       placeholder="TRC Staff:"
    //       {...register("TRC Staff:", {})}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Contacts to Date:"
    //       {...register("Contacts to Date:", {})}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Referred By:"
    //       {...register("Referred By:", {})}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Referred contact Info:"
    //       {...register("Referred contact Info:", {})}
    //     />
    //   </div>
    //   <div>
    //     <h3 class="text-center">VICTIM INFORMATION:</h3>
    //     <div class="form-group row">
    //       <input
    //         type="text"
    //         placeholder="Address:"
    //         {...register("Address:", {})}
    //       />
    //       <input type="text" placeholder="City:" {...register("City:", {})} />
    //       <input type="text" placeholder="State:" {...register("State:", {})} />
    //       <input type="number" placeholder="ZIP" {...register("ZIP", {})} />
    //       <input
    //         type="number"
    //         placeholder="Phone #:"
    //         {...register("Phone #:", {})}
    //       />
    //     </div>
    //   </div>
    //   <div>
    //     <h3 class="text-center">DEMOGRAPHIC:</h3>
    //     <div>
    //       Victim Type:
    //       <text>Direct</text>
    //       <input {...register("Victim Type:")} type="radio" value="Direct" />
    //       <text>Derivative</text>
    //       <input
    //         {...register("Victim Type:")}
    //         type="radio"
    //         value="Derivative"
    //       />
    //     </div>
    //     <div>
    //       Gender:
    //       <text>M</text>
    //       <input {...register("Gender:")} type="radio" value="M" />
    //       <text>F</text>
    //       <input {...register("Gender:")} type="radio" value=" F" />
    //     </div>

    //     <input
    //       type="text"
    //       placeholder="Ethnicity:"
    //       {...register("Ethnicity:", {})}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Preferred Language/Written:"
    //       {...register("Preferred Language/Written:", {})}
    //     />

    //     <select class="form-select" aria-label="Default select example">
    //       <option selected>Sexual Orientation:</option>
    //       <option value="1">Heterosexual</option>
    //       <option value="2">Gay/Lesbian</option>
    //       <option value="3">Bisexual</option>
    //       <option value="4">Unsure</option>
    //       <option value="5">Decline to states</option>
    //     </select>

    //     {/* <div>
    //       Sexual Orientation:
    //       <div class="form-group row">
    //         <text>Heterosexual</text>
    //         <input
    //           {...register("Sexual Orientation:")}
    //           type="radio"
    //           value="Heterosexual"
    //         />
    //         <text>Gay/Lesbian</text>
    //         <input
    //           {...register("Sexual Orientation:")}
    //           type="radio"
    //           value=" Gay/Lesbian"
    //         />
    //         <text>Bisexual</text>
    //         <input
    //           {...register("Sexual Orientation:")}
    //           type="radio"
    //           value=" Bisexual"
    //         />
    //         <text>Unsure</text>
    //         <input
    //           {...register("Sexual Orientation:")}
    //           type="radio"
    //           value=" Unsure"
    //         />
    //         <text>Decline to state</text>
    //         <input
    //           {...register("Sexual Orientation:")}
    //           type="radio"
    //           value=" Decline to state"
    //         />
    //         <text>Other</text>
    //         <input
    //           {...register("Sexual Orientation:")}
    //           type="radio"
    //           value=" Other"
    //         />
    //       </div>
    //     </div> */}

    //     <select class="form-select" aria-label="Default select example">
    //       <option selected> Highest Level Of Education:</option>
    //       <option value="1">Elementary</option>
    //       <option value="2">MS</option>
    //       <option value="3">Some HS</option>
    //       <option value="4">HS</option>
    //       <option value="5">Some College</option>
    //       <option value="6">Vocational</option>
    //       <option value="7">Bachelors</option>
    //       <option value="8">Masters</option>
    //       <option value="9">N/A</option>
    //     </select>

    //     {/* <div>
    //       Highest Level Of Education:
    //       <text>Elementary</text>
    //       <input
    //         {...register("Highest Level of Education:")}
    //         type="radio"
    //         value="Elementary"
    //       />
    //       <text>MS</text>
    //       <input
    //         {...register("Highest Level of Education:")}
    //         type="radio"
    //         value=" MS"
    //       />
    //       <text>Some HS</text>
    //       <input
    //         {...register("Highest Level of Education:")}
    //         type="radio"
    //         value=" Some HS"
    //       />
    //       <text>HS</text>
    //       <input
    //         {...register("Highest Level of Education:")}
    //         type="radio"
    //         value=" HS"
    //       />
    //       <text>Some College</text>
    //       <input
    //         {...register("Highest Level of Education:")}
    //         type="radio"
    //         value=" Some College"
    //       />
    //       <text>Vocational/AA</text>
    //       <input
    //         {...register("Highest Level of Education:")}
    //         type="radio"
    //         value=" Vocational/AA"
    //       />
    //       <text>Bachelors</text>
    //       <input
    //         {...register("Highest Level of Education:")}
    //         type="radio"
    //         value=" Bachhelor's"
    //       />
    //       <text>Masters</text>
    //       <input
    //         {...register("Highest Level of Education:")}
    //         type="radio"
    //         value=" Masters"
    //       />
    //       <text>N/A</text>
    //       <input
    //         {...register("Highest Level of Education:")}
    //         type="radio"
    //         value=" N/A"
    //       />
    //     </div> */}

    //     <div>
    //       Source Of Information: Self
    //       <input
    //         {...register("Source of Information:")}
    //         type="radio"
    //         value="Self"
    //       />
    //       Parent
    //       <input
    //         {...register("Source of Information:")}
    //         type="radio"
    //         value=" Parent"
    //       />
    //       Other
    //       <input
    //         {...register("Source of Information:")}
    //         type="radio"
    //         value=" Other"
    //       />
    //     </div>

    //     <select class="form-select" aria-label="Default select example">
    //       <option selected> Marital Status:</option>
    //       <option value="1">Married</option>
    //       <option value="2">Domestic Partner</option>
    //       <option value="3">Widowed</option>
    //       <option value="4">Separated</option>
    //       <option value="5">Other</option>
    //     </select>

    //     {/* <div>
    //       Marital Status: Single/Divorce
    //       <input
    //         {...register("Marital Status:")}
    //         type="radio"
    //         value="Single/Divorce"
    //       />
    //       Married:
    //       <input
    //         {...register("Marital Status:")}
    //         type="radio"
    //         value=" Married"
    //       />
    //       Domestic Partner:
    //       <input
    //         {...register("Marital Status:")}
    //         type="radio"
    //         value=" Domestic Partner"
    //       />
    //       Widowed:
    //       <input
    //         {...register("Marital Status:")}
    //         type="radio"
    //         value=" Widowed"
    //       />
    //       Separated:
    //       <input
    //         {...register("Marital Status:")}
    //         type="radio"
    //         value=" Separated"
    //       />
    //       Other:
    //       <input {...register("Marital Status:")} type="radio" value=" Other" />
    //     </div> */}
    //   </div>
    //   <div>
    //     Children: Yes
    //     <input {...register("Children")} type="radio" value="Yes" />
    //     No
    //     <input {...register("Children")} type="radio" value=" No" />
    //     <input
    //       type="number"
    //       placeholder="# Of Children"
    //       {...register("# Of Children", {})}
    //     />
    //   </div>

    //   <input
    //     {...register("Are they living with you?")}
    //     type="radio"
    //     value="Yes"
    //   />
    //   <input
    //     {...register("Are they living with you?")}
    //     type="radio"
    //     value=" No"
    //   />
    //   <input
    //     {...register("Are they living with you?")}
    //     type="radio"
    //     value=" Two Households"
    //   />

    //   <input {...register("Are kids in danger?")} type="radio" value="Yes" />
    //   <input {...register("Are kids in danger?")} type="radio" value=" No" />

    //   <input
    //     {...register("Who does the Child/Children Live With?")}
    //     type="radio"
    //     value="One Parent"
    //   />
    //   <input
    //     {...register("Who does the Child/Children Live With?")}
    //     type="radio"
    //     value=" Two Parents"
    //   />
    //   <input
    //     {...register("Who does the Child/Children Live With?")}
    //     type="radio"
    //     value=" Relative Caregiver"
    //   />
    //   <input
    //     {...register("Who does the Child/Children Live With?")}
    //     type="radio"
    //     value=" Foster Family"
    //   />
    //   <input
    //     {...register("Who does the Child/Children Live With?")}
    //     type="radio"
    //     value=" Group Home"
    //   />
    //   <input
    //     {...register("Who does the Child/Children Live With?")}
    //     type="radio"
    //     value=" Juvenile Detention Center"
    //   />
    //   <input
    //     {...register("Who does the Child/Children Live With?")}
    //     type="radio"
    //     value=" Homeless"
    //   />
    //   <input
    //     {...register("Who does the Child/Children Live With?")}
    //     type="radio"
    //     value=" Other"
    //   />

    //   <input {...register("Housing ")} type="radio" value="Stable" />
    //   <input {...register("Housing ")} type="radio" value=" Unstable" />
    //   <input {...register("Housing ")} type="radio" value=" Homeless" />
    //   <input {...register("Housing ")} type="radio" value=" Other" />

    //   <input
    //     {...register("History Of Victimization:")}
    //     type="radio"
    //     value="Yes"
    //   />
    //   <input
    //     {...register("History Of Victimization:")}
    //     type="radio"
    //     value=" No"
    //   />

    //   <input
    //     type="submit"
    //     value="submit intake form"
    //     className="btn btn-primary"
    //   />
    // </form>
  );
}
