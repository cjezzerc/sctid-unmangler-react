import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import {
  simple_data,
  master_set_with_commentary,
  contact_dermatitis,
} from "../example_data/example_data";

const datasets = {
  dataset1: { name: 'Simple data', data: simple_data },
  dataset2: { name: 'Long data', data: contact_dermatitis },
  dataset3: { name: 'Master set with commentary', data: master_set_with_commentary },
};

export function ExampleDatasetSelector({setEnteredData}) {
  const [selectedKey, setSelectedKey] = useState(null);

  const handleSelect = (key) => {
    setSelectedKey(key);
    setEnteredData(datasets[key].data)
  };

  const selectedDataset = datasets[selectedKey];

  return (
    <div>
      <DropdownButton
        id="dataset-dropdown"
        // title={selectedDataset ? `Examples: ${selectedDataset.name}` : "Select example dataset"}
        title="Example data sets:"
        onSelect={handleSelect}
        variant="secondary"
        style={{padding:"0px", margin:"10px"}}
      >
        {Object.entries(datasets).map(([key, value]) => (
          <Dropdown.Item key={key} eventKey={key}>
            {value.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}