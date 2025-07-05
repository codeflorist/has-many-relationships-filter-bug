import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'roles',
      type: 'relationship',
      relationTo: ['admin-roles', 'user-roles'],
      hasMany: true,
    },
  ],
}
