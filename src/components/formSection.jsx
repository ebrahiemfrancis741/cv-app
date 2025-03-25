import FormField from "./formField";

export default function FormSection({ sectionTitle, fieldInfoList, onChange }) {
  return (
    <fieldset>
      <legend>{sectionTitle}</legend>
      {fieldInfoList.map((fieldInfo) => {
        return (
          <FormField
            key={fieldInfo.name}
            fieldInfo={fieldInfo}
            onChange={onChange}
          ></FormField>
        );
      })}
    </fieldset>
  );
}
