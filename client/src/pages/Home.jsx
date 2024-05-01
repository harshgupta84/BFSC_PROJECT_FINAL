import React, { useState, useEffect } from 'react';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../middleware';
import Logo from '../assets/DreamFund.png';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div style={{
      backgroundColor: '#111827', // Change background color
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px',
      borderRadius: '8px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '16px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
         {/* Logo on the left */}
        <div>
          <h1 style={{ fontFamily: 'Epilogue', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '12px' }}>
            Welcome to DreamFund
          </h1>
          <p style={{ fontFamily: 'Epilogue', fontSize: '1.25rem', color: '#9CA3AF', marginTop: '0' }}>
            Empowering Aspirations, Supporter by Supporter
          </p>
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '1200px' }}>
        <DisplayCampaigns
          title="All Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
          cardBackgroundColor="#1F2937" // Change background color for card
        />
      </div>
    </div>
  );
};

export default Home;
