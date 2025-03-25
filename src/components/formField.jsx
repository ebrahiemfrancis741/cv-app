export default function FormField({ fieldInfo, onChange }) {
  return (
    <>
      <label>
        {fieldInfo.label + " "}
        <input name={fieldInfo.name} type={fieldInfo.type} value={fieldInfo.value} onChange={onChange}></input>
      </label>
    </>
  );
}
