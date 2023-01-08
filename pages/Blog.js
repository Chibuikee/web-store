import React, { useState, useEffect } from "react";
import ShoeDB from "../Resources/ShoeDB.json";
import AllComents from "../components/Comments/AllComents";
import Layout1 from "../components/Layout/Layout1";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebaseConfig";
import { toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";
import BlogheaderBuilder from "../components/blog/blogheaderBuilder";
// import Image from "next/image";
import News from "../components/blog/news";
const InitiaState = {
  createdAt: Timestamp.now().toDate(),
  description: "",
  imageUrl: "",
  name: "",
};
function Blog() {
  const [formData, setFormData] = useState(() => {
    InitiaState;
  });
  const [file, setFile] = useState(null);
  const [Progess, setProgess] = useState(0);
  useEffect(() => {
    const upLoadfile = () => {
      const storageRef = ref(
        storage,
        `images/${Date.now()}${file?.imageUrl?.name}`
      );
      const uploadImageUrl = uploadBytesResumable(storageRef, file?.imageUrl);
      uploadImageUrl.on(
        "state_changed",
        (snapshot) => {
          const progressPercent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgess(progressPercent);
        },
        (err) => {
          if (err) {
            toast("Error adding image. Try Again", { type: "error" });
          }
        },
        () => {
          getDownloadURL(uploadImageUrl.snapshot.ref).then((url) => {
            setFormData((prev) => ({ ...prev, imageUrl: url }));
            toast("image added successfully", { type: "success" });
            setProgess(0);
          });
        }
      );
    };
    /**check for file in the state before calling the upload function */
    file?.imageUrl?.name && upLoadfile();
  }, [file]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleImageChange(e) {
    setFile({ imageUrl: e.target.files[0] });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.imageUrl || !formData.description || !formData.name) {
      toast("Please upload your picture and fill all the fields", {
        type: "error",
      });
      return;
    }

    const commentRef = collection(db, "Blog");
    async function writeDb() {
      try {
        await addDoc(commentRef, formData);
        toast("This value is updated, congrats", { type: "success" });
      } catch (error) {
        toast("This value is not updated, try again", { type: "error" });
      }
    }
    writeDb();
    setFormData(InitiaState);
    setFile(null);
    setProgess(0);
  }

  // add an array of data to  the database
  // To be used for uploading data to database
  // const addToDb = collection(db, "shoeDb");

  // async function uploadDatabase() {
  //   try {
  //     ShoeDB.forEach((item) => {
  //       addDoc(addToDb, item);
  //     });
  //     console.log("This Database is updated, congrats");
  //   } catch (error) {
  //     console.error("Error creating DATABASE: ", error);
  //   }
  // }

  return (
    <Layout1>
      <section>
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,1.527),rgba(0,0,0,0.5)),url('/static/images/Wallpapers/peter-aroner-KRvPP5i7DWA-unsplash.jpg')",
          }}
          className="text-[white] text-[1.5rem] bg-center bg-cover w-[100%] h-[220px]"
        >
          <h4 className="px-[28px] pt-8 text-sm">Home/Blog</h4>
          <h1 className="text-xl mmd:text-3xl font-semibold px-[28px] mt-5">
            Blog
          </h1>
        </div>
        <div className="mt-12 px-[10px] s:px-[initial] w-[90%]  mx-auto  sm:w-[540px] md:w-[720px] lg:max-w-[1280px] xl:max-w-[1536px">
          <div className="flex">
            <input placeholder="Search" />
            <FiSearch />
          </div>
          <div>
            <BlogheaderBuilder />
          </div>

          {/* <h1
            onClick={uploadDatabase}
            className="bg-[grey] text-white w-full s:w-[initial] mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            UPLOAD ALL THE DATABASE
          </h1> */}
          <div className="">
            <AllComents className="max-w-[700px] mx-auto" />
          </div>
          <div className=" m:w-[400px] mx-auto md:mx-[initial] my-10">
            <h1 className="text-[1.3rem] text-[red] font-semibold">
              WRITE A COMMENT
            </h1>
            <form className="">
              <input
                className="my-2 w-full rounded php block border-solid border border-[red]"
                type="file"
                name="imageUrl"
                placeholder=""
                accept="image/*"
                onChange={handleImageChange}
              />
              <input
                className="my-2 w-full rounded php block border-solid border border-[red]"
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData?.name}
                onChange={handleChange}
              />
              <input
                className="my-2 pb-10 rounded w-full php block border-solid border border-[red]"
                type=""
                placeholder="Your Comment"
                name="description"
                onChange={handleChange}
                value={formData?.description}
              />

              <button
                className="bg-[grey] text-white w-full s:w-[initial] mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
            <span className={`${Progess === 0 ? "hidden" : "inline"}`}>
              {Progess === 0 ? 0 : Progess}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-[1.2rem]">LATEST NEWS</h3>
            <h6 className="text-sm text-[grey] max-w-[400px]">
              Keep up to date with our latest articles and uploads. Proin eget
              tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh
              pulvinar a.
            </h6>
            <div className="mt-10">
              <News />
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
}

export default Blog;

// export async function getStaticProps(context) {
//   console.log(process.cwd());
//   return {
//     props: {},
//   };
// }
