import React from 'react';

type SettingsPropsType = {
    isSettingsOpen: boolean
    setIsSettingsOpen: (value: boolean) => void
}

export const Settings: React.FC<SettingsPropsType> = ({isSettingsOpen}) => {
    return <span>
        Settings
    </span>
}