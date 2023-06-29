import React from 'react';
import s from './Settings.module.css'

type SettingsPropsType = {
    isSettingsOpen: boolean
    setIsSettingsOpen: (value: boolean) => void
    startDate: Date | null | undefined
    endDate: Date | null | undefined
    setStartDate: (data: Date | null) => void
    setEndDate: (data: any) => void
}

export const Settings: React.FC<SettingsPropsType> = ({
                                                          isSettingsOpen,
                                                          setIsSettingsOpen,
                                                          startDate,
                                                          setStartDate,
                                                          endDate,
                                                          setEndDate
                                                      }) => {

    const startDateStr = startDate?.toDateString()
    const endDateStr = endDate?.toDateString()

    const todayOnClickHandler = () => {
        setStartDate(new Date())
        setEndDate(null)
        setIsSettingsOpen(false)
    }

    const thisWeekOnClickHandler = () => {
        setStartDate(new Date())
        setEndDate(new Date().setDate(new Date().getDate() + 7))
        setIsSettingsOpen(false)
    }

    const thisMonthOnClickHandler = () => {
        setStartDate(new Date())
        setEndDate(new Date().setDate(new Date().getDate() + 30))
        setIsSettingsOpen(false)
    }

    const recentlyOnClickHandler = () => {
        if (startDate) setStartDate(new Date(startDate))
        if (endDate) setEndDate(new Date(endDate))
        setIsSettingsOpen(false)
    }

    const settingsClassName = s.settings
        + (isSettingsOpen ? ' ' + s.open : '')

    return <div className={settingsClassName}>

        <div onClick={todayOnClickHandler}>Today</div>
        <div onClick={thisWeekOnClickHandler}>This week</div>
        <div onClick={thisMonthOnClickHandler}>This month</div>

        {startDate || endDate ? <div onClick={recentlyOnClickHandler}>
            <span>Recently used date ranges</span>
            <div>{startDateStr} - {endDateStr}</div>
        </div> : null}

    </div>
}