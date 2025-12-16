import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { notificationsService } from "../../../shared/services/notificationsService";

export function useNotifications() {
    const queryClient = useQueryClient();

    // Fetch API
    const query = useQuery({
        queryKey: ["notifications"],
        queryFn: notificationsService.getAll,
    });

    // Optimistic Delete Mutation
    const deleteMutation = useMutation({
        mutationFn: notificationsService.delete,
        onMutate: async (idToDelete) => {
            // 1. Cancel outgoing refetches
            await queryClient.cancelQueries({ queryKey: ["notifications"] });

            // 2. Snapshot previous value
            const previousNotifications = queryClient.getQueryData(["notifications"]);

            // 3. Optimistic Update
            queryClient.setQueryData(["notifications"], (old) =>
                old ? old.filter((n) => n.id !== idToDelete) : []
            );

            // Return context with rollback value
            return { previousNotifications };
        },
        onError: (err, idToDelete, context) => {
            // 4. Rollback on error
            if (context?.previousNotifications) {
                queryClient.setQueryData(["notifications"], context.previousNotifications);
            }
        },
        onSettled: () => {
            // 5. Refetch to sync state
            queryClient.invalidateQueries({ queryKey: ["notifications"] });
        },
    });

    return { ...query, deleteNotification: deleteMutation.mutate };
}
