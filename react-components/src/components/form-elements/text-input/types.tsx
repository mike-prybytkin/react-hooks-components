export interface TextInputProps {
  placeholderText: string;
  labelType: string;
  minNameLength: string;
  maxNameLength: string;
  required: boolean;
  inputNameRef: React.LegacyRef<HTMLInputElement> | undefined;
}
