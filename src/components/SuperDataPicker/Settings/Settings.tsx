import React from 'react';
import s from './Settings.module.css'
import clsx from 'clsx';
import {useSettings} from '../../../common/hooks/useSettings';

interface SettingsPropsType {
    isSettingsOpen: boolean
    setIsSettingsOpen: (value: boolean) => void
    startDateInRange: Date | null | undefined
    endDateInRange: Date | null | undefined
    setStartDate: (data: Date | null) => void
    setEndDate: (data: any) => void
}

export const Settings: React.FC<SettingsPropsType> = ({
                                                          isSettingsOpen,
                                                          setIsSettingsOpen,
                                                          setStartDate,
                                                          setEndDate,
                                                          startDateInRange, endDateInRange
                                                      }) => {

    const startDateInRangeStr = JSON.stringify(startDateInRange)?.slice(1, 11)
    const endDateInRangeStr = JSON.stringify(endDateInRange)?.slice(1, 11)

    const {
        todayOnClickHandler,
        thisWeekOnClickHandler,
        thisMonthOnClickHandler,
        recentlyOnClickHandler,
        onClickHandler
    } = useSettings({setStartDate, setEndDate, setIsSettingsOpen, startDateInRange, endDateInRange})

    const settingsClassName = clsx(s.settings, isSettingsOpen && s.open)

    return <div className={settingsClassName}>

        <div className={s.commonly}>
            <div>Commonly used:</div>
            <div onClick={todayOnClickHandler}>Today</div>
            <div onClick={thisWeekOnClickHandler}>This week</div>
            <div onClick={thisMonthOnClickHandler}>This month</div>
        </div>

        {startDateInRangeStr && endDateInRangeStr ? <div onClick={recentlyOnClickHandler}>
            <div>Recently used date ranges:</div>
            <div>{startDateInRangeStr} - {endDateInRangeStr}</div>
        </div> : null}

        <button onClick={onClickHandler}>Refresh</button>

    </div>
}