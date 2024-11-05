import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import storage, {storageKeys} from 'lib/db/localStorage';
//@ts-ignore
import {REACT_APP_RAPID_API_KEY} from '@env'; // typescript shows a false warning here. Env has been configured properly
import {L} from 'utils/helpers';

// Define a type for the slice state
interface NewsState {
  articles: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

// Define the initial state using that type
const initialState: NewsState = {
  articles: [],
  status: 'idle',
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  L('fetchNews runing');

  const newsFromCache = await storage.getItem(storageKeys.NEWS_ARTICLES);

  if (newsFromCache) {
    L('got newsFromCache');
    return newsFromCache;
  }
  L('newsFromCache is null getting remotely:');

  try {
    const options = {
      method: 'GET',
      url: 'https://google-news13.p.rapidapi.com/latest',
      params: {lr: 'en-US'},
      headers: {
        'x-rapidapi-key': `${REACT_APP_RAPID_API_KEY}`,
        'x-rapidapi-host': 'google-news13.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);

    L('fetchNews response data:', response?.data);
    await storage.setItem(storageKeys.NEWS_ARTICLES, response.data.items);
    L('persisted in cache');

    return response.data.items;
  } catch (error: any) {
    L('fetchNews error:', error);

    return [];
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
