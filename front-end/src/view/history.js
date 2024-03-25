import React, { useState } from 'react';
import HistoryDataTable from '../components/HistoryDataTable';
import TopBar from '../components/TopBar';

const History = () => {
    return (
        <div>
            <TopBar />
            <div className="body-container">
                <div className="history-container">
                    <HistoryDataTable />
                </div>
            </div>
        </div>
    );
};

export default History;