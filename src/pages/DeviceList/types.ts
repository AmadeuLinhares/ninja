import { z } from 'zod'
export const cosentCollectionFormSchema = z.object({
  system_name: z
    .string({
      required_error: `Field require`,
    })
    .min(10, {
      message: `Need a longer name`,
    })
    .transform((name) => name.toLowerCase()),
  device_type: z
    .string({ required_error: `Field require` })
    .transform((device) => device.toLocaleUpperCase()),
  hdd_capacity: z.string().regex(/^\d+$/, {
    message: `Must be a number`,
  }),
})

export type Form = z.infer<typeof cosentCollectionFormSchema>
