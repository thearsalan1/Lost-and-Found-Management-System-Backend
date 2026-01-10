import z from "zod";

export const signupSchema = z.object({
  email:z.string().email('Invalid email formate'),
  password:z.string()
  .min(8,'Password must be  at least 8 character long ')
  .regex(/[a-z]/,'Password must contain lowercase letter')
  .regex(/[A-Z]/, 'Password must contain uppercase letter')
    .regex(/[0-9]/, 'Password must contain number')
    .regex(/[^a-zA-Z0-9]/, 'Password must contain special character'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phoneNumber: z.string().optional()
});

export const loginSchema =  z.object({
  email:z.string().email('Invalid email formate'),
  password:z.string().min(1)
});

export const createItemSchema = z.object ({
  title:z.string().min(3).max(100),
  description:z.string().min(3).max(1000),
  category:z.enum(['electronics', 'documents', 'clothing', 'jewelry', 'keys', 'wallet', 'bag', 'other']),
  status:z.enum(['lost','found'])
})