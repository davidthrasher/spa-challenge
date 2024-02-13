import './label-with-dropdown.css';
export function LabelWithDropdown({ label }: { label: string }) {
  return (
    <div className="label-with-dropdown">
      <label>{label}</label>
      <select name="select" id="select">
        <option value="">Select Client</option>
      </select>
    </div>
  );
}
