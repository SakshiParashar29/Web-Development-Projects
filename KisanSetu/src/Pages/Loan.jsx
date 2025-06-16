import React from 'react';
import useTheme from '../Components/Darkmode';

const Loan = () => {
  const { themeMode } = useTheme();

  const financialNeeds = [
    "Purchase of seeds, fertilizers, and pesticides",
    "Buying and maintaining farming equipment",
    "Irrigation and water management",
    "Labor wages during peak seasons",
    "Post-harvest storage and transportation",
    "Investment in new technology and machinery",
    "Emergency funds for crop failure or natural calamities",
  ];

  const cardBaseClasses = `border shadow-2xl rounded-3xl p-8 max-w-3xl w-full transform transition duration-300 hover:scale-[1.02]`;
  const cardThemeClasses = themeMode === 'dark'
    ? 'bg-gray-800 text-white border-gray-700'
    : 'bg-white text-black border-green-200';

  const miniCardBase = `shadow-lg rounded-lg w-64 p-4`;
  const miniCardTheme = themeMode === 'dark'
    ? 'bg-gray-700 text-white'
    : 'bg-white text-black';

  const listText = themeMode === 'dark' ? 'text-gray-200' : 'text-gray-700';

  return (
    <div
      className={`min-h-[calc(100vh-74px)] flex items-center justify-center px-4 py-4 flex-col transition-colors duration-300 ${
        themeMode === 'dark'
          ? 'bg-gray-900 text-white'
          : 'bg-gradient-to-br from-green-50 via-white to-green-100 text-black'
      }`}
    >
      {/* Importance of Loans Card */}
      <div className={`${cardBaseClasses} ${cardThemeClasses}`}>
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-3xl font-bold text-green-500 playfair-font mb-2 text-center">
            Importance of Loans and Finance in Agriculture
          </h2>
          <div className="w-24 h-1 bg-green-400 rounded-full mb-4"></div>
        </div>
        <p className={`varela-round-regular text-lg italic leading-relaxed text-center ${listText}`}>
          Loans and finance are crucial in agriculture because they provide farmers with the necessary capital to purchase seeds, fertilizers, equipment, and other inputs. They help manage seasonal income gaps, invest in technology, improve productivity, and handle risks like crop failure or market fluctuations.
        </p>
      </div>

      {/* Common financial needs */}
      <div className={`${cardBaseClasses} ${cardThemeClasses} mt-4`}>
        <h2 className="text-3xl font-bold text-green-500 playfair-font mb-4 text-center">
          Common Financial Needs of Farmers
        </h2>
        <ul className={`list-disc list-inside varela-round-regular text-lg leading-relaxed space-y-2 text-left max-w-xl mx-auto ${listText}`}>
          {financialNeeds.map((need, index) => (
            <li key={index}>{need}</li>
          ))}
        </ul>
      </div>

      {/* Types of Loans */}
      <div className={`${cardBaseClasses} ${cardThemeClasses} mt-4`}>
        <h2 className="text-3xl font-bold text-green-500 playfair-font mb-6 text-center">
          Key Loan Types to Empower Indian Farmers
        </h2>
        <div className="grid grid-cols-2 gap-4 space-x-3 p-6">
          {[
            {
              title: "Crop Loan/Short-term Loan",
              items: [
                "Purpose: To meet seasonal agricultural expenses such as buying seeds, fertilizers, pesticides, labor, etc.",
                "Tenure: Usually up to 12 months",
                "Repayment: After harvest or sale of produce.",
              ],
            },
            {
              title: "Term Loan / Long-term Loan",
              items: [
                "Purpose: For capital investments like land development, irrigation systems, or buying livestock.",
                "Tenure: More than 3 years, often up to 15 years.",
                "Repayment: In installments (monthly, quarterly, or annually).",
              ],
            },
            {
              title: "Kisan Credit Card (KCC)",
              items: [
                "Purpose: To provide flexible credit for agricultural and allied needs.",
                "Features: Revolving credit, low interest rate, and insurance coverage.",
                "Renewal: Usually annually based on cropping pattern.",
              ],
            },
            {
              title: "Gold Loan",
              items: [
                "Purpose: To raise short-term funds by pledging gold ornaments.",
                "Advantages: Quick processing, lower interest rates compared to personal loans.",
                "Tenure: Typically 6 months to 3 years.",
              ],
            },
            {
              title: "Tractor/Machinery Loan",
              items: [
                "Purpose: To purchase tractors, harvesters, pumps, and other machinery.",
                "Eligibility: Farmers with proof of agricultural income.",
                "Repayment: Structured EMIs based on income flow.",
              ],
            },
          ].map((loan, idx) => (
            <div key={idx} className={`${miniCardBase} ${miniCardTheme}`}>
              <h3 className="text-center text-green-500 font-semibold">{loan.title}</h3>
              <div className="w-full h-0.5 bg-green-400 rounded-full mb-4"></div>
              <ul className={`space-y-2 ${listText}`}>
                {loan.items.map((item, i) => (
                  <li key={i}><span className="text-green-400">•</span> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Glossary */}
      <div className={`${cardBaseClasses} ${cardThemeClasses} mt-4`}>
        <h2 className="text-2xl font-bold text-green-500 playfair-font mb-4 text-center">
          Must-Know Terms for Loan Applicants
        </h2>
        <ul className={`text-left space-y-3 px-4 sm:px-10 ${listText}`}>
          <li><span className="text-green-400 font-semibold">Principal:</span> The original amount of money borrowed from the lender.</li>
          <li><span className="text-green-400 font-semibold">Interest Rate:</span> The percentage charged by the lender for borrowing the money.</li>
          <li><span className="text-green-400 font-semibold">Collateral:</span> An asset pledged as security to obtain the loan.</li>
          <li><span className="text-green-400 font-semibold">EMI:</span> A fixed monthly payment to repay the loan over time.</li>
          <li><span className="text-green-400 font-semibold">Default:</span> Failure to repay the loan as per the agreed terms.</li>
        </ul>
      </div>

      {/* Government Schemes */}
      <div className={`${cardBaseClasses} ${cardThemeClasses} mt-4`}>
        <h3 className="text-center text-3xl text-green-500">Government Schemes and Support</h3>
        <div className="w-full h-0.5 bg-green-400 rounded-full mb-4"></div>
        <ul className={`space-y-2 sm:px-8 ${listText}`}>
          <li><span className="text-green-400 font-semibold">PM-KISAN:</span> Direct income support for eligible farmers.</li>
          <li><span className="text-green-400 font-semibold">KCC:</span> Short-term loan facility for agricultural needs.</li>
          <li><span className="text-green-400 font-semibold">PM Fasal Bima Yojana:</span> Insurance against crop failure or disasters.</li>
          <li><span className="text-green-400 font-semibold">Interest Subvention Scheme:</span> Subsidy on interest for crop loans.</li>
          <li><span className="text-green-400 font-semibold">Loan Waivers:</span> Relief by state governments to reduce debt burden.</li>
        </ul>
      </div>

      {/* Do's and Don'ts */}
      <div className={`${cardBaseClasses} ${cardThemeClasses} mt-4`}>
        <h3 className="text-center text-3xl text-green-500">Do's and Don'ts while taking Loan</h3>
        <div className="grid grid-cols-2 gap-4 space-x-3 p-6">
          <div className={`${miniCardBase} ${miniCardTheme}`}>
            <h3 className="text-center text-green-500">Do's</h3>
            <ul className={`list-disc list-inside space-y-3 ${listText}`}>
              <li>Keep records.</li>
              <li>Ask for a repayment schedule.</li>
              <li>Use loans only for agricultural purposes.</li>
            </ul>
          </div>
          <div className={`${miniCardBase} ${miniCardTheme}`}>
            <h3 className="text-center text-green-500">Don'ts</h3>
            <ul className={`list-disc list-inside space-y-3 ${listText}`}>
              <li>Don’t borrow more than necessary.</li>
              <li>Don’t ignore loan terms.</li>
              <li>Don’t depend on waivers.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan;
