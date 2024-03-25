import "./table.css";
import HistoryRow from "../HistoryRow";

const HistoryTable = ({ histories }) => {
    const rows = [];

    histories.forEach(history => {    
        rows.push(<HistoryRow key={history.id} history={history} />);
    });

    return (
        <div>
            <table className="history-table">
                <thead>
                    <tr>
                        <th className="prod-column">Produto</th>
                        <th className="type-column">Movimento</th>
                        <th className="quantity-column">Quantidade</th>
                        <th className="user-column">Usuário</th>
                        <th className="date-column">Data/Hora</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};

export default HistoryTable;