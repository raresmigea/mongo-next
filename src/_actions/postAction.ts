'use server';

import PostModel from '@/models/postModel';
import connectDB from '@/config/database';

export async function getPosts() {
  debugger;
  try {
    await connectDB();

    const data = await PostModel.find();

    console.log('data: ', data);
    return { msg: 'GET' };
  } catch (error) {
    if (error instanceof Error) {
      return { errMsg: error.message };
    }
    return { errMsg: 'An unknown error occurred' };
  }
}
