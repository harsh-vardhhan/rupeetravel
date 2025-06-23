"use client";
import { useState } from 'react';
import BottomSheet from './BottomSheet';

const luggagePolicies = {
  "VietJet Air": {
    carryOn: { weight: "7kg", free: true },
    checked: { weight: "0kg", free: false, note: "Must purchase separately" },
    extraCheckedOptions: [
      { weight: "20kg", weightValue: 20, beforeThreeHours: 2030, afterThreeHours: 4060 },
      { weight: "30kg", weightValue: 30, beforeThreeHours: 3080, afterThreeHours: 5180 },
      { weight: "40kg", weightValue: 40, beforeThreeHours: 4060, afterThreeHours: 6160 },
      { weight: "50kg", weightValue: 50, beforeThreeHours: 5180, afterThreeHours: 7210 },
      { weight: "60kg", weightValue: 60, beforeThreeHours: 6160, afterThreeHours: 8210 },
      { weight: "70kg", weightValue: 70, beforeThreeHours: 7210, afterThreeHours: 10160 },
    ],
  },
  "Vietnam Airlines": {
    carryOn: { weight: "12kg", free: true },
    checked: { weight: "23kg", free: true },
  },
  "Air India": {
    carryOn: { weight: "7kg", free: true },
    checked: { weight: "25kg", free: true },
  },
};

export default function LuggagePolicyButton({ airline }) {
  const [showSheet, setShowSheet] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState(20);
  const policy = luggagePolicies[airline];
  const vietjet = airline === 'VietJet Air';
  const handleLuggageClick = () => {
    if (policy) setShowSheet(true);
  };
  let vietjetOption = vietjet && policy.extraCheckedOptions.find(opt => opt.weightValue === selectedWeight);

  return (
    <>
      <button
        type="button"
        className="bg-emerald-300 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-1"
        onClick={handleLuggageClick}
      >
        Luggage Policy
      </button>
      <BottomSheet open={showSheet} onClose={() => setShowSheet(false)}>
        {policy && (
          <div className="space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🧳</span>
              <h3 className="text-lg font-bold">{airline} Luggage Policy</h3>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
                <span className="text-xl">🎒</span>
                <div>
                  <span className="font-semibold">Carry-on:</span> <span className="font-mono">{policy.carryOn.weight}</span> {policy.carryOn.free ? <span className="text-green-600 font-medium">(Free)</span> : <span className="text-red-600 font-medium">(Paid)</span>}
                </div>
              </div>
              <div className="flex items-center gap-2 bg-yellow-50 rounded-lg px-3 py-2">
                <span className="text-xl">🧳</span>
                <div>
                  <span className="font-semibold">Checked:</span> <span className="font-mono">{policy.checked.weight}</span> {policy.checked.free ? <span className="text-green-600 font-medium">(Free)</span> : <span className="text-red-600 font-medium">(Paid)</span>}
                  {policy.checked.note && <div className="text-xs text-gray-500 mt-1">{policy.checked.note}</div>}
                </div>
              </div>
            </div>
            {vietjet && (
              <div className="mt-4 bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">➕</span>
                  <span className="font-semibold">Add Extra Checked Baggage</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={70}
                  step={10}
                  value={selectedWeight}
                  onChange={e => setSelectedWeight(Number(e.target.value))}
                  className="w-full accent-orange-500 mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  {policy.extraCheckedOptions.map(opt => (
                    <span key={opt.weight}>{opt.weight}</span>
                  ))}
                </div>
                {vietjetOption && (
                  <div className="mt-3 p-3 bg-white rounded-lg border border-orange-100">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">🧳</span>
                      <span className="font-medium">{vietjetOption.weight} checked baggage</span>
                    </div>
                    <div className="flex flex-col gap-1 mt-1 text-sm">
                      <span>💸 <span className="font-semibold">₹{vietjetOption.beforeThreeHours}</span> <span className="text-gray-500">(booked &gt;3h before flight)</span></span>
                      <span>💸 <span className="font-semibold">₹{vietjetOption.afterThreeHours}</span> <span className="text-gray-500">(booked &lt;3h before flight)</span></span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </BottomSheet>
    </>
  );
} 