import React, {useState} from "react";
import ReactDatePicker from "react-datepicker";

export function SuperDataPicker() {

    const [data, setData] = useState(new Date())

    const onChangeHandler = (date: Date | null) => {
        if (date) setData(date)
    }

    return <div>
        <ReactDatePicker
            placeholderText={'Select start date'}
            selected={data}
            onChange={(date) => onChangeHandler(date)}/>
    </div>
}