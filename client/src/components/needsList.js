import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NeedsList() {
  const [form, setForm] = useState({
    basicNeeds: "",
    dietFoodLimitations: "",
    substanceAbuse: "",
    medicalConditions: "",
    pregnant: "",
    howFarAlong: "",
    pregnancyChallengesConcerns: "",
    dentalCare: "",
    therapyCounciling: "",
    assistanceRetrievingIdentificationDocuments: "",
    birthCertificatesOrDriversLicenses: "",
    Education: "",
    schooling: "",
    lifeSkills: "",
    jobsCareer: "",
  });

  async function onSubmit(e) {
    // data => console.log(data);
    e.preventDefault();
    console.log(form);
  }

  function updateForm(value) {
    return setForm(prev => {
      return { ...prev, ...value };
    });
  }

  return (
    <div>
      <h1>Needs Assessment</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Basic Needs</label>
          <input
            type="text"
            className="form-control"
            id="basicNeeds"
            value={form.basicNeeds}
            onChange={e => updateForm({ basicNeeds: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dietFoodLimitations">Diet Limitations</label>
          <input
            type="text"
            className="form-control"
            id="dietFoodLimitations"
            value={form.dietFoodLimitations}
            onChange={e => updateForm({ dietFoodLimitations: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="substanceAbuse">substanceAbuse</label>
          <input
            type="text"
            className="form-control"
            id="substanceAbuse"
            value={form.substanceAbuse}
            onChange={e => updateForm({ substanceAbuse: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="medicalConditions">medicalConditions</label>
          <input
            type="text"
            className="form-control"
            id="medicalConditions"
            value={form.medicalConditions}
            onChange={e => updateForm({ medicalConditions: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pregnant">pregnant</label>
          <input
            type="text"
            className="form-control"
            id="pregnant"
            value={form.pregnant}
            onChange={e => updateForm({ pregnant: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="howFarAlong">howFarAlong</label>
          <input
            type="text"
            className="form-control"
            id="howFarAlong"
            value={form.howFarAlong}
            onChange={e => updateForm({ howFarAlong: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pregnancyChallengesConcerns">
            pregnancyChallengesConcerns
          </label>
          <input
            type="text"
            className="form-control"
            id="pregnancyChallengesConcerns"
            value={form.pregnancyChallengesConcerns}
            onChange={e =>
              updateForm({ pregnancyChallengesConcerns: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="dentalCare">dentalCare</label>
          <input
            type="text"
            className="form-control"
            id="dentalCare"
            value={form.dentalCare}
            onChange={e => updateForm({ dentalCare: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="therapyCounciling">therapyCounciling</label>
          <input
            type="text"
            className="form-control"
            id="therapyCounciling"
            value={form.therapyCounciling}
            onChange={e => updateForm({ therapyCounciling: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="assistanceRetrievingIdentificationDocuments">
            assistanceRetrievingIdentificationDocuments
          </label>
          <input
            type="text"
            className="form-control"
            id="assistanceRetrievingIdentificationDocuments"
            value={form.assistanceRetrievingIdentificationDocuments}
            onChange={e =>
              updateForm({
                assistanceRetrievingIdentificationDocuments: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="birthCertificatesOrDriversLicenses">
            birthCertificatesOrDriversLicenses
          </label>
          <input
            type="text"
            className="form-control"
            id="birthCertificatesOrDriversLicenses"
            value={form.birthCertificatesOrDriversLicenses}
            onChange={e =>
              updateForm({ birthCertificatesOrDriversLicenses: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="Education">Education</label>
          <input
            type="text"
            className="form-control"
            id="Education"
            value={form.Education}
            onChange={e => updateForm({ Education: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="schooling">schooling</label>
          <input
            type="text"
            className="form-control"
            id="schooling"
            value={form.schooling}
            onChange={e => updateForm({ schooling: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lifeSkills">lifeSkills</label>
          <input
            type="text"
            className="form-control"
            id="lifeSkills"
            value={form.lifeSkills}
            onChange={e => updateForm({ lifeSkills: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobsCareer">jobsCareer</label>
          <input
            type="text"
            className="form-control"
            id="jobsCareer"
            value={form.jobsCareer}
            onChange={e => updateForm({ jobsCareer: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Service</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            onChange={e => updateForm({ position: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Needs List" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
