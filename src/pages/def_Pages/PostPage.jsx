
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useCallback } from "react";
import { request } from "../../server/request";
import Loading from "../../components/loading/Loading";
import { URL_IMG } from "../../const/const";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    user: "",
    tags: [],
    title: "",
    description: "",
    photo: "",
  });
  const { user, tags, title, description, photo } = post;

  const [loading, setLoading] = useState(false);
  const [loadingComment, setLoadingComment] = useState(false);

  const getPost = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await request(`post/${id}`);
      console.log();
      setPost(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const getComments = useCallback(async () => {
    try {
      setLoadingComment(true);
      const { data } = await request(`comment?post=${id}`);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoadingComment(false);
    }
  }, [id]);

  useEffect(() => {
    getPost();
    getComments();
  }, [getPost, getComments]);

  return (
    <div className="container pt-10">
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <img
            className="w-full sm:h-[400px] object-cover md:h-[500px]"
            src={
              photo && URL_IMG + photo?._id + "." + photo.name?.split(".")[1]
            }
            alt=""
          />
          <div className="w-3/4 mx-auto py-8">
            <div className="flex gap-3">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={URL_IMG}
                alt=""
              />
              <div>
                <h3 className="text-sm sm:text-base text-[#592EA9] font-semibold">
                  {user?.first_name + " " + user?.last_name}
                </h3>
                <p className="text-xs text-[#6D6E76]">
                  Posted on {post?.createdAt?.split("T")[0]}
                </p>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold py-7">{title}</h2>
            <h3 className="text-base sm:text-xl font-semibold pb-4">
              {post?.category?.name + ` (${tags?.map((el) => `#${el}`)})`}
            </h3>
            <p className="py-4 text-sm sm:text-base text-[#6D6E76]">
              {description}
            </p>
          </div>
        </Fragment>
      )}
      {loadingComment ? (
        <Loading />
      ) : (
        <Fragment>
          <h2 className="py-4 font-semibold text-xl sm:text-2xl"></h2>
        </Fragment>
      )}
    </div>
  );
};

export default PostPage;
