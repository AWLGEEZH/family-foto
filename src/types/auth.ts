// Authentication types for family photo sharing
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'parent' | 'grandparent' | 'family';
  isInvited: boolean;
  createdAt: Date;
  lastLoginAt: Date;
  hashedPassword?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  inviteCode: string;
}

export interface Family {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  members: User[];
}

export interface Permissions {
  canUpload: boolean;
  canView: boolean;
  canComment: boolean;
  canInvite: boolean;
  canManage: boolean;
}

export const getRolePermissions = (role: User['role']): Permissions => {
  switch (role) {
    case 'parent':
      return {
        canUpload: true,
        canView: true,
        canComment: true,
        canInvite: true,
        canManage: true,
      };
    case 'grandparent':
      return {
        canUpload: true,
        canView: true,
        canComment: true,
        canInvite: false,
        canManage: false,
      };
    case 'family':
      return {
        canUpload: true,
        canView: true,
        canComment: true,
        canInvite: false,
        canManage: false,
      };
    default:
      return {
        canUpload: false,
        canView: false,
        canComment: false,
        canInvite: false,
        canManage: false,
      };
  }
};
