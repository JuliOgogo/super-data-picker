import React from 'react';

type SettingsPropsType = {
    isSettingsOpen: boolean
    setIsSettingsOpen: (value: boolean) => void
    setStartDate: any
    setEndDate: any
}

export const Settings: React.FC<SettingsPropsType> = ({
                                                          isSettingsOpen,
                                                          setIsSettingsOpen,
                                                          setStartDate,
                                                          setEndDate
                                                      }) => {

    const options = ['Today', 'This week', 'This month', 'This year']

    const todayOnClickHandler = () => {
        setStartDate(new Date())
        setEndDate(new Date())
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

    return <>
        <button onClick={() => setIsSettingsOpen(true)}>Settings</button>

        {isSettingsOpen ? <div>
            <div onClick={todayOnClickHandler}>Today</div>
            <div onClick={thisWeekOnClickHandler}>This week</div>
            <div onClick={thisMonthOnClickHandler}>This month</div>
        </div> : null}
    </>
}