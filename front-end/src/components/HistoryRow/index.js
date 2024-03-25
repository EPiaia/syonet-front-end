import "./row.css";

const HistoryRow = ({ history }) => {
    return (
        <tr>
            <td>{history.product}</td>
            <td>{history.type}</td>
            <td className="quantity-column">{history.quantity}</td>
            <td>{history.user}</td>
            <td className="date-column">{history.dateHour}</td>
        </tr>
    );
};

export default HistoryRow;