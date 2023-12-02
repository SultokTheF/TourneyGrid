interface User {
    id: number;
    last_login: string | null;
    is_superuser: boolean;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    role: string;
    is_active: boolean;
    is_staff: boolean;
    groups: any[]; // You might want to replace 'any[]' with a specific type if the structure is known
    user_permissions: any[]; // Similarly, replace 'any[]' with a specific type if known
  }
  
  
export default User;