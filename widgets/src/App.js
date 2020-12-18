import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";


const items = [
    {
        title: 'What is React?',
        content: 'React is front end JavaScript framework'
    },
    {
        title: 'Why use React',
        content: 'React is a favourite JS library among developers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];
const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "The Color Blue",
        value: "blue"
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <h1>Widget App</h1>
            <button type="button" onClick={() => setShowDropdown(!showDropdown)}>Dropdown</button>
            {/*<Search />*/}
            {showDropdown ?
                <Dropdown
                    options={options}
                    selected={selected}
                    onSelectedChanged={setSelected}
                />
                : null
            }
        </div>
    );
}

