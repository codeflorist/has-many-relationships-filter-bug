import type { CollectionConfig } from 'payload'

export const UserRoles: CollectionConfig = {
  slug: 'user-roles',
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
