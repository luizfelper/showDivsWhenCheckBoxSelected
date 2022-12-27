import { BoxesTypes, CheckboxTypes } from "./models/BoxesTypes";
import "./App.css";
import { useState } from "react";

function App() {
  const [checksBoxes, setCheckBoxes] = useState<CheckboxTypes>({
    checkboxes: [
      {
        id: 1,
        label: "Box RED",
        checked: false,
        backgroundColor: "red",
        content: "Conteúdo do BOX RED",
      },
      {
        id: 2,
        label: "box BLUE",
        checked: false,
        backgroundColor: "blue",
        content: "Conteúdo do BOX BLUE",
      },
    ],
  });

  const toggleCheckBox = (toggledIndex: any) => {
    setCheckBoxes((prevState: CheckboxTypes) => ({
      checkboxes: prevState.checkboxes.map(
        (checkbox: BoxesTypes, index: number) => {
          if (index === toggledIndex) {
            return {
              ...checkbox,
              checked: !checkbox.checked,
            };
          } else {
            return {
              ...checkbox,
            };
          }
        }
      ),
    }));
  };

  return (
    <div className="App">
      {checksBoxes.checkboxes.map((checkbox: BoxesTypes, index: number) => (
        <>
          <div className="Labels">
            <label>{checkbox.label}</label>
            <input
              type="checkbox"
              checked={checkbox.checked}
              onClick={() => toggleCheckBox(index)}
            />
          </div>
        </>
      ))}
      <div className="Boxes">
        {checksBoxes.checkboxes.map(
          (checkbox: any) =>
            checkbox.checked && (
              <div
                style={{
                  width: 200,
                  height: 200,
                  backgroundColor: `${checkbox.backgroundColor}`,
                }}
              >
                {checkbox.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default App;
