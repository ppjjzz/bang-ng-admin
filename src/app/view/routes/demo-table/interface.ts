export interface TableItem {
    id: number;
    is_delete: boolean;
    username: string;
    telephone: string;
    email: string;
    interest: string[];
    gender: 1 | 2;
    user_role: number;
    create_datetime: Date;
    home: {
        home_province: string;
        home_city: string;
        home_region: string;
    };
}
