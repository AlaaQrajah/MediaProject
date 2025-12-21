import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { notificationsService } from "../../../shared/services/notificationsService";

export function useNotifications() {
    const queryClient = useQueryClient();


    const query = useQuery({
        queryKey: ["notifications"],
        queryFn: notificationsService.getAll,
    });

    const deleteMutation = useMutation({
        mutationFn: notificationsService.delete,
        onMutate: async (idToDelete) => {
            await queryClient.cancelQueries({ queryKey: ["notifications"] });
            const previousNotifications = queryClient.getQueryData(["notifications"]);
            queryClient.setQueryData(["notifications"], (old) =>
                old ? old.filter((n) => n.id !== idToDelete) : []
            );
            return { previousNotifications };
        },
        onError: (err, idToDelete, context) => {
            
            if (context?.previousNotifications) {
                queryClient.setQueryData(["notifications"], context.previousNotifications);
            }
        },
        onSettled: () => {
            
            queryClient.invalidateQueries({ queryKey: ["notifications"] });
        },
    });

    return { ...query, deleteNotification: deleteMutation.mutate };
}
