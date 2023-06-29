import React, {Dispatch, SetStateAction} from 'react';
import {getFromLocalStorage} from '../../../common/localStorage';
import s from './Settings.module.css'

type SettingsPropsType = {
    isSettingsOpen: boolean
    setIsSettingsOpen: (value: boolean) => void
    setStartDate: (data: Date) => void
    setEndDate: any
    //setEndDate: Dispatch<SetStateAction<Date | undefined>>
}

export const Settings: React.FC<SettingsPropsType> = ({
                                                          isSettingsOpen,
                                                          setIsSettingsOpen,
                                                          setStartDate,
                                                          setEndDate
                                                      }) => {

    const startDate = getFromLocalStorage('startDate')?.slice(0, 16)
    const endDate = getFromLocalStorage('endDate')?.slice(0, 16)

    const todayOnClickHandler = () => {
        setStartDate(new Date())
        setEndDate()
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
            <div>{startDate} - {endDate}</div>
        </div> : null}

    </div>
}