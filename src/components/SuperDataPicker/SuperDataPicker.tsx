import React from 'react';
import ReactDatePicker from 'react-datepicker';
import {Settings} from './Settings/Settings';
import s from './SuperDataPicker.module.css'
import {useSuperDataPicker} from '../../common/hooks/useSuperDataPicker';
import icon from '../../assets/images/icon-menu.png'

export function SuperDataPicker() {

    const {
        startDate, endDate, isSettingsOpen, startDateInRange, endDateInRange,
        setStartDate, setEndDate, setIsSettingsOpen,
        onStartChangeHandler, onEndChangeHandler, uploadOnClickHandler
    } = useSuperDataPicker()

    return <div className={s.sdp}>

        <img src={icon} onClick={() => setIsSettingsOpen(!isSettingsOpen)} alt={'settings'}/>

        <Settings isSettingsOpen={isSettingsOpen}
                  setIsSettingsOpen={setIsSettingsOpen}
                  startDateInRange={startDateInRange}
                  endDateInRange={endDateInRange}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}/>

        <div className={s.dataPickers}>
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

        <button onClick={uploadOnClickHandler}>Upload</button>

    </div>
}