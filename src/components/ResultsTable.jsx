

export default function ResultsTable( {rows = [], formatter}){

    if(!rows.length){
        return(
            <section id="results">
                <p className="center">Enter values to see the results!</p>
            </section>

        );
    }

    return (

        <section id="result">
            <table>
                <thead className="thead">
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>

                <tbody>
                    {rows.map((r) => (
                        <tr key={r.year}>
                            <td>{r.year}</td>
                            <td>{formatter.format(Math.round(r.valueEndOfYear))}</td>
                            <td>{formatter.format(Math.round(r.interestThisYear))}</td>
                            <td>{formatter.format(Math.round(r.totalInterest))}</td>
                            <td>{formatter.format(Math.round(r.investedCapital))}</td>
                        </tr>

                    ))}


                </tbody>

            </table>

        </section>
    );
}