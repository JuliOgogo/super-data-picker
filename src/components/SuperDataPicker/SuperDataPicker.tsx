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
            selectsStart
            dateFormat={'dd-MM-yyyy'}
            placeholderText={'Select start date'}

            startDate={startDate}
            endDate={endDate}

            selected={startDate}
            onChange={(date) => onStartChangeHandler(date)}/>

        <ReactDatePicker
            selectsEnd
            dateFormat={'dd-MM-yyyy'}
            placeholderText={'Select end date'}

            startDate={startDate}
            endDate={endDate}

            selected={endDate}
            onChange={(date) => onEndChangeHandler(date)}
            minDate={startDate}/>
    </div>
}