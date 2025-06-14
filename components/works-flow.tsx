
export default function WorkFlow() {
  const steps = [
    {
      id: '①',
      from: 0,
      to: 1,
      text: '💰 Any of on-chain crypto deposit',
      fee: 'Bridge spread (≈ 0.02%)',
      detail: "Start with your favorite token—USDC, ETH, or others. Deposit in seconds and gain exposure to real estate-backed assets."
    },
    {
      id: '②',
      from: 1,
      to: 2,
      text: '🏢 Deploy capital: acquire asset',
      fee: 'Acquisition/origination fee (1%)',
      detail: "We convert your deposit into fractional real estate ownership. You own part of a real-world property!"
    },
    {
      id: '③',
      from: 1,
      to: 0,
      text: '📥 Receive 80% of rental yield',
      fee: 'Operating margin (20%) → compliance, audits, profit',
      detail: "You earn real rental income. Most of it goes straight to you—passive yield, real returns."
    },
    {
      id: '④',
      from: 0,
      to: 1,
      text: '🔁 Trade RB-PROP NFT on in-house DEX',
      fee: 'Swap fee (0.25–0.30%) per trade',
      detail: "Change your mind? Trade your property-backed NFT instantly on our marketplace. No lock-ins."
    },
    {
      id: '⑤',
      from: 0,
      to: 1,
      text: '🏦 Post NFT as collateral, borrow USDC',
      fee: 'Leverage fee (6–7% APR)',
      detail: "Need liquidity? Use your property share NFT to borrow USDC—without selling your stake."
    },
    {
      id: '⑥',
      from: 1,
      to: 0,
      text: '🚪 Asset exit (sale / refi)',
      fee: 'Success / exit fee (0.5–0.75%)',
      detail: "Cash out when the property sells or refinances. Transparent exits with upside shared back to you."
    },
  ];

  const columns = ['USER', 'REAL BLOCK Bridge', 'PROPERTY'];

  return (
    <section className="min-h-screen pt-32 pb-24 bg-[#e9d6ba] px-4 font-sans">
      <div className="max-w-7xl w-full mx-auto">
        {/* Top Heading */}
        <div className="text-center text-[#d02218] mb-8 -mt-8">
          <h2 className="text-4xl font-bold mb-2">How Does It Work?</h2>
          <p className="text-lg font-medium">💼 It’s safe, easy, and built for crypto users</p>
        </div>

        {/* Columns and Lifelines */}
        <div className="relative grid grid-cols-3 text-center text-[#d02218] text-xl font-semibold mb-8">
          {columns.map((col, i) => (
            <div key={i} className="relative">
              <div className="mb-2">{col}</div>
              <div className="absolute left-1/2 -translate-x-1/2 top-8 h-[600px] w-[3px] bg-[#d02218] z-0"></div>
            </div>
          ))}
        </div>

        {/* Step lines */}
        <div className="relative mb-10">
          {steps.map((step, index) => {
            const colWidth = 100 / 3;
            const fromCenter = (step.from + 0.5) * colWidth;
            const toCenter = (step.to + 0.5) * colWidth;
            const isLTR = step.from < step.to;

            const topOffset = 60 + index * 70;
            const lineLength = Math.abs(toCenter - fromCenter);
            const lineLeft = Math.min(fromCenter, toCenter);
            const labelCenter = (fromCenter + toCenter) / 2;

            return (
              <div key={index} className="absolute w-full" style={{ top: `${topOffset}px` }}>
                {/* Text block aligned above the line */}
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-full text-center w-max"
                  style={{ left: `${labelCenter}%`, top: '-0.5rem' }}
                >
                  <div className="text-[#d02218] font-bold text-l">
                    {step.id} {step.text}
                  </div>
                </div>

                {/* Solid Arrow Line */}
                <div
                  className="absolute top-1/2 transform -translate-y-1/2"
                  style={{
                    left: `${lineLeft}%`,
                    width: `${lineLength}%`,
                    height: '3px',
                    backgroundColor: '#d02218',
                  }}
                >
                  <div
                    className={`absolute ${
                      isLTR ? 'right-0 rotate-45' : 'left-0 rotate-[225deg]'
                    } top-1/2 w-3 h-3 border-t-2 border-r-2 border-[#d02218] transform -translate-y-1/2`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Step Details */}
        <div className="mt-125 w-screen pb-4 -ml-48.5">
          <div className="flex gap-6 w-max px-2">
            {steps.map((step, i) => (
              <div
                key={i}
                className="w-64 shrink-0 bg-white/70 backdrop-blur-md border border-[#d02218] p-4 rounded-xl shadow-sm"
              >
                <div className="text-[#d02218] text-base font-semibold mb-1">
                  {step.id} {step.text}
                </div>
                <p className="text-sm text-gray-700">{step.detail}</p>
                {/* <p className="mt-2 text-xs italic text-gray-600">{step.fee}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
