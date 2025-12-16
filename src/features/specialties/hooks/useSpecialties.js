import { useQuery } from '@tanstack/react-query';
import { specialtiesService } from '../../../shared/services/specialtiesService';

export function useSpecialties() {
    return useQuery({
        queryKey: ['specialties'],
        queryFn: specialtiesService.getAll,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}
