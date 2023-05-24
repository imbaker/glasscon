// Outputs: /builtwith.json
export async function get({params, request}) {
  return {
    body: JSON.stringify({
      size: 'Astro',
      cost: 'https://astro.build/',
      postage: 'a'
    })
  };
}