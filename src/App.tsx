import React, {useState} from 'react';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';

function App() {
    return (
        <div className="App">
            <SuperDataPicker/>
        </div>
    );
}

function SuperDataPicker() {

    const [data, setData] = useState(new Date())

    const onChangeHandler = (date: Date | null) => {
        if (date) setData(date)
    }

    return <div>
        <ReactDatePicker
            placeholderText={'Select start date'}
            selected={data}
            onChange={(date) => onChangeHandler(date)}/>
    </div>
}

export default App;
