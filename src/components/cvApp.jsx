import { useState } from "react";
import FormSection from "./formSection";

export default function CvApp() {
  let [isEditing, setIsEditing] = useState(true);
  let [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    workedFrom: "",
    workedUntil: "",
  });

  let onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <main>
        <header>
          <h1>CV app</h1>
        </header>

        {isEditing && (
          <form>
            <FormSection
              sectionTitle={"General Information"}
              onChange={onChangeHandler}
              fieldInfoList={[
                {
                  label: "Full name",
                  type: "text",
                  value: formData.fullName,
                  name: "fullName",
                },
                {
                  label: "Email",
                  type: "email",
                  value: formData.email,
                  name: "email",
                },
                {
                  label: "Phone number",
                  type: "text",
                  value: formData.number,
                  name: "number",
                },
              ]}
            ></FormSection>
            <FormSection
              sectionTitle={"Educational Experience"}
              onChange={onChangeHandler}
              fieldInfoList={[
                {
                  label: "School name",
                  type: "text",
                  value: formData.schoolName,
                  name: "schoolName",
                },
                {
                  label: "Title of study",
                  type: "text",
                  value: formData.titleOfStudy,
                  name: "titleOfStudy",
                },
                {
                  label: "Date of Study",
                  type: "date",
                  value: formData.dateOfStudy,
                  name: "dateOfStudy",
                },
              ]}
            ></FormSection>
            <FormSection
              sectionTitle={"Practical Experience"}
              onChange={onChangeHandler}
              fieldInfoList={[
                {
                  label: "Company name",
                  type: "text",
                  value: formData.companyName,
                  name: "companyName",
                },
                {
                  label: "Position title",
                  type: "text",
                  value: formData.positionTitle,
                  name: "positionTitle",
                },
                {
                  label: "Main responsibility",
                  type: "text",
                  value: formData.responsibilities,
                  name: "responsibilities",
                },
                {
                  label: "Worked from",
                  type: "date",
                  value: formData.workedFrom,
                  name: "workedFrom",
                },
                {
                  label: "Worked until",
                  type: "date",
                  value: formData.workedUntil,
                  name: "workedUntil",
                },
              ]}
            ></FormSection>
          </form>
        )}
        {!isEditing && <></>}
        <div>
          {isEditing ? (
            <>
              <button disabled>Editing</button>
              <button onClick={() => {setIsEditing(false)}}>Submit</button>
            </>
          ) : (
            <>
              <button onClick={() => {setIsEditing(true)}}>Editing</button>
              <button disabled>Submit</button>
            </>
          )}
        </div>
      </main>
    </>
  );
}
