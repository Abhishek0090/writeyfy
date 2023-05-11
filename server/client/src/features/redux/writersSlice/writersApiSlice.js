import { apiSlice } from '../features/app/api/apiSlice';

export const writersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({ 
    writerRegister: builder.mutation({
      query: (credentials) => ({
        url: '/register',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const { 
  useWriterRegisterMutation,
} = writersApiSlice;
