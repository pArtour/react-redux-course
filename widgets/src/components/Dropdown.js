import React, {useState, useEffect, useRef} from "react";

const Dropdown = ({options, selected, onSelectedChanged}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
        const onBodyClick = event => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener("click", onBodyClick, {capture: true});
        return () => {
            document.body.removeEventListener("click", onBodyClick);
        }
    }, []);

    const renderedOptions = options.map(option => {
        if (option.value === selected.value) {
            return null;
        } else {
            return (
                <div
                    key={option.value}
                    onClick={() => onSelectedChanged(option)}
                    className="item"
                >
                    {option.label}
                </div>
            );
        }
    })
    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label htmlFor="" className="label">Select a color</label>
                <div
                    onClick={() => setOpen(!open)}
                     className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dropdown;