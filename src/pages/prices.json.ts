// Outputs: /prices.json
export async function GET() {
  return new Response(
    JSON.stringify([
      { size: "Up to 330ml", cost: "19.00" },
      { size: "331ml to 660ml", cost: "22.00" },
      { size: "661ml to 1000ml", cost: "29.00" },
      { size: "Champagne (75cl)", cost: "33.00" },
      { size: "Magnums and larger (up to 50cm tall)", cost: "38.00" },
    ]),
  )
}
