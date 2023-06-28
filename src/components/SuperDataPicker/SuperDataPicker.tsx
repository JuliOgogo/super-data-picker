import React, {useState} from 'react';
import ReactDatePicker from 'react-datepicker';

export function SuperDataPicker() {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const onStartChangeHandler = (date: Date | null) => {
        if (date) setStartDate(date)
    }

    const onEndChangeHandler = (date: Date | null) => {
        if (date) setEndDate(date)
    }

    return <div>
        <ReactDatePicker
            placeholderText={'Select start date'}
            selected={startDate}
            onChange={(date) => onStartChangeHandler(date)}/>

        <ReactDatePicker
            placeholderText={'Select end date'}
            selected={endDate}
            onChange={(date) => onEndChangeHandler(date)}/>
    </div>
}