import { useState, useEffect } from "react";

function App() {
  const [money, setMoney] = useState(0);
  const [coin, setCoin] = useState("");
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const coinsFunc = async () => {
      const res = await fetch("https://api.coinpaprika.com/v1/tickers");
      const json = await res.json();
      const coins = json.slice(0, 100);

      setCoins(coins);
      setCoin(coins[0]);
      setLoading(false);
    };
    coinsFunc();
  }, []);
  const onChange = (event) => {
    const selected = event.target.value;
    const coin = coins.filter((current) => {
      const len = current.name.length;
      const slice = selected.slice(0, len);
      return slice === current.name;
    });
    setCoin(coin[0]);
  };

  const onChanges = (event) => {
    const money = Number(event.target.value);
    setMoney(money);
  };
  return (
    <div>
      <h1>The Coins Count: {loading ? "0" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin, id) => (
            <option key={id}>
              {coin.name} ({coin.symbol})
            </option>
          ))}
        </select>
      )}
      <br />
      <label htmlFor="money">How much Money Do you have?</label>
      <br />
      <input id="money" value={money} onChange={onChanges} />
      <hr />
      {coin ? (
        <div>
          <h1>
            {coin.name} {coin.symbol}
          </h1>
          <span>{coin.first_data_at} / </span>
          <span>{coin.last_updated}</span>
          <p>{coin.quotes.USD.percent_change_24h}</p>
          <span>${coin.quotes.USD.price}</span>

          {money === 0 || "" || null ? (
            ""
          ) : (
            <h2>You can buy {money / coin.quotes.USD.price}</h2>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default App;
