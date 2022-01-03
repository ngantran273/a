import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
        Scheduler,
        MonthView,
        Toolbar,
        DateNavigator,
        Appointments,
        TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from './tasks';

export default class Calendar extends React.PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        data: appointments,
      };
    }
  
    render() {
        const { data } = this.state;
    
        return (
          <Paper>
            <Scheduler
              data={data}
            >
              <ViewState
                defaultCurrentDate="2021-12-27"
              />
              <MonthView />
              <Toolbar />
              <DateNavigator />
              <TodayButton />
              <Appointments />
            </Scheduler>
          </Paper>
        );
      }
    }


    