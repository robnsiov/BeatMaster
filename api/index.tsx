const api = {
  BASE_URL: "https://music-player.iran.liara.run",
  songs: "/songs/",
  top: "/top/first/",
  liked: "/liked/",
  signin: "/auth/login/",
  signup: "/auth/signup/",
  isAuth: "/auth/is_authenticated/",
  isLiked: (slug: string) => `/songs/${slug}/like/`,
};

export default api;
