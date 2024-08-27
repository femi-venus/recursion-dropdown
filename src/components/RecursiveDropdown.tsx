import React, { useState } from "react";
import "./recursive-dropdown.css";
import _ from "lodash";

interface Data {
  id: number;
  label: string;
  children?: Data[];
}

interface DropdownProps {
  data: Data[];
}

function Dropdown(props: DropdownProps) {
  const { data } = props;
  const [activeOption, setActiveOption] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveOption(activeOption === id ? null : id);
  };

  return (
    <div>
      {_.map(data, (d) => (
        <div className="list">
          <div className="list-items" onClick={() => handleClick(d.id)}>
            {d.label}
          </div>
          {activeOption === d.id && d.children && (
            <div className="list-children">
              <Dropdown key={d.id} data={d.children} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
