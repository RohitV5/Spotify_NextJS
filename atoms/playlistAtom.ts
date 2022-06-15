import { atom, RecoilState } from 'recoil';
import { PlaylistObjectSimplified } from '../types/spotify.types';

export const playlistListState: RecoilState<PlaylistObjectSimplified[]> = atom({
  key: 'playlistListState',
  default: null,
});

export const selectedPlaylistState: RecoilState<PlaylistObjectSimplified> =
  atom({
    key: 'selectedPlaylistState',
    default: null,
  });

export const playlistIdState: RecoilState<string> = atom({
  key: 'playlistIdState',
  default: '52VJLpynVIfQsk0TCjSm84',
});

export default { playlistIdState, playlistListState, selectedPlaylistState };
