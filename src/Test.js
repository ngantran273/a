import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  TodayButton,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2021-11-01';
const schedulerData = [
  { startDate: '2021-11-01T09:45', endDate: '2021-11-01T11:00', title: 'Meeting' },
  { startDate: '2021-11-01T12:00', endDate: '2021-11-02T13:30', title: 'Go to a gym' },
];

function Test () {
    return (
        <div>
            <Paper>
                <Scheduler
                data={schedulerData}
                >
                <ViewState
                    currentDate={currentDate}
                    
                />
                <p>abc</p>
                <MonthView
                    startDayHour={9}
                    endDayHour={14}
                />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
                </Scheduler>
            </Paper>
  
        </div>
    )
}

export default React.memo(Test)
