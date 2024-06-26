import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStateContext } from "../middleware";
import { CountBox, CustomButton, Loader } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { dashboard, thirdweb } from "../assets";

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);
  const remainingDays = daysLeft(state.deadline);

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);
    setDonators(data);
  };

  const handleDonate = async () => {
    setIsLoading(true);
    await donate(state.pId, amount);
    navigate("/");
    setIsLoading(false);
  };

  return (
    <div className=" border border-dashed p-6 sm:p-10 bg-gray-900 min-h-screen">
      {isLoading && <Loader />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={state.image}
            alt="campaign"
            className="w-full h-[410px] object-cover rounded-xl shadow-md"
          />
          <div className="relative w-full h-3 bg-gray-800 mt-2">
            <div
              className="absolute h-full bg-blue-100"
              style={{
                width: `${calculateBarPercentage(
                  state.target,
                  state.amountCollected
                )}%`,
                maxWidth: "100%",
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="grid max-h-5 grid-cols-1 md:grid-cols-3 gap-6">
            <CountBox title="Days Left" value={remainingDays} />
            <CountBox
              title={`Raised of ${state.target}`}
              value={state.amountCollected}
            />
            <CountBox title="Total Backers" value={donators.length} />
          </div>
          <div className="p-4 border border-dashed border-white rounded-lg">
            <h4 className="font-semibold text-white">Donors</h4>
            <div className="space-y-2">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    key={`${item.donator}-${index}`}
                    className="flex justify-between items-center text-white"
                  >
                    <p>
                      {index + 1}. {item.donator}
                    </p>
                    <p>${item.donation}</p>
                  </div>
                ))
              ) : (
                <p className="text-white">No donors yet. Be the first one!</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="text-gray-300">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 cursor-pointer">
              <img
                src={dashboard}
                alt="user"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h4 className="font-semibold text-white">{state.owner}</h4>
              <p className="text-gray-400">10 Campaigns</p>
            </div>
          </div>

          <div className="border border-dashed border-grey-400 rounded-lg p-4">
            <h4 className="font-semibold text-white">Story</h4>
            <p className="leading-7">{state.description}</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Fund</h4>
          <div className="p-4 border border-dashed rounded-lg">
            <p className="font-medium text-xl text-white text-center mb-6">
              Fund the campaign
            </p>
            <input
              type="number"
              placeholder="ETH 0.1"
              step="0.01"
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 mb-4"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <div className="p-4 bg-gray-700 rounded-md mb-6">
              <h4 className="font-semibold text-sm text-white mb-2">
                Back it because you believe in it.
              </h4>
              <p className="text-gray-400">
                Support the project for no reward, just because it speaks to
                you.
              </p>
            </div>

            <CustomButton
              btnType="button"
              title="Fund Campaign"
              styles="w-full text-blue-500 hover:bg-purple-700"
              handleClick={handleDonate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
