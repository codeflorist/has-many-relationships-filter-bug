import { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-mongodb'

export async function up({ payload, req, session }: MigrateUpArgs): Promise<void> {
  const userRole = await payload.create({
    collection: 'user-roles',
    data: {
      title: 'User Role 1',
    },
  })
  const adminRole = await payload.create({
    collection: 'admin-roles',
    data: {
      title: 'Admin Role 1',
    },
  })

  await payload.create({
    collection: 'users',
    data: {
      email: 'user@example.com',
      password: 'password123',
      roles: [
        {
          relationTo: 'user-roles',
          value: userRole.id,
        },
        {
          relationTo: 'admin-roles',
          value: adminRole.id,
        },
      ],
    },
  })
}

export async function down({ payload, req, session }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'users',
    where: {},
  })
  await payload.delete({
    collection: 'admin-roles',
    where: {},
  })
  await payload.delete({
    collection: 'user-roles',
    where: {},
  })
}
