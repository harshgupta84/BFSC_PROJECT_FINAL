import React from "react";

const About = () => {
  return (
    <div className=" w-fit m-4">
      <div class="space-y-4">
        <details
          class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900">
              1. Create or connect your Metamask wallet.
            </h2>

            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700">
            The first thing you need to use DreamFund is to have a Metamask wallet. If you don't have 
            one, create the wallet and click on 'Connect your wallet' button to start the process. 
          </p>
        </details>

        <details class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900">
              2. Create Campaign.
            </h2>

            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700">
            Select Campaign tab to create a new campaign. All the entries of the form are mandatory.
            For creating a campaign, certain amount of coins are required. It needs to be paid by the 
            campaign creator using his Metamask wallet. The campaign gets listed on the homepage.
          </p>
        </details>
        <details class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900">
              3. Know Campaign details.
            </h2>

            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700">
           All the campaigns available are listed on the Homepage. Click on any campiagn for its details.
           You can know the target, the story and the donors that have backed the campaign. 
          </p>
        </details>
        <details class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900">
              4. Donate to a campaign.
            </h2>

            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700">
            You can donate to a campaign by clicking the fund campiagn button on campaign details page. 
            You can donate whatever amount of coins you want. The transaction will be performed using 
            your Metamask wallet. 
          </p>
        </details>
        <details class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900">
              5. Disconnecting your wallet
            </h2>

            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700">
           For logging out of your Metamask wallet, click on Logout tab. It ensures the security of the currency or coins in your wallet.
          </p>
        </details>
        <details class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900">
            6. Still have queries?
            </h2>

            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700">
          For any more assistance, contact us at info@dreamfund.com.
          </p>
        </details>
             </div>
    </div>
  );
};

export default About;
