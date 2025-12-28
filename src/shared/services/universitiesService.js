import { UNIVERSITIES_DATA } from "../../features/universities/data/universities";

const DELAY_MS = 800;  

export const universitiesService = {
    getAll: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(UNIVERSITIES_DATA);
            }, DELAY_MS);
        });
    },

    getById: async (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const university = UNIVERSITIES_DATA.find((u) => u.id === Number(id));
                if (university) {
                    resolve(university);
                } else {
                    reject(new Error("University not found"));
                }
            }, DELAY_MS);
        });
    },

    search: async (query) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!query) {
                    resolve(UNIVERSITIES_DATA);
                    return;
                }
                const lowerQuery = query.toLowerCase();
                const filtered = UNIVERSITIES_DATA.filter((uni) =>
                    uni.name.toLowerCase().includes(lowerQuery) ||
                    uni.city.toLowerCase().includes(lowerQuery)
                );
                resolve(filtered);
            }, DELAY_MS / 2); 
        });
    }
};
