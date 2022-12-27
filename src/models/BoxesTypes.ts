export interface BoxesTypes {
  id: number;
  label: string;
  checked: boolean;
  backgroundColor: string;
  content: string;
}

export interface CheckboxTypes {
  checkboxes: BoxesTypes[];
}
