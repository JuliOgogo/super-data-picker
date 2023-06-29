import {useState} from 'react';

export const useSuperDataPicker = () => {
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

    return {
        startDate, endDate, isSettingsOpen, startDateInRange, endDateInRange,
        setStartDate, setEndDate, setIsSettingsOpen, setStartDateInRange, setEndDateInRange,
        onStartChangeHandler, onEndChangeHandler, uploadOnClickHandler
    }
}