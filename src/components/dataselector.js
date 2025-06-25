import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import {
  simple_data,
  messy_data,
  contact_dermatitis,
} from "../example_data/example_data";

const datasets = {
  dataset1: { name: 'Simple data', data: simple_data },
  dataset2: { name: 'Messy data', data: messy_data },
  dataset3: { name: 'Long data', data: contact_dermatitis },
};

export function DatasetSelector({setEnteredData}) {
  const [selectedKey, setSelectedKey] = useState('dataset1');

  const handleSelect = (key) => {
    setSelectedKey(key);
    setEnteredData(datasets[key].data)
  };

  const selectedDataset = datasets[selectedKey];

  return (
    <div>
      <DropdownButton
        id="dataset-dropdown"
        title={`Examples: ${selectedDataset.name}`}
        onSelect={handleSelect}
        variant="primary"
      >
        {Object.entries(datasets).map(([key, value]) => (
          <Dropdown.Item key={key} eventKey={key}>
            {value.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>

      {/* <div className="mt-3">
        <h5>Selected: {selectedDataset.name}</h5>
        <pre>{JSON.stringify(selectedDataset.data, null, 2)}</pre>
      </div> */}
    </div>
  );
}