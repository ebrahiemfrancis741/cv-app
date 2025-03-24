import FormField from "./formField";

export default function FormSection({ sectionTitle, fieldInfoList }) {
  return (
    <fieldset>
      <legend>{sectionTitle}</legend>
      {fieldInfoList.map((fieldInfo) => {
        return <FormField fieldInfo={fieldInfo}></FormField>;
      })}
    </fieldset>
  );
}
