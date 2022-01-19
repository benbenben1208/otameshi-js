
export interface Admin  {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    zoom_code: string | null;
    access_token: string | null;
    refresh_token: string | null;
    zoom_expires_in: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };