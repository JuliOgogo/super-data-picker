import React from 'react';
import s from './Settings.module.css'

type SettingsPropsType = {
    isSettingsOpen: boolean
    setIsSettingsOpen: (value: boolean) => void
    startDate: Date | null | undefined
    endDate: Date | null | undefined
    startDateInRange: Date | null | undefined
    endDateInRange: Date | null | undefined
    setStartDate: (data: Date | null) => void
    setEndDate: (data: any) => void
}

export const Settings: React.FC<SettingsPropsType> = ({
                                                          isSettingsOpen,
                                                          setIsSettingsOpen,
                                                          startDate,
                                                          setStartDate,
                                                          endDate,
                                                          setEndDate,
                                                          startDateInRange, endDateInRange
                                                      }) => {

    const startDateInRangeStr = JSON.stringify(startDateInRange)
    const endDateInRangeStr = JSON.stringify(endDateInRange)

    const todayOnClickHandler = () => {
        setStartDate(new Date())
        setEndDate(null)
        setIsSettingsOpen(false)
    }

    const thisWeekOnClickHandler = () => {
        setStartDate(new Date())
        setEndDate(new Date(new Date().setDate(new Date().getDate() + 7)))
        setIsSettingsOpen(false)
    }

    const thisMonthOnClickHandler = () => {
        setStartDate(new Date())
        setEndDate(new Date(new Date().setDate(new Date().getDate() + 30)))
        setIsSettingsOpen(false)
    }

    const recentlyOnClickHandler = () => {
        if (startDateInRange) setStartDate(new Date(startDateInRange))
        if (endDateInRange) setEndDate(new Date(endDateInRange))
        setIsSettingsOpen(false)
    }

    const settingsClassName = s.settings
        + (isSettingsOpen ? ' ' + s.open : '')

    return <div className={settingsClassName}>

        <div onClick={todayOnClickHandler}>Today</div>
        <div onClick={thisWeekOnClickHandler}>This week</div>
        <div onClick={thisMonthOnClickHandler}>This month</div>

        {startDateInRangeStr && endDateInRangeStr ? <div onClick={recentlyOnClickHandler}>
            <span>Recently used date ranges</span>
            <div>{startDateInRangeStr} - {endDateInRangeStr}</div>
        </div> : null}

    </div>
}