import type { CollectionConfig } from 'payload'

export const AdminRoles: CollectionConfig = {
  slug: 'admin-roles',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
