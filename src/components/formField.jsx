export default function FormField({ fieldInfo }) {
  return (
    <>
      <label>
        {fieldInfo.name + " "}
        <input type={fieldInfo.type}></input>
      </label>
    </>
  );
}
