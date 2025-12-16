export const DEPARTMENTS_TREE_DATA = [
    {
        id: "uni-1",
        name: "جامعة دمشق",
        type: "university",
        children: [
            {
                id: "fac-1",
                name: "كلية الهندسة المعلوماتية",
                type: "faculty",
                children: [
                    { id: "dep-1", name: "قسم هندسة البرمجيات", type: "department" },
                    { id: "dep-2", name: "قسم الذكاء الاصطناعي", type: "department" },
                    { id: "dep-3", name: "قسم الشبكات والنظم", type: "department" },
                ],
            },
            {
                id: "fac-2",
                name: "كلية الطب البشري",
                type: "faculty",
                children: [
                    { id: "dep-4", name: "الجراحة العامة", type: "department" },
                    { id: "dep-5", name: "الأمراض الباطنة", type: "department" },
                ],
            },
        ],
    },
    {
        id: "uni-2",
        name: "جامعة حلب",
        type: "university",
        children: [
            {
                id: "fac-3",
                name: "كلية العمارة",
                type: "faculty",
                children: [
                    { id: "dep-6", name: "التصميم المعماري", type: "department" },
                    { id: "dep-7", name: "تخطيط المدن", type: "department" },
                ],
            },
        ],
    },
];
