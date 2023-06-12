// Outputs: /prices.json
export async function get() {
  return {
    body: JSON.stringify([
      { size: "Up to 250ml", cost: "16.00", postage: "1.00" },
      { size: "251ml to 350ml", cost: "18.00", postage: "1.00" },
      { size: "351ml to 660ml", cost: "23.00", postage: "1.00" },
      { size: "661ml to 1000ml", cost: "26.00", postage: "1.00" },
      { size: "Over 1000ml", cost: "35.00", postage: "3.00" },
      { size: "Champagne (75cl)", cost: "27.00", postage: "3.00" },
    ]),
  };
}
