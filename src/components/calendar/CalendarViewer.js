import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import createCalendar from '../public/CalendarLogic'

const CalendarViewer = () => {
    const [ViewDate, setViewDate] = useState(new Date())
    const [monthState, setMonthState] = useState(ViewDate.getMonth())
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const switchCalendar = (value) => {
        let updatedDate = ViewDate.getMonth
        updatedDate.setMonth(ViewDate.getMonth() + value)
        setViewDate(updatedDate)
        setMonthState(updatedDate.getMonth())
    }


    return (
        <div className="calendar-viewer">
            <div className="calendar-viewer-header">
                <h1 id="calendar-month-header">{months[monthState]}</h1>
                <button id="viewer-left"
                        className="calendar-btn"
                        onClick={() => switchCalendar(-1)}>
                    <FontAwesomeIcon icon="chevron-left"
                                     id="calendar-left-icon" />
                </button>
                <button id="viewer-right"
                        className="calendar-btn"
                        onClick={() => switchCalendar(1)}>
                    <FontAwesomeIcon icon="chevron-right"
                                     id="calendar-right-icon" />
                </button>
            </div>
            <div className="calendar-viewer-body">
                <div className="calendar-viewer-row cal-days">
                    <div className="cal-day">
                        S
                    </div>
                    <div className="cal-day">
                        M
                    </div>
                    <div className="cal-day">
                        T
                    </div>
                    <div className="cal-day">
                        W
                    </div>
                    <div className="cal-day">
                        T
                    </div>
                    <div className="cal-day">
                        F
                    </div>
                    <div className="cal-day">
                        S
                    </div>
                </div>
                {createCalendar(ViewDate)}
            </div>
        </div>
    )
}

export default CalendarViewer
