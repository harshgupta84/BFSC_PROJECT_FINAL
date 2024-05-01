import React, { useState, useEffect } from 'react';
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";

const Logout = () => {
  const [account, setAccount] = useState('');
  const { account: metamaskAccount, connect, status } = useMetamask();

  useEffect(() => {
    const fetchAccount = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      }
    };

    fetchAccount();
  }, []);

  const handleLogout = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] })
        .then(() => {
          window.ethereum._metamask.isUnlocked = false;
          window.location.reload();
        });
    }
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      {account && <p className=' text-white mb-8'>Logged in as: {account}</p>}
      {metamaskAccount && <p>MetaMask Account: {metamaskAccount}</p>}
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: '#4CAF50',
          border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '4px',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
