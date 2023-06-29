interface useSettings {
    setStartDate: (data: Date | null) => void
    setEndDate: (data: any) => void
    setIsSettingsOpen: (value: boolean) => void
    startDateInRange: Date | null | undefined
    endDateInRange: Date | null | undefined
}

export const useSettings = ({
                                setStartDate,
                                setEndDate,
                                setIsSettingsOpen,
                                startDateInRange,
                                endDateInRange
                            }: useSettings) => {

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

    const onClickHandler = () => {
        setStartDate(null)
        setEndDate(null)
    }

    return {
        todayOnClickHandler,
        thisWeekOnClickHandler,
        thisMonthOnClickHandler,
        recentlyOnClickHandler,
        onClickHandler
    }
}