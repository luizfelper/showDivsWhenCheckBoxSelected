export interface BoxesTypes {
  id: number;
  label: string;
  checked: boolean;
  backgroundColor: string;
}

export interface CheckboxTypes {
  checkboxes: BoxesTypes[];
}
