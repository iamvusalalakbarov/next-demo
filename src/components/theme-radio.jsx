export default function ThemeRadio({ value, currentTheme, onRadioChange }) {
  return (
    <input
      type="radio"
      name="theme"
      value={value}
      hidden
      checked={currentTheme === value}
      onChange={onRadioChange}
    />
  );
}
