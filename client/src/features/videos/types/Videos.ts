export type VideoItem = {
  id: string;
  snippet: VideoSnippet;
};
export type VideoSnippet = {
  title: string;
  resourceId: {
    videoId: string;
  };
};
