import React from 'react';
import ScheduleItem from './scheduleItem';

export default Schedule = () => (

    <div>
        <h4 className="center">February</h4>
        <table className="bordered responsive" table-layout="fixed">
            <thead>
            <tr>
                <th data-field="date-title">Date</th>
            </tr>
            </thead>
                <tbody>
                <tr>
                    <th data-field="date">2/10/17</th>
                    <ScheduleItem />
                </tr>
                <tr>
                    <th data-field="date">2/10/17</th>
                    <ScheduleItem />
                </tr>
                </tbody>
        </table>
    </div>

);