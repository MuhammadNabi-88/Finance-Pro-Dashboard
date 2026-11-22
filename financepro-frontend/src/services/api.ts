const API = 'http://localhost:8080/api/transaktionen';
export const api = {
  getAll: () => fetch(API).then(r => r.json()),
  getStats: () => fetch(`${API}/stats`).then(r => r.json()),
  create: (data: any) => fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(r => r.json()),
  delete: (id: number) => fetch(`${API}/${id}`, { method: 'DELETE' }),
};