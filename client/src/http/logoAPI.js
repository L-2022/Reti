import { $authHost, $host } from "./index";

export const fetcLogOut = async () => {
  const { data } = await $authHost.get("api/user/logout");
  return data;
};

export const fetchUserInfo = async () => {
  const { data } = await $authHost.get("api/user/profile");
  return data;
};

export const fetchReviews = async (id) => {
  const { data } = await $host.get("api/review/getreview/" + id);
  return data;
};

export const createLogo = async (logo) => {
  const { data } = await $authHost.post("api/logo", logo);

  return data;
};

export const fetchLogo = async () => {
  const { data } = await $host.get("api/logo");
  return data;
};




export const fetchOneLogo = async (id) => {
  const { data } = await $host.get("api/logo/" + id);
  return data;
};

export const createReview = async ({ id, review }) => {
  const { data } = await $authHost.post("api/review/add/" + id, { review });
  return data;
};

export const selectedRating = async ({
  id,
  listRatingsId,
  logoId,
  postedRating,
}) => {
  console.log(logoId, listRatingsId, postedRating, "ApI");
  const { data } = await $authHost.post("api/user/addreting/" + id, {
    listRatingsId,
    logoId,
    postedRating,
  });
  return data;
};

export const fetchReting = async ({ id, logoId, listRatingsId }) => {
  const { data } = await $authHost.get("api/user/getreting/" + id, {
    params: { logoId, listRatingsId },
  });
  console.log(data, "data")
  return data;
};