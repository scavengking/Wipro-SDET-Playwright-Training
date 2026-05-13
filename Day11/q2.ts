// q2.ts

enum Role {
  Admin = "Admin",
  Editor = "Editor",
  Guest = "Guest"
}

const PermissionMap: Record<Role, boolean> = {
  [Role.Admin]: true,
  [Role.Editor]: true,
  [Role.Guest]: false,
};

console.log(PermissionMap);

