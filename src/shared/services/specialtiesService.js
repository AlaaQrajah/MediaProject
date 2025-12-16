import { SPECIALTIES_DATA } from "../../features/specialties/data/specialties";

const DELAY_MS = 600; // Simulating network latency

export const specialtiesService = {
    getAll: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(SPECIALTIES_DATA);
            }, DELAY_MS);
        });
    },

    getById: async (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const specialty = SPECIALTIES_DATA.find((s) => s.id === Number(id));
                if (specialty) {
                    resolve(specialty);
                } else {
                    reject(new Error("Specialty not found"));
                }
            }, DELAY_MS);
        });
    },

    search: async (query) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!query) {
                    resolve(SPECIALTIES_DATA);
                    return;
                }
                const lowerQuery = query.toLowerCase();
                const filtered = SPECIALTIES_DATA.filter((s) =>
                    s.title.toLowerCase().includes(lowerQuery) ||
                    s.university.toLowerCase().includes(lowerQuery) ||
                    s.faculty.toLowerCase().includes(lowerQuery)
                );
                resolve(filtered);
            }, DELAY_MS / 2);
        });
    }
};
