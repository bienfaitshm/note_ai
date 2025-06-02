
import {z } from "zod"

export const ColorSchemas =  z.object({
    bgColor: z.string(),
    textColor:z.string()
  })

export type ColorSchemasType = z.infer<typeof ColorSchemas>

export const NoteSchemas = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  color: z.union([z.number(),z.string()]).optional()
})

export type NoteSchemasType = z.infer<typeof NoteSchemas>
