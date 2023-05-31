import axios from "axios"
import { useState, useEffect } from "react"
import './FetchCoin.css'



function FetchCoin() {

    const [coin, setCoin] = useState([])
    
    useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoin(res.data);
      });
  }, []);
    
  return (
    <>
           
      {
        coin.map((crypt) => {
          return (
            //<li key={crypt.id}>
              //{crypt.current_price.toLocaleString()}
            //</li>
            <table className="table-landing" key={crypt.id}>
              <tbody>
            <tr className="table-row">
              <td><img src={crypt.image} alt="image" className="coin-image" /></td>
              <td>{crypt.name} <br /> {crypt.symbol}</td>
              <td>
                ${crypt.current_price.toLocaleString()} <br />
                  <td className="table-cell-trend">
                    {crypt.price_change_percentage_24h.toFixed(2) < 0 ? (
                      <td className="red">▼{crypt.price_change_percentage_24h.toFixed(2)}%</td>
                    ) : (
                      <td className="green">▲{crypt.price_change_percentage_24h.toFixed(2)}%</td>
                    )}
                  </td>
              </td>
              <td><button className="trade-button">Trade</button></td>
                </tr>
                </tbody>
          </table>
          );
        })
         }
    </>
  )
}

export default FetchCoin