import React, {useState} from 'react';
import ReactDatePicker from 'react-datepicker';
import {setToLocalStorage} from '../../common/localStorage';

export function SuperDataPicker() {

    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    const onStartChangeHandler = (date: Date | null) => {
        if (date) {
            setStartDate(date)
            setToLocalStorage('startDate', date)
        }
    }

    const onEndChangeHandler = (date: Date | null) => {
        if (date) {
            setEndDate(date)
            setToLocalStorage('endDate', date)
        }
    }

    const onClickHandler = () => {
        setStartDate(undefined)
        setEndDate(undefined)
    }

    return <div>

        <Settings isSettingsOpen={isSettingsOpen}/>

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

        <button onClick={onClickHandler}>Refresh</button>
    </div>
}

type SettingsPropsType = {
    isSettingsOpen: boolean
}

export const Settings: React.FC<SettingsPropsType> = ({isSettingsOpen}) => {
    return <div>
        Settings
    </div>
}