import React from "react";
import RegisteredUser from "./RegisteredUser";
import Web3 from "web3";
import { useHistory } from "react-router-dom";

let history;

const loadWeb3 = async () => {
  if (window.ethereum) {
    console.log("ethereum is available on window", window);
    window.web3 = new Web3(window.ethereum);
    console.log("window.web3 is provided from Web3", window.web3);
    try {
      await window.ethereum.enable();
      if (history) {
        console.log("login to mandalore");
        history.push("/login");
      }
    } catch (error) {
      window.alert(
        "MetaMask Login failed. Please retry connecting metamask or re-installing metamask...."
      );
    }
  } else if (window.web3) {
    console.log("Trying alternate via using window.web3", window);
    window.web3 = new Web3(window.web3.currentProvider);
    console.log("web3 is initialized with current provider");
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};

export default function Nav() {
  history = useHistory();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Mandalore
        </a>
        <form className="form-inline mt-2 mt-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Avatar"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <RegisteredUser />
      </nav>
    </div>
  );
}
