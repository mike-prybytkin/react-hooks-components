export interface DateInputProps {
  defaultValue: string;
  labelType: string;
  minDate: string;
  maxDate: string;
  inputDateRef: React.LegacyRef<HTMLInputElement> | undefined;
}
