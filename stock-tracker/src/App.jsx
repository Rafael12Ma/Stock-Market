import classes from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TradingViewWidget from "./components/TradingViewWidget.jsx";

function App() {
  return (
    <div className={classes.container}>
      <TradingViewWidget />
    </div>
    // <div className="App">
    //   <div className="container">hello</div>
    //   <table className="table mt-5">
    //     <thead>
    //       <tr>
    //         <th>Ticker</th>
    //         <th>Price</th>
    //         <th>Date</th>
    //         <th>Time</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <StockRow ticker="aapl" />
    //       <StockRow ticker="google" />
    //       <StockRow ticker="msft" />
    //       <StockRow ticker="tsla" />
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default App;
