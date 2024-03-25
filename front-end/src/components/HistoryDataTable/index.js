import React, { useState, useEffect } from 'react';
import { searchHistory } from "../../util/api";
import HistoryTable from '../HistoryTable';

const HistoryDataTable = ({ selectedProduct, onRowClick }) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await searchHistory();
            const data = await response.data;
            setHistory(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (<HistoryTable histories={history} />);

};

export default HistoryDataTable;