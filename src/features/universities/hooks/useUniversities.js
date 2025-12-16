import { useQuery } from '@tanstack/react-query';
import { universitiesService } from '../../../shared/services/universitiesService';

export function useUniversities() {
    return useQuery({
        queryKey: ['universities'],
        queryFn: universitiesService.getAll,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}
