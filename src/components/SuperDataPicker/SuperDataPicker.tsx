import React, {useState} from 'react';
import ReactDatePicker from 'react-datepicker';
import {Settings} from './Settings/Settings';
import s from './SuperDataPicker.module.css'

export function SuperDataPicker() {

    const [startDate, setStartDate] = useState<Date | null>()
    const [endDate, setEndDate] = useState<Date | null>()
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    const [startDateInRange, setStartDateInRange] = useState<Date | null>()
    const [endDateInRange, setEndDateInRange] = useState<Date | null>()

    const onStartChangeHandler = (date: Date | null) => {
        if (date) {
            setStartDate(date)
        }
    }

    const onEndChangeHandler = (date: Date | null) => {
        if (date) {
            setEndDate(date)
        }
    }

    const uploadOnClickHandler = () => {
        setStartDateInRange(startDate)
        setEndDateInRange(endDate)
    }

    const onClickHandler = () => {
        setStartDate(null)
        setEndDate(null)
    }

    return <div className={s.sdp}>

        <button onClick={() => setIsSettingsOpen(!isSettingsOpen)}>Settings</button>

        <Settings isSettingsOpen={isSettingsOpen}
                  setIsSettingsOpen={setIsSettingsOpen}
                  startDate={startDate}
                  endDate={endDate}
                  startDateInRange={startDateInRange}
                  endDateInRange={endDateInRange}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}/>

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

        <button onClick={uploadOnClickHandler}>Upload</button>
        <button onClick={onClickHandler}>Refresh</button>
    </div>
}