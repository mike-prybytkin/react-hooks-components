export interface SwitcherProps {
  switcherType: string;
  optionOne: string;
  optionTwo: string;
  switcherRef: React.LegacyRef<HTMLInputElement> | undefined;
}
