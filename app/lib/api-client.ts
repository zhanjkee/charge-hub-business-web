// import { fetchFromApi } from './api-helpers';

// // ... Other imports remain the same ...

// export async function fetchRevenue() {
//   try {
//     // Replace SQL query with an API request
//     const data = await fetchFromApi('/api/revenue');
//     return data.rows;
//   } catch (error) {
//     console.error('API Error:', error);
//     throw new Error('Failed to fetch revenue data.');
//   }
// }

// export async function fetchLatestInvoices() {
//   try {
//     // Replace SQL query with an API request
//     const data = await fetchFromApi('/api/latest-invoices');
//     const latestInvoices = data.rows.map((invoice) => ({
//       ...invoice,
//       amount: formatCurrency(invoice.amount),
//     }));
//     return latestInvoices;
//   } catch (error) {
//     console.error('API Error:', error);
//     throw new Error('Failed to fetch the latest invoices.');
//   }
// }