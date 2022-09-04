// @ts-nocheck
import { useEffect } from "react";
import { ethers } from "../../node_modules/ethers/lib/index";
import TOKEN_ABI from "../abis/Token.json";
import "../App.css";
import config from "../config.json";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const loadBlockchainData = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    dispatch({ type: "PROVIDER_LOADED", connection: provider });
    const { chainId } = await provider.getNetwork();
    console.log(accounts[0]);
    console.log(chainId);

    const token = new ethers.Contract(
      config[chainId].DApp.address,
      TOKEN_ABI,
      provider
    );
    console.log(token.address);

    const symbol = await token.symbol();
    console.log(symbol);
    console.log(config);
  };

  useEffect(() => {
    loadBlockchainData();
  });

  return (
    <div>
      {/* Navbar */}

      <main className="exchange grid">
        <section className="exchange__section--left grid">
          {/* Markets */}

          {/* Balance */}

          {/* Order */}
        </section>
        <section className="exchange__section--right grid">
          {/* PriceChart */}

          {/* Transactions */}

          {/* Trades */}

          {/* OrderBook */}
        </section>
      </main>

      {/* Alert */}
    </div>
  );
}

export default App;
